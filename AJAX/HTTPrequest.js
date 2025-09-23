// Create XMLHttpRequest object
let xhr = new XMLHttpRequest();

// xhr.open("GET", "https://api.github.com/users/seifelboghdady/repos"); //or can get info from file json
xhr.open("GET", "data.json");
xhr.send();

xhr.onreadystatechange = function(){
    console.log(`Ready state ${this.readyState}, status ${this.status}`)
    if (this.readyState === 4 && this.status === 200){
        let repo = JSON.parse(this.responseText)// convert join to object js
        console.log(repo);
        console.log(`Number of repo ${repo.length}`)
    }
}