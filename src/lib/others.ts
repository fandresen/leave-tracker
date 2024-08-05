export const numberToMonth =(number: number):string=>{
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
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

export const dateSoustraction = (date1?: Date, date2?: Date) => {
    if (date1 && date2) {
      const diffTime = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
  };