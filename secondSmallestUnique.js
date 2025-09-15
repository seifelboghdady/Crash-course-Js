function secondSmallestUnique(arr){
    function sorting(arr){
        let n = arr.length;
        for(let i = 0; i<n-1; i++){
            for (let j =0 ; j< n-i-1; j++){
                if (arr[j]>arr[j+1]){
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    return arr;  
    }
let sorted_arr = sorting(arr)
//remove duplicate by using sets
const unique_sorted_set = new Set(sorted_arr) ;
// convert set to arr to handel edges
const myarr = [...unique_sorted_set]
if (myarr.length <2){
    return null;
}else{
    return myarr[1]
}
}



console.log(secondSmallestUnique([2, 3, 1, 5, 0]))