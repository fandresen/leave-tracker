import { useState } from "react";
import UseAbsenceValidation from "./hooks/UseAbsenceValidation";
import { dateToYMDString } from "@/lib/others";
import { ToastContainer } from "react-toastify";

const SingleAbsenceValidation = () => {
  const [comment, setComment] = useState("");
  const {absenceInfo,onApprove,onReject} = UseAbsenceValidation();

  return (
    <>
    <ToastContainer/>
    <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-8 space-y-6 transform transition-all duration-500 ease-in-out hover:scale-105">
      {/* Titre avec séparateur */}
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-sky-700">
          Validation de l'absence
        </h1>
        <p className="text-gray-500 mt-1 text-sm">
          Demande d'approbation pour absence
        </p>
      </div>

      {/* Informations sur l'employé avec fond gris clair et coins arrondis */} 
      <div className="space-y-3">
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <p className="text-gray-700 font-medium">Employé :</p>
          <p className="text-gray-900 font-semibold">{absenceInfo?.user_name}</p>
        </div>
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <p className="text-gray-700 font-medium">Date de début :</p>
          <p className="text-gray-900 font-semibold">{dateToYMDString(absenceInfo?.startDate)}</p>
        </div>
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <p className="text-gray-700 font-medium">Date de fin :</p>
          <p className="text-gray-900 font-semibold">{dateToYMDString(absenceInfo?.endDate)}</p>
        </div>
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <p className="text-gray-700 font-medium">Raison :</p>
          <p className="text-gray-900 font-semibold">{absenceInfo?.type}</p>
        </div>
      </div>

      {/* Zone de commentaire avec plus d'espace et accentuation */}
      <div className="mt-6">
        <label
          htmlFor="comment"
          className="block text-gray-700 font-medium text-lg mb-2"
        >
          Ajouter un commentaire :
        </label>
        <textarea
          id="comment"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-700"
          rows={3}
          placeholder="Votre commentaire (facultatif)"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      {/* Boutons Valider / Refuser avec plus d'interactions visuelles */}
      <div className="flex justify-end space-x-4 mt-8">
        <button
          className="w-1/3 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-5 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={onReject}
        >
          Refuser
        </button>
        <button
          className="w-1/3 bg-sky-700 hover:bg-sky-800 text-white font-semibold py-3 px-5 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={onApprove}
        >
          Valider
        </button>
      </div>
    </div>
    </>
  );
};

export default SingleAbsenceValidation;
