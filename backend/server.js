const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express(); // Initialize app before configuring CORS

// Configure CORS to allow requests from your frontend domain
const allowedOrigins = ['http://localhost:5173', 'http://192.168.88.5:5173'];

const corsOptions = {
  origin: function (origin, callback) {
    // Check if the origin is in the allowed origins list
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true // Enable cookies to be sent with the requests
};

app.use(cors(corsOptions));

const SECRET_KEY = 'Madastart1234*';
const PORT = 3000;

// Middleware pour les requêtes JSON
app.use(bodyParser.json());

// Chemin vers le fichier JSON simulant la base de données
const dbPath = path.join(__dirname, 'db.json');

// Fonction pour lire la base de données
const readDatabase = () => {
  const data = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(data);
};

// Route de login pour générer un token
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simulate a database check for user credentials and role
  let userRole = null;
  if (username === 'admin' && password === 'Madastart1234*') {
    userRole = 'ADMIN'; // Assume 'admin' is an 'rh'
  } else if (username === 'employee' && password === 'Madastart1234*') {
    console.log(username, password)
    userRole = 'EMPLOYEE';
  }

  if (userRole) {
    const token = jwt.sign({ username, role: userRole }, SECRET_KEY, { expiresIn: '1h' });
    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
});

// Middleware pour vérifier le token et le rôle
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      req.user = decoded; // Attach decoded token data to request object
      next();
    } catch (err) {
      console.error('Invalid token', err);
      return res.status(403).json({ message: 'Invalid token' });
    }
  } else {
    return res.status(403).json({ message: 'No token provided' });
  }
};

// Middleware pour vérifier le rôle
const checkRole = (role) => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      return res.status(403).json({ message: 'Access denied' });
    }
  };
};

// Utiliser le middleware pour protéger les routes
app.use(verifyToken);

// Exemple de route protégée accessible uniquement aux utilisateurs ayant le rôle 'rh'
app.get('/rh/data', checkRole('ADMIN'), (req, res) => {
  const data = readDatabase();
  res.status(200).json(data);
});

app.get('/absence', (req, res) => {
  const data = readDatabase();
  res.status(200).json(data.absence);
});

app.get('/soldeConger/:id', (req, res) => {
  const userId = req.params.userid;
  const data = readDatabase();
  const soldeConger = data.soldeConger
  const listSolde = soldeConger.find((element)=> element.id === userId)
  res.status(200).json(listSolde);
});

app.get('/calendar', (req, res) => {
  const { year, month } = req.query;
  const data = readDatabase();

  // Filtrer les données selon les paramètres de requête
  const filteredData = data.calendar.filter(calendarDays => {
    return calendarDays.year === parseInt(year) && calendarDays.month === parseInt(month);
  });
  res.status(200).json(filteredData[0]);
});

// 
app.get('/employee/data', checkRole('EMPLOYEE'), (req, res) => {
  const data = readDatabase();
  res.status(200).json(data);
});

//add new conger 
app.post('/absence', (req, res) => {
  const { userId, startDate, endDate, type } = req.body;
  const data = readDatabase();

  const absence = {
    userId,
    startDate,
    endDate,
    type,
    status: 'En cours'
  };

  data.absence.push(absence);

  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

  res.status(201).json(absence);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
