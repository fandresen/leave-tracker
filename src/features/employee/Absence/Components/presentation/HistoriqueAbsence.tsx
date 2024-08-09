
export default function HistoriqueAbsence() {
  return(
    <div className="w-full h-full mt-2 p-4 border-r-2">
      <h1 className="text-center text-2xl font-semibold">Historique des absences</h1>
      <div className="bg-slate-600/10 shadow-lg p-3 mt-2 justify-center items-center">
        {/* date de début , fin et jour d'absence */}
        <div className="flex justify-between">
          <label className="block text-xl font-semibold mb-2">Date début:</label>
          10/08/2024
        </div>
        <div className="flex justify-between">
          <label className="block text-xl font-semibold mb-2">Date fin:</label>
          13/08/2024
        </div>
        <div className="flex justify-between">
          <label className="block text-xl font-semibold mb-2">Jour d'absence:</label>
          2 jours
        </div>
        {/* type d'absence */}
        <div className="flex justify-between">
          <label className="block text-xl font-semibold mb-2">Type d'absence:</label>
          Maladie
        </div>
        {/* etat de la demande */}
        <div className="flex justify-between">
          <label className="block text-xl font-semibold mb-2">Etat de la demande:</label>
          <span className="text-green-400">Acceptée</span>
        </div>
      </div>
    </div>
  )
}
