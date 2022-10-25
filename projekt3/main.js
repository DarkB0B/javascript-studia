document.addEventListener('keypress', onKeyPress)
let records = [];
recording = {
    isrecording: false,
    channel: 1
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
    playSound(sound)
}
function startRecording(sound){
    if(recording.isrecording){
        var record = {soundName: sound, timestamp: Date.now()}
        records.push(record)
    }
    playSound(sound)
}

function playSound(sound){
    console.log(sound)
    const audioTag = document.querySelector(`#${sound}`)
    audioTag.currentTime = 0
    audioTag.play()
}
document.querySelector("#play").addEventListener("click", () => {
    for(let i = 0; i < records.length; i++){
        setTimeout(() => {
            playSound(records[i].soundName)
        }, records[i].timestamp - records[i].timestamp)
    }
})
document.querySelector("#record").addEventListener("click", () => {
    if(!document.querySelector("#play").checked){
        records = [];
    }
    else{
        recording = {
            isrecording: true,
            channel: 1
        }
    }
})