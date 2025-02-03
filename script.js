let body = document.querySelector('body')
let color1 = document.querySelector('#color1')

color1.addEventListener("click", function() {
    console.log(body.classList.toggle('color1'));;
})
 
let color2 = document.querySelector('#color2')

color2.addEventListener("click", function() {
    console.log(body.classList.toggle('color2'));;
})


function filterGames() {
    
    const searchValue = document.getElementById("searchBar").value.toLowerCase();
    console.log("SEARCH-LOGS==> ",searchValue)
   
    const games = document.querySelectorAll("#sec1 .game-title");
    console.log("GAMES==> ",games)
    games.forEach(game => {
        const gameTitle = game.textContent.toLowerCase();
        const gameItem = game.closest("#game-item1");
      
        if (gameTitle.includes(searchValue)) {
            gameItem.style.display = "";
        } else {
            gameItem.style.display = "none";
        }
    });
}
