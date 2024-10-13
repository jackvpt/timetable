exports.getWeekNumber = (date) => {
    // Copy the date to avoid modifying the original one
    const currentDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

    // Set the day to Thursday of the current week to follow ISO 8601
    const dayNumber = (currentDate.getUTCDay() + 6) % 7;
    currentDate.setUTCDate(currentDate.getUTCDate() - dayNumber + 3);

    // Calculate the first day of the year
    const firstThursday = new Date(Date.UTC(currentDate.getUTCFullYear(), 0, 4));

    // Calculate the week number
    const weekNumber = Math.ceil(((currentDate - firstThursday) / 86400000 + 1) / 7);
    return weekNumber;
}

exports.getWeekName = (weekNumber)=>{
    const weekName = weekNumber % 2 === 0 ? "A" : "B"
    return weekName
}



// export default function getWeekNumber(date) {
//     // Copy the date to avoid modifying the original one
//     const currentDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

//     // Set the day to Thursday of the current week to follow ISO 8601
//     const dayNumber = (currentDate.getUTCDay() + 6) % 7;
//     currentDate.setUTCDate(currentDate.getUTCDate() - dayNumber + 3);

//     // Calculate the first day of the year
//     const firstThursday = new Date(Date.UTC(currentDate.getUTCFullYear(), 0, 4));

//     // Calculate the week number
//     const weekNumber = Math.ceil(((currentDate - firstThursday) / 86400000 + 1) / 7);

//     const weekName = weekNumber % 2 === 0 ? "A" : "B"

//     return weekNumber;
// }