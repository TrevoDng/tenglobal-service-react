//const getDate = new Date().toISOString();
    //const getDate2 = new Date().toUTCString();
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // add 1 because getMonth() returns a zero-based index
    const year = currentDate.getFullYear();

export const formattedDate = `${month}-${day}-${year}`;

    console.log(formattedDate); // e.g. "2/22/2023"

    const currentYearString = new Date().getFullYear().toString();
   // const getTimeStamp = FirebaseOptions.database.serverValue.TIMESTAMP;

   const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();

export  const formattedTime = `${hours}:${minutes}:${seconds}`;

console.log(formattedTime); // e.g. "13:45:22"

// This would come from the server.
// Also, this whole block could probably be made into an mktime function.
// All very bare here for quick grasping.
var d = new Date();
d.setUTCFullYear(2004);
d.setUTCMonth(1);
d.setUTCDate(29);
d.setUTCHours(2);
d.setUTCMinutes(45);
d.setUTCSeconds(26);

console.log(d);                        // -> Sat Feb 28 2004 23:45:26 GMT-0300 (BRT)
console.log(d.toLocaleString());       // -> Sat Feb 28 23:45:26 2004
console.log(d.toLocaleDateString());   // -> 02/28/2004
export var showDate = console.log(d.toLocaleTimeString());

