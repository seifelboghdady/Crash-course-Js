let xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/seifelboghdady/repos"); //or can get info from file json
// xhr.open("GET", "data.json");
xhr.send();

xhr.onreadystatechange = function(){
    console.log(`Ready state ${this.readyState}, status ${this.status}`)
    if (this.readyState === 4 && this.status === 200){
        let objs = JSON.parse(this.responseText)
        document.body.innerHTML = `<h1>Seif Elboghdady Repositories</h1>`;

        for(let i = 0; i< objs.length; i++){
            let div = document.createElement("div");
            div.style.padding = "3px";
            div.style.margin = "3px";
            div.style.background = "#CCE5FF";

            let repos = 
            `<strong>Name</strong> : ${objs[i].name}
            <strong>Description:</strong> ${objs[i].description || 'No description'}<br>
            <strong>Stars:</strong> ⭐ ${objs[i].stargazers_count}<br>
            <strong>Language:</strong> ${objs[i].language || 'Not specified'}
            `;
            div.innerHTML = repos;
            document.body.appendChild(div);
        }
    }
};