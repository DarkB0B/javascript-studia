const images = ['img1.jpg', 'img2.jpg','img3.jpg', 'img4.jpg']
let counter = 0;

for(var i = 0; i < images.length; i++){
    var radio = document.createElement("input");
    radio.type = "radio"
    radio.id = "radio"
    radio.name = "img_selector"
    value = i
    document.getElementById('buttons').appendChild(radio)
}

nextBtn.addEventListener('click', () => 
{
    counter ++
    if(counter >= images.length)
    {counter = 0}
    document.getElementById('photos').innerHTML = " "
    var imag = document.createElement("img")
    imag.id = "photo"
    imag.src = images[counter]
    document.getElementById('photos').appendChild(imag)
    
})
prevBtn.addEventListener('click', () => 
{
    counter --
    if(counter < 0)
    {counter = images.length-1}
    document.getElementById('photos').innerHTML = " "
    var imag = document.createElement("img")
    imag.id = "photo"
    imag.src = images[counter]
    document.getElementById('photos').appendChild(imag)
    
})