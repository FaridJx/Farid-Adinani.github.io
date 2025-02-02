let darkMode = false;

function changeDarkMode() {
    if (darkMode) {

        // light Mode
        darkMode = false;

        // Permet d'accéder aux variables (ex: HTML) et d'en modifier les valeurs avec 2 paramétres (1er: Nom de la var, 2ème: valeur)
        document.documentElement.style.setProperty("--text-color","black");
        document.documentElement.style.setProperty("--background-color","#efe7e5");
        let colorCard = document.querySelectorAll('.projet-card')
        for(let i = 0; i < colorCard.length; i++){
            colorCard[i].style.backgroundColor = "#d4a4a4ef"
        }
        document.getElementById("dark-light-mode").innerHTML = "🌑";
    } else {
        //dark Mode  
        darkMode = true;

        // Permet d'accéder aux variables (ex: HTML) et d'en modifier les valeurs avec 2 paramétres (1er: Nom de la var, 2ème: valeur)
        document.documentElement.style.setProperty("--text-color","white");
        document.documentElement.style.setProperty("--background-color","black");
        let colorCard = document.querySelectorAll('.projet-card')
        for(let i = 0; i < colorCard.length; i++){
            colorCard[i].style.backgroundColor = "#323232ef"
        }
        document.getElementById("dark-light-mode").innerHTML = "🔆";
    }
}