let liczba1 = document.querySelector("#liczba1")
let liczba2 = document.querySelector("#liczba2")
let liczba3 = document.querySelector("#liczba3")
let liczba4 = document.querySelector("#liczba4")
let przeliczBtn = document.querySelector("#przeliczBtn")

function przelicz()
{
liczba1 = Number(document.querySelector("#liczba1").value)
liczba2 = Number(document.querySelector("#liczba2").value)
liczba3 = Number(document.querySelector("#liczba3").value)
liczba4 = Number(document.querySelector("#liczba4").value)
const suma = liczba1 + liczba2 + liczba3 + liczba4 
const roznica = (liczba1 - liczba2 - liczba3 - liczba4)
const min = Math.min(liczba1, liczba2,  liczba3, liczba4)
const max = Math.max(liczba1, liczba2,  liczba3, liczba4)
document.querySelector("#suma").innerHTML = suma
document.querySelector("#roznica").innerHTML = roznica
document.querySelector("#max").innerHTML = max
document.querySelector("#min").innerHTML = min
}

przeliczBtn.addEventListener('click', () => 
{
 przelicz()
})