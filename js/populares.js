window.onload = function() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(informacion){
            console.log(informacion);

        })
}