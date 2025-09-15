
const button = document.getElementById("dark-mode-toggle");

    
    button.onclick = function () 
    {
      
        document.body.classList.toggle("dark-mode");

        
        if (document.body.classList.contains("dark-mode")) 
            {
                button.textContent = "Disable Dark Mode";
            } 
        else 
            {
            
                button.textContent = "Enable Dark Mode";
            }
    };