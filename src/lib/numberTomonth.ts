export const numberToMonth =(number: number):string=>{
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
    return months[number-1];
}
export const getDateByDate=(date: string)=>{
    const newDate = new Date(date);
    return `${newDate.getDate()}`;
}