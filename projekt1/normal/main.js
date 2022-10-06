let all = querySelectorAll('.input')
let przeliczBtn = document.querySelector("#przeliczBtn")
function przelicz()
{
all.array.forEach(element => {
    
});
const suma = liczba1 + liczba2 + liczba3 + liczba4 
const roznica = (liczba1 - liczba2 - liczba3 - liczba4)
const min = Math.min(liczba1, liczba2,  liczba3, liczba4)
const max = Math.max(liczba1, liczba2,  liczba3, liczba4)
document.querySelector("#suma").innerHTML = suma
document.querySelector("#roznica").innerHTML = roznica
document.querySelector("#max").innerHTML = max
document.querySelector("#min").innerHTML = min
}
liczba1.addEventListener('input', przelicz)
liczba2.addEventListener('input', przelicz)
liczba3.addEventListener('input', przelicz)
liczba4.addEventListener('input', przelicz)
przeliczBtn.addEventListener('click', () => 
{
 przelicz()
})
dodajBtn.addEventListener('click', () => 
{
    document.createElement("input", )
})