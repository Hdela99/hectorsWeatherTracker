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

$(`button`).click(function(event){
    if(this.id == 'search'){
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${textAreaEl.val()}&units=imperial&appid=${APIkey}`)
        .then(function (response) {
            console.log(response.status);
            if(!response.ok){
                alert("Please input a valid city");
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var lat = `${data.city.coord.lat}`;
            console.log(lat);
            var lon = `${data.city.coord.lon}`;
            console.log(lon);
            uviCatcher(lat, lon);
            var backIcon = `${data.list[0].weather[0].icon}`
            cityContainerEl.css({'background-image': 'url(http://openweathermap.org/img/wn/' + backIcon + '.png)', 
            'background-repeat': 'no-repeat',
            'background-position' : 'center top'});
            cityUvEl.text();
            cityHumidityEl.text(`Humidity: ${data.list[0].main.humidity}% `)
            cityTempEl.text(`Temp: ${data.list[0].main.temp}`);
            cityInformation.text(`${data.city.name} ` + moment().format('dddd, MMMM Do YYYY'))
            cityWindEl.text(`Wind: ${data.list[0].wind.speed}`)
            cityUvEl.text(`UV: ` );
            $(".card-body").each(function(index){ 
                $(this).empty();
                   var createDateEl = $(`<h5>`);
                   createDateEl.addClass("card-title text-left");
                   createDateEl.attr("id", "day-" + (index +1) );
                   createDateEl.text(`${data.list[(index +1)*7].dt_txt}`);
                   console.log(createDateEl);
                   $(this).append(createDateEl);

                   var createIconEl = $(`<img>`);
                   var iconcode = `${data.list[(index+1)*7].weather[0].icon}`;
                   console.log(iconcode);
                   var iconurl = 'http://openweathermap.org/img/wn/' +iconcode+'.png';
                   console.log(iconurl);
                   createIconEl.addClass("img-fluid").attr('src', iconurl).attr('alt', 'weather-icon').attr("id", "Icon-"+(index+1));
                   $(this).append(createIconEl);
  
                   var createTempEl = $(`<p>`);
                   createTempEl.addClass("card-text").attr("id", "Temp-" + (index +1)).text(`Temp: ${data.list[(index +1)*7].main.temp}`);
                   $(this).append(createTempEl);
  
                   var createWindEl = $(`<p>`);
                   createWindEl.addClass("card-text").attr("id", "Wind-" + (index +1)).text(`Wind: ${data.list[(index +1)*7].wind.speed}`);
                   $(this).append(createWindEl);
  
                   var createHumidityEl = $(`<p>`);
                   createHumidityEl.addClass("card-text").attr("id", "Humidity-" + (index +1)).text(`Humidity: ${data.list[(index +1)*7].main.humidity}%`);
                   $(this).append(createHumidityEl);

               })
    })
}else{
    let txt = event.target.innerText;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${txt}&units=imperial&appid=${APIkey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var backIcon = `${data.list[0].weather[0].icon}`
            console.log(data);
            cityHumidityEl.text(`Humidity: ${data.list[0].main.humidity}% `)
            cityTempEl.text(`Temp: ${data.list[0].main.temp}`);
            cityInformation.text(`${data.city.name} ` + moment().format('dddd, MMMM Do YYYY'))
            cityWindEl.text(`Wind: ${data.list[0].wind.speed}`)
            cityContainerEl.css({'background-image': 'url(http://openweathermap.org/img/wn/' + backIcon + '.png)', 
            'background-repeat': 'no-repeat',
            'background-position' : 'center top'});
             $(".card-body").each(function(index){ 
              //  this.html("");
              $(this).empty();
                 var createDateEl = $(`<h5>`);
                 createDateEl.addClass("card-title text-left");
                 createDateEl.attr("id", "day-" + (index +1) );
                 createDateEl.text(`${data.list[(index +1)*7].dt_txt}`);
                 console.log(createDateEl);
                 $(this).append(createDateEl);

                 var createIconEl = $(`<img>`);
                 var iconcode = `${data.list[(index+1)*7].weather[0].icon}`;
                 console.log(iconcode);
                 var iconurl = 'http://openweathermap.org/img/wn/' +iconcode+'.png';
                 console.log(iconurl);
                 createIconEl.addClass("img-fluid").attr('src', iconurl).attr('alt', 'weather-icon').attr("id", "Icon-"+(index+1));
                 $(this).append(createIconEl);

                 var createTempEl = $(`<p>`);
                 createTempEl.addClass("card-text").attr("id", "Temp-" + (index +1)).text(`Temp: ${data.list[(index+1)*7].main.temp}`);
                 $(this).append(createTempEl);

                 var createWindEl = $(`<p>`);
                 createWindEl.addClass("card-text").attr("id", "Wind-" + (index +1)).text(`Wind: ${data.list[(index+1)*7].wind.speed}`);
                 $(this).append(createWindEl);

                 var createHumidityEl = $(`<p>`);
                 createHumidityEl.addClass("card-text").attr("id", "Humidity-" + (index +1)).text(`Humidity: ${data.list[(index+1)*7].main.humidity}%`);
                 $(this).append(createHumidityEl);
             })
            
        })
}
                
    })

function uviCatcher(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={}&appid=${APIkey}`)
    .then(function (response2) {
        console.log(response2.status);
        if(!response2.ok){
            alert("Please input a valid city");
        }
        return response2.json();
    })
    .then(function (data2) {
        console.log(data2);
    })
}