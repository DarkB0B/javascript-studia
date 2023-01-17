document.addEventListener('keypress', onKeyPress)
const playBtn = document.querySelector("#play")
const recordBtn = document.querySelector("#record")
let records = [];
let isRecording = false;
let record = [];
class Sound {
    constructor(key){
        this.key = key;
        this.timestamp = Date.now();
    }
}

function onKeyPress(event)
{
    const key = event.key
    let sound = ''
    switch(key){
        case 'q':
        sound = 'boom'
        break;
        case 'w':
        sound = 'clap'
        break;
        case'e':
        sound = 'hihat'
        break;
        case'r':
        sound = 'kick'
        break;
        case't':
        sound = 'openhat'
        break;
        case'y':
        sound = 'ride'
        break;
        case'u':
        sound = 'snare'
        break;
        case'i':
        sound = 'tink'
        break;
        case'o':
        sound = 'tom'
        break;
    }
    if(isRecording) {
        record.push(new Sound(sound));
    }
    playSound(sound)
}
function playRecord(record) {
    record.forEach(sound => {
        setTimeout(() => {
            playSound(sound.key)
        }, sound.timestamp - record[0].timestamp)
    })
}

function showRecords() {
    const recordsList = document.querySelector(".records")
    recordsList.innerHTML = ''
    records.forEach((record, index) => {
        const li = document.createElement('li')
        li.classList.add("records");
        li.textContent = `Play Record ${index + 1}`
        li.addEventListener('click', () => {
            if(isRecording){
                alert("You can't play while recording")
            } else {
                playRecord(record)
            }
        })
        recordsList.appendChild(li)
    })
}

function playSound(sound){
    console.log(sound)
    const audioTag = document.querySelector(`#${sound}`)
    audioTag.currentTime = 0
    audioTag.play()
}


recordBtn.addEventListener("click", () => {
    
    if(isRecording){
        isRecording = false;
        records.push(record);
        record = [];
        showRecords();
        recordBtn.innerHTML = "Record"
    }else{
        isRecording = true;
        recordBtn.innerHTML= "Stop"
    }
})

