let name = 'SeIF AShraF';

let arrname = name.split('').map((element)=>{
    return element === element.toUpperCase() ? element.toLowerCase() : element.toUpperCase()
}).join("")

console.log(arrname);

//inverted numbers
nums = [1, -1, 3, -2, 4, 13, -12];

let inverted_Number = nums.map((num)=>{
    return -num
})
 console.log(inverted_Number)


//ignore numbers

ignoreNumber = "Seif23Ash12345f"

ignoreNumberArr = ignoreNumber.split("").map((element)=>{
    return isNaN(element) ? element: ""
}).join("")

console.log(ignoreNumberArr)