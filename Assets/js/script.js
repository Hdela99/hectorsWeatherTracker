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
    console.log($(this).css('background-color'));
    console.log(this.id);
    console.log(this.id);
    if(this.id == 'search'){
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${textAreaEl.val()}&units=imperial&appid=${APIkey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            cityUvEl.text();
            cityHumidityEl.text(`Humidity: ${data.list[3].main.humidity} `)
            cityTempEl.text(`Temp: ${data.list[0].main.temp}`);
            cityInformation.text(`${data.city.name} ` + moment().format('dddd, MMMM Do YYYY'))
            cityWindEl.text(`Wind: ${data.list[0].wind.speed}`)
            $(".card-body").each(function(){ 
                //  this.html("");
                $(this).empty();
                   var i = 1; 
                   var createDateEl = $(`<h5>`);
                   createDateEl.addClass("card-title text-left");
                   createDateEl.attr("id", "day-" + i );
                   createDateEl.text(`${data.list[i*4].dt_txt}`);
                   console.log(createDateEl);
                   $(this).append(createDateEl);
  
                   var createTempEl = $(`<p>`);
                   createTempEl.addClass("card-text").attr("id", "Temp-" + i).text(`Temp: ${data.list[i*4].main.temp}`);
                   $(this).append(createTempEl);
  
                   var createWindEl = $(`<p>`);
                   createWindEl.addClass("card-text").attr("id", "Wind-" + i).text(`Wind: ${data.list[i*4].wind.speed}`);
                   $(this).append(createWindEl);
  
                   var createHumidityEl = $(`<p>`);
                   createHumidityEl.addClass("card-text").attr("id", "Humidity-" + i).text(`Humidity: ${data.list[i*4].main.humidity}%`);
                   $(this).append(createHumidityEl);
                   i++
                   console.log(i);
               })
    })
}else{
    let txt = event.target.innerText;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${txt}&units=imperial&appid=${APIkey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            cityHumidityEl.text(`Humidity: ${data.list[3].main.humidity} `)
            cityTempEl.text(`Temp: ${data.list[0].main.temp}`);
            cityInformation.text(`${data.city.name} ` + moment().format('dddd, MMMM Do YYYY'))
            cityWindEl.text(`Wind: ${data.list[0].wind.speed}`)
             $(".card-body").each(function(){ 
              //  this.html("");
              $(this).empty();
                 var i = 1; 
                 var createDateEl = $(`<h5>`);
                 createDateEl.addClass("card-title text-left");
                 createDateEl.attr("id", "day-" + i );
                 createDateEl.text(`${data.list[i*4].dt_txt}`);
                 console.log(createDateEl);
                 $(this).append(createDateEl);

                 var createTempEl = $(`<p>`);
                 createTempEl.addClass("card-text").attr("id", "Temp-" + i).text(`Temp: ${data.list[i*4].main.temp}`);
                 $(this).append(createTempEl);

                 var createWindEl = $(`<p>`);
                 createWindEl.addClass("card-text").attr("id", "Wind-" + i).text(`Wind: ${data.list[i*4].wind.speed}`);
                 $(this).append(createWindEl);

                 var createHumidityEl = $(`<p>`);
                 createHumidityEl.addClass("card-text").attr("id", "Humidity-" + i).text(`Humidity: ${data.list[i*4].main.humidity}%`);
                 $(this).append(createHumidityEl);
                 i++
                 console.log(i);
             })
            
        })
}
                
    })

function recordWeather(d){
    var obj = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400){
        var temp =obj.main.temp;
    }else {
        console.log("the city doesn't exist! kindly check");
    }
}