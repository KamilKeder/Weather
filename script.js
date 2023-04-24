var key = "beb77ac7a2804178b04154715231503"
var div_temperatura = document.querySelector("#div_temperatura");
var div_miejsce = document.querySelector("#div_miejsce");
var input_miejscowosc = document.querySelector("#input_miejscowosc");
var button_szukaj = document.querySelector("#button_szukaj");

button_szukaj.addEventListener("click",szukaj);

function szukaj(){
    var miejscowosc = input_miejscowosc.value;
    var link = "https://source.unsplash.com/1920x1080/?"+miejscowosc
    fetch("http://api.weatherapi.com/v1/current.json?key=beb77ac7a2804178b04154715231503&q="+miejscowosc+"&aqi=no")
    .then((response) => response.json())
    .then((data) =>{

        div_temperatura.innerHTML = data.current.temp_c + "℃"
        div_miejsce.innerHTML = data.location.name;
        document.body.style.backgroundImage = "url("+link+")";

    })
    .catch(error => 
        alert("Niestety nie możemy sprawdzić tej miescowości, spróbuj z inną.")
        );
}
window.onload = function(){
    var miejscowosc = "warsaw";
    var link = "https://source.unsplash.com/1920x1080/?"+miejscowosc
    fetch("http://api.weatherapi.com/v1/current.json?key=beb77ac7a2804178b04154715231503&q="+miejscowosc+"&aqi=no")
    .then((response) => response.json())
    .then((data) =>{

        div_temperatura.innerHTML = data.current.temp_c + "℃"
        div_miejsce.innerHTML = data.location.name;
        document.body.style.backgroundImage = "url("+link+")";

    })
    .catch(error => 
        alert("Niestety nie możemy sprawdzić tej miescowości, spróbuj z inną.")
        ); 
};