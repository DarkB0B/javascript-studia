
const form = document.querySelector(".top form");
const input = document.querySelector(".top input");
const list = document.querySelector(".sauce .cities");
const local = document.querySelector(".top .local");
let cities = [];
const apiKey = "73d24db276f70efa5c7c1f7ac8044f87";



function getFromStorage(){
    cities = JSON.parse(localStorage.getItem("cities"));
    if (cities === null){
        cities = [];
    }
}
function saveToStorage(){
    localStorage.setItem("cities", JSON.stringify(cities));
}
function render(){
    list.innerHTML = "";
    cities.forEach(city => {
        getWeather(city, cities.indexOf(city));
        
    })
    
}
function addListenerToButton(index){
    
        document.getElementById("d" + index).addEventListener("click", () => {
            console.log("delete Click");
            const thisCity = cities.find(city => city.id == index);
            const cityindex = cities.indexOf(thisCity);
            cities.splice(cityindex, 1);

            saveToStorage();
            render();
        })
    
}
function getWeather(inputVal, index) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const {main, name, sys, weather} = data;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
                weather[0]["icon"]
            }.svg`;


            const markup = `
        <div id="d${index}" class="deleteBtn">X</div>
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${
                weather[0]["description"]
            }">
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
            
            
            const li = document.createElement("li");
            li.classList.add("city");
            li.innerHTML = markup;
            
            list.appendChild(li);
            addListenerToButton(index);
        })
        .catch(() => {
            alert("Please search for a valid city");
        });
}

function getWeatherForCurrLocation(){
        local.innerHTML = "";
        const heading = document.createElement("h1");
        heading.classList.add("heading");
        heading.textContent = "Current Location";
        local.appendChild(heading);
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const { main, name, sys, weather } = data;
                    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
                        weather[0]["icon"]
                    }.svg`;
                    const li = document.createElement("li");
                    li.classList.add("city");
                    const markup = `
            <h2 class="city-name" data-name="${name},${sys.country}">
                <span>${name}</span>
                <sup>${sys.country}</sup>
            </h2>
             
            <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
            <figure>
                <img class="city-icon" src="${icon}" alt="${
                        weather[0]["description"]
                    }">
                <figcaption>${weather[0]["description"]}</figcaption>
            </figure>
            `;

                    li.innerHTML = markup;
                    local.appendChild(li);
                })
                .catch(() => {
                    const err = document.createElement("h2");
                    err.id="errorMsg";
                    err.textContent = "Cannot Find Your Location";
                    local.appendChild(err);
                });
        }, error => {
            const err = document.createElement("h2");
            err.id="errorMsg";
            err.textContent = "Cannot Find Your Location";
            local.appendChild(err);
        });

    
}

getFromStorage();
render();
getWeatherForCurrLocation();
setInterval(render, 300000);
setInterval(getWeatherForCurrLocation, 300000);



            



//search
form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;
    
    const listItems = list.querySelectorAll(".places .city");
    const listItemsArray = Array.from(listItems);

    if (listItemsArray.length > 0) {
        const filteredArray = listItemsArray.filter(el => {
            let content = "";
            if (inputVal.includes(",")) {
                if (inputVal.split(",")[1].length > 2) {
                    inputVal = inputVal.split(",")[0];
                    content = el
                        .querySelector(".city-name span")
                        .textContent.toLowerCase();
                } else {
                    content = el.querySelector(".city-name").dataset.name.toLowerCase();
                }
            } else {
                //athens
                content = el.querySelector(".city-name span").textContent.toLowerCase();
            }
            return content == inputVal.toLowerCase();
        });

        if (filteredArray.length > 0) {
            alert( `You already know the weather for ${
                filteredArray[0].querySelector(".city-name span").textContent
            }`);
            form.reset();
            input.focus();
            return;
        }
    }
    
            if(cities.length > 6){
                cities.splice(0,1);
            }
            cities.push(inputVal);
            saveToStorage();       
            render();
            
    form.reset();
    input.focus();
});