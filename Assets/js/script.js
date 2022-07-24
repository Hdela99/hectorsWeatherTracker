var APIkey = "378fa8d83af7f942337bb3fccfd8f5bc";
//creation of btn jquery variables. 
var btnAustinEl = $(`#Austin`);
var btnChicagoEl = $(`#Chicago`);
var btnNewYorkEl = $(`#NY`);
var btnOrlandoEl = $(`#Orlando`);
var btnSanFranciscoEl = $(`#SF`);
var btnSeattleEl = $(`#Seattle`);
var btnDenverEl = $(`#Denver`);
var btnAtlantaEl = $(`#Atlanta`);

//creation of the search button and text area input. 
var btnSearch = $(`#search`);
var textAreaEl = $(`#userInput`);

//city information display jquery variables. 
var cityInformation = $(`#city-info-title`);
var cityTempEl = $(`#city-temp`);
var cityWindEl = $(`#city-wind`);
var cityHumidityEl = $(`#city-humidity`);
var cityUvEl = $(`#city-uv`);
var cityContainerEl = $(`#city-container`);
//5 day stuffs. 

//day1
var day1El = $(`#day-1`);
var temp1El = $(`#Temp-1`);
var wind1El = $(`#Wind-1`);
var humidity1El = $(`#Humidity-1`);
//day2
var day2El = $(`#day-2`);
var temp2El = $(`#Temp-2`);
var wind2El = $(`#Wind-2`);
var humidity2El = $(`#Humidity-2`);
//day3
var day3El = $(`#day-3`);
var temp3El = $(`#Temp-3`);
var wind3El = $(`#Wind-3`);
var humidity3El = $(`#Humidity-3`);
//day4
var day4El = $(`#day-4`);
var temp4El = $(`#Temp-4`);
var wind4El = $(`#Wind-4`);
var humidity4El = $(`#Humidity-4`);
//day5
var day5El = $(`#day-5`);
var temp5El = $(`#Temp-5`);
var wind5El = $(`#Wind-5`);
var humidity5El = $(`#Humidity-5`);

 function tester(){
    var daysEl = $(`#cards`);
     //creation of card elements. 
    for( var i=0; i<6; i++){
        var divCreateEl = $(`<div>`);
        divCreateEl.attr("id", "day-" + i);
        divCreateEl.addClass("col-sm-2");

        var cardCreateEl = $(`<div>`);
        cardCreateEl.addClass("card");

        var cardBodyEl = $(`<div>`);
        cardBodyEl.addClass("card-body");

         cardCreateEl.append(cardBodyEl);

        divCreateEl.append(cardCreateEl);

        daysEl.append(divCreateEl);
    }
}

$(`button`).click(function(event){
    let txt = event.target.innerText;
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${txt}&units=imperial&appid=${APIkey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            cityUvEl.replaceWith(`<p>${data.city.}`);
            cityHumidityEl.val("CLICKED?");
            cityTempEl.textContent = "Clicked";
            cityInformation.textContent = "Clicked";

            console.log(data);
            console.log(data.city.name);
            cityUvEl.textContent =+ data.city.name;
        })

        // var cityInformation = $(`#city-info-title`);
        // var cityTempEl = $(`#city-temp`);
        // var cityWindEl = $(`#city-wind`);
        // var cityHumidityEl = $(`#city-humidity`);
        // var cityUvEl = $(`#city-uv`);
        // var cityContainerEl = $(`#city-container`);
                
    })

function recordWeather(d){
    var obj = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400){
        var temp =obj.main.temp;
    }else {
        console.log("the city doesn't exist! kindly check");
    }
}