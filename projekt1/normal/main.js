let all = document.querySelectorAll('.input')
let przeliczBtn = document.querySelector("#przeliczBtn")
let index = 2

function przelicz()
{
let suma = 0 
let roznica = 0
let values = []
all.forEach(element => {
    values.push(Number(element.value))
    suma += Number(element.value)
    roznica -= Number(element.value)
});

const min = Math.min.apply(Math, values)
const max = Math.max.apply(Math, values)
document.querySelector("#suma").innerHTML = suma
document.querySelector("#roznica").innerHTML = roznica
document.querySelector("#max").innerHTML = max
document.querySelector("#min").innerHTML = min
}

przeliczBtn.addEventListener('click', () => 
{
 przelicz()
})
dodajBtn.addEventListener('click', () => 
{
   index += 1
   console.log(index)
   var newinput = document.createElement("input");
   newinput.class = "input"
   newinput.id = "liczba" + index
   newinput.type = "number";        
   console.log(newinput)
   document.getElementById("inputs").appendChild(newinput)
   
})
all.forEach(element => {
    element.addEventListener('input', przelicz)
});