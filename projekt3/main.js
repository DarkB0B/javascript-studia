document.addEventListener('keypress', onKeyPress)
let track1 = []

function startRecording(track)
{
    const start = Date.now
    document.addEventListener('keypress', record)
    
}
function record(event)
{
    const yes{
        key: key, 
        timestamp = Date.now
    }
    track.push
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


function playSound(sound){
    console.log(sound)
    const audioTag = document.querySelector('#' + sound)
    audioTag.currentTime = 0
    audioTag.play()
}