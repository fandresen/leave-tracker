export const numberToMonth =(number: number):string=>{
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    return months[number-1];
}

export const getDateByDate=(date: string)=>{
    const newDate = new Date(date);
    return `${newDate.getDate()}`;
}

export const dateToYMDString=(date:string)=>{
    const newdate = new Date(date);

  // Extraction de l'année, du mois et du jour
  const year = newdate.getFullYear();
  const month = ("0" + (newdate.getMonth() + 1)).slice(-2); // +1 car les mois sont indexés à partir de zéro
  const day = ("0" + newdate.getDate()).slice(-2);
  // Formatage de la date
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export const getDateByWeekday=(date: string, weekday: number)=>{
  const newDate = new Date(date);
  const daysOfWeek = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  newDate.setDate(newDate.getDate() + weekday);
  return daysOfWeek[newDate.getDay()];
}


export const dateSoustraction = (date1?: Date, date2?: Date |null) => {
    if (date1 && date2) {
      const diffTime = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
  };

export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[&"'(\-_çà)=¹~#{\[|\]`\\^@}\]!\*§;,\?\.\/+\£¨\^$])[A-Za-z\d&"'(\-_çà)=¹~#{\[|\]`\\^@}\]!\*§;,\?\.\/+\£¨\^$]{8,}$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const getSecondsSinceDate = (pastDate : string) : number =>{
  const past = new Date(pastDate);
  const now = new Date();
  return Math.abs(now.getTime() - past.getTime()) / 1000;
}
