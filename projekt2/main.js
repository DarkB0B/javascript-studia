const images = ['img1.jpg', 'img2.jpg','img3.jpg', 'img4.jpg']
let counter = 0;

for(var i = 0; i < images.length; i++){
    var radio = document.createElement("input");
    radio.type = "radio"
    radio.id = "radios"
    radio.name = "img_selector"
    radio.value = i
    document.getElementById('buttons').appendChild(radio)
}

function addPhoto(id){
    document.getElementById('photos').innerHTML = " "
    var imag = document.createElement("img")
    imag.id = "photo"
    imag.src = images[id]
    document.getElementById('photos').appendChild(imag)
}

nextBtn.addEventListener('click', () => 
{
    counter ++
    if(counter >= images.length)
    {counter = 0}
    addPhoto(counter)
    
})
prevBtn.addEventListener('click', () => 
{
    counter --
    if(counter < 0)
    {counter = images.length-1}
    addPhoto(counter)
})
// radio.addEventListener('change', () => {
//     console.log("here")
//     // for(var i = 0; i < buttons.length; i++){
//     //     if(buttons[i].checked){
//     //         counter = i + 1;
//     //         console.log(counter);
//     //     }
//     // }
//     console.log("here")
//    // addPhoto(counter)

// })
const buttons = document.querySelectorAll('#radios')
for(const button of buttons){   
    button.addEventListener('change', onChange)
}

function onChange(e) {
    if(this.checked){
        addPhoto(this.value)
    }
}