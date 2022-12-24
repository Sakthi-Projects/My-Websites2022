const titleBox = document.querySelector(".title-box");
const titlebtn = document.querySelector(".btn-title");
const titleClosebtn = document.querySelector(".tool-close");
const countryClose = document.querySelector('#consClose');
const countryDetails = document.querySelector('.country');
const countryHome = document.querySelector('.country-details');
const resetcons = document.querySelector('.resetcons');



countryDetails.addEventListener("click", () => {
    countryHome.classList.add("country-active");
});

countryClose.addEventListener("click", () => {
    countryHome.classList.remove("country-active");
});

titlebtn.addEventListener("click", openTitle)


function openTitle() {
    titleBox.classList.add("title-active");
}

titleClosebtn.addEventListener("click", closeTitle)

function closeTitle() {
    titleBox.classList.remove("title-active");
}

//Country Details

let countryInput = document.querySelector(".country-input");
const countrySearch = document.querySelector(".country-searchbtn");


window.addEventListener("DOMContentLoaded", searchCountry)

function searchCountry() {
    countrySearch.addEventListener("click", (e) => {
        e.preventDefault();
        let countryName = countryInput.value.trim();
        let apiURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                cname.innerText = `${countryName} FLAG`;
                flag.src = data[0].flags.svg;
                capital.innerText = data[0].capital[0];
                continent.innerText = data[0].continents[0];
                language.innerText = Object.values(data[0].languages).toString().split(",").join(", ");
                currencies.innerText = `${Object.keys(data[0].currencies)[0]} - ${data[0].currencies[Object.keys(data[0].currencies)].name}`;
                chins.src = data[0].coatOfArms.svg;
                tname.innerText = `${countryName} Embelam`;
                const popu = document.getElementById("population");
                let population = Number(data[0].population);
                const area = document.getElementById("area");
                let areaUnit = Number(data[0].area);
                popu.innerText = population.toLocaleString('en-US');
                area.innerText = `${areaUnit.toLocaleString('en-US')} Km`;
                timezones.innerText = data[0].timezones[0];
                official.innerText = data[0].name.official;
                cc.innerText = `${data[0].idd.root}${data[0].idd.suffixes[0]}`;
                car.innerText = data[0].car.side;
                const removecons = document.querySelector(".country-contend");
                removecons.classList.remove("removec");
                resetcons.addEventListener("click", () =>{
                    removecons.classList.add("removec");
                })
            }).catch(err => {
                if (countryName == "") {
                    alert("Enter Country Name");
                } else {
                    countryName;
                }
            });


    });

}

searchCountry();    



//Weather App==========================================
const weatherSearchBtn = document.querySelector(".Weather_Searchbtn");
const inputWeather = document.querySelector("#Weather_Input");
const topcity = document.querySelector("#topcity");
const errors = document.getElementById("error");
const weather = document.querySelector(".weather");
const weatherApp = document.querySelector(".weatherApp");
const weather_close = document.querySelector("#weather_close");

weather.addEventListener("click",()=>{
weatherApp.classList.add("weather-active");
})

weather_close.addEventListener("click",()=>{
    weatherApp.classList.remove("weather-active");
    })

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '59981aa058mshf6688c275e3e25ep165f80jsncb592f791bd1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeatherReport = (city) => {
    topcity.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +`${city}`, options)
        .then(response => response.json())
        .then(response => {
            humi.innerHTML = response.humidity
            temp.innerHTML = response.temp
            wind.innerHTML = response.wind_speed
        
        })
        .catch(err => {
            if (city == "") {
                alert("Enter Country Name");
            } else {
                city;
            }
        
        }); 

}


weatherSearchBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    let city = inputWeather.value.trim();
    getWeatherReport(city);
})

getWeatherReport("Chennai")

//************************************************************************ */



//************************************************************************ */

const convertBtn = document.querySelector("#getbtn");
const currencyConverter = document.querySelector(".Currency_Converter");
const convertion = document.querySelector(".convertion");
const closecurrency = document.querySelector("#close_Currency");

convertion.addEventListener("click", () => {
    currencyConverter.classList.add("activeCurrency");
})

closecurrency.addEventListener("click", () => {
    currencyConverter.classList.remove("activeCurrency");
})


const ids = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59981aa058mshf6688c275e3e25ep165f80jsncb592f791bd1',
		'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
	}
};

const getMoney = (enter,enter2,amountValue) => {

fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${enter}&want=${enter2}&amount=${amountValue}`, ids)
	.then(response => response.json())
	.then(response => {
       

       let secondAmount = document.getElementById('SecondInput');
        secondAmount.value = response.new_amount

        if(amountValue==""){
            alert("Enter the Value");
            secondAmount.value = "";
        }else{
            amountValue;
        }
    }).catch(err => {console.error(err)})   

}


convertBtn.addEventListener("click",(e)=>{
    e.preventDefault();
        function money1(){
            let currency1 = document.getElementsByName('Currency')[0];
            let text = currency1.options[currency1.selectedIndex];
            let enter = text.innerText.trim();

            let currency2 = document.getElementsByName('Currency2')[0];
            let text2 = currency2.options[currency2.selectedIndex];
            let enter2 = text2.innerText.trim();

            let amount = document.getElementById('FirstInput');
            let amountValue = amount.value;

            getMoney(enter, enter2, amountValue); 
            
            
        }
        money1();
       
})



//************************************************************************ */

const dicsDocument = document.querySelector(".dicsDocument");
const dictionary = document.querySelector(".Dictionary");
const dicClose = document.querySelector("#dicClose");

dicsDocument.addEventListener('click',()=>{
dictionary.classList.add('activeDics');
})

dicClose.addEventListener('click',()=>{
    dictionary.classList.remove('activeDics');
})


const dics = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59981aa058mshf6688c275e3e25ep165f80jsncb592f791bd1',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};

const dictionaryFun = function (letterInputValue){
fetch(`https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${letterInputValue}`, dics)
	.then(response => response.json())
	.then(response => {
        
        defcode.innerText = response.word
        defAnswer.innerText = response.definition
    
        if(letterInputValue==""){
            alert("Please Enter Word");
            defcode.innerText = " ";
            defAnswer.innerText = " ";
        }else{
            letterInputValue;
        }
    
    })
	.catch(err => console.error(err));

}

const letterBtn = document.getElementById("letterbtn");
letterBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    const letterInput = document.getElementById("letter");
    let letterInputValue = letterInput.value
    dictionaryFun(letterInputValue);
})