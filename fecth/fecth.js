fetch("https://api.github.com/users/seifelboghdady/repos")
.then((result)=>{
    result.length = 4;
    return result
})
.then((full)=>{
    console.log(`The result in first ${full}`)
    full.length = 1;
    console.log(`The result in first ${full}`)
    return full;
})
.then((result)=>{
    console.log(result);
})