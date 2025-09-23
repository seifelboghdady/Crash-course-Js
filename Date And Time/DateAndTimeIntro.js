// Date Constructor - creates date object for current moment
let dateNow = new Date();
console.log(dateNow); // Current date and time (e.g., "2023-10-15T14:30:00.000Z")

// Static Method - returns milliseconds since Jan 1, 1970
let milliseconds = Date.now();
console.log(milliseconds); // 1697387400000 (number of milliseconds since epoch)

// Epoch Time/Unix Time: Seconds since January 1, 1970
let seconds = Math.floor(Date.now() / 1000);
console.log(seconds); // 1697387400 (number of seconds since epoch)

// Create date from specific timestamp (milliseconds)
let dateFromTimestamp = new Date(1697387400000);
console.log(dateFromTimestamp); // Converts back to readable date

// Create date from specific date string
let specificDate = new Date("2023-10-15");
console.log(specificDate); // October 15, 2023

// Why January 1, 1970?
// - This is called the "Unix Epoch" - the starting point for computer time tracking
// - It was chosen as a standard reference point in early Unix systems

// Year 2038 Problem:
// - 32-bit systems store time as signed 32-bit integers (max value: 2,147,483,647)
// - This maximum will be reached on January 19, 2038 at 03:14:07 UTC
// - After this, time will wrap around to December 13, 1901
// - Solution: Use 64-bit systems which can handle much larger numbers
