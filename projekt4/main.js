
let notes = [];
let notecounter = 0;
let colors = ["green", "black", "yellow", "red"];

class Note{   
    constructor(color, title, text, date, id)
    {
        this.title = title
        this.text = text
        this.date = date
        this.color = color
        this.pin = false
        //this.tags = x.tags
        this.id = id
    }
}


//---- On Startup
showNotes();

//---- Create
document.querySelector("#create").addEventListener("click", () => {
    createNote();
})

//----ShowNotes

document.querySelector("#show").addEventListener("click", () => {
    
    showNotes();
    
})

function pinClick(){
    const buttons = document.querySelectorAll(".pinBtn");
    buttons.forEach(button => {
        document.getElementById(button.id).addEventListener("click", () => {
            //remove first letter from string to get the id
            let id = button.id.substring(1);
            console.log("pin Click");
            if(notes[id].pin === false) {
                console.log("note has been pinned");
                notes[id].pin = true;
            }
            else if(notes[id].pin === true) {
                console.log("note has been unpinned");
                notes[id].pin = false;
            }
            showNotes();
            
        })
    })
}

function deleteClick(){
   const buttons = document.querySelectorAll(".deleteBtn");
   buttons.forEach(button => {
    
    document.getElementById(button.id).addEventListener("click", () => {
        
        console.log("delete Click");
        notes.splice(button.value, 1)
        showNotes();
        
    })
   })
}

function editClick(){
    //edit click
    const buttons = document.querySelectorAll(".editBtn");      
    buttons.forEach(button => {
        document.getElementById(button.id).addEventListener("click", () => {
            let id = button.id.substring(1);
            console.log("edit click")
            editNote(notes[id])
            
            
        })
    }  )
    
}


function submitClick(){
    //---- SubmitOnClick
    document.querySelector("#submit").addEventListener("click", () => {
        const title = document.querySelector("#newnotetitle").value;
        const interior = document.querySelector("#newnoteinterior").value;
        const colorbuttons = document.getElementsByName("color_selector");
        const date = new Date();
        let thiscolor; 
        colorbuttons.forEach(button => {
            if(button.checked)
            {
                thiscolor = button.value;
            }
        })
       
        const notee = new Note(thiscolor, title, interior, date, notecounter);
        notes.push(notee);
        notecounter++;
        showNotes();
    })
}

function submitClickEdit(id) {
    document.querySelector("#submit").addEventListener("click", () => {
        const title = document.querySelector("#newnotetitle").value;
        const interior = document.querySelector("#newnoteinterior").value;
        const colorbuttons = document.getElementsByName("color_selector");
        const date = new Date();
        let thiscolor; 
        colorbuttons.forEach(button => {
            if(button.checked)
            {
                thiscolor = button.value;
            }
        })
        notes[id] = new Note(thiscolor, title, interior, date, notecounter);
        
        
        showNotes();
        
    })
}
function refreshBtns(){
    deleteClick();
    pinClick();
    editClick();
}

function formatDate(inputDate){
    let date, month, year, hours, minutes;
    date = inputDate.getDate();
    month = inputDate.getMonth() + 1;   
    year = inputDate.getFullYear();
    hours = inputDate.getHours();
    minutes = inputDate.getMinutes();
    if (date < 10) {
        date = '0' + date;
    }
      
    if (month < 10) {
        month = '0' + month;
    }
    if (hours < 10){
        hours = '0' + hours;
    }
    if (minutes < 10){
        minutes = '0' + minutes;
    }
      
    return(date + '.' + month + '.' + year + "  " + hours + ':' + minutes);
}
function showNotes(){
    
    document.getElementById("sauce").innerHTML = " "
    const pinned = document.createElement("div");
    pinned.id = "pinned";
    pinned.classList.add("pinned");
    document.getElementById("sauce").appendChild(pinned);
    
    notes.forEach(note => {
        const notecolor = note.color;
        const noteObj = document.createElement("div");
        noteObj.classList.add("noteObj");
        noteObj.id = note.date;
        noteObj.style.borderColor = notecolor;

        const notetitle = document.createElement("div");
        notetitle.innerHTML = note.title;
        notetitle.classList.add("title");
        notetitle.style.color = notecolor;

        const notetext = document.createElement("div");
        notetext.innerHTML = note.text;
        notetext.classList.add("text");
        
        const notedate = document.createElement("div");
        notedate.innerHTML = formatDate(note.date);
        notedate.classList.add("date");

        const deleteBtn = document.createElement("div");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.id = "d" + note.id;
        deleteBtn.innerHTML = "X";
     
        const pinBtn = document.createElement("div");
        pinBtn.classList.add("pinBtn");
        pinBtn.id = "p" + note.id;
        pinBtn.innerHTML = "P";

        const editBtn = document.createElement("div");
        editBtn.classList.add("editBtn");
        editBtn.id = "e" + note.id;
        editBtn.innerHTML = "E";
        
        const contolbtns = document.createElement("div");
        contolbtns.classList.add("contolbtns");
        contolbtns.appendChild(pinBtn);
        contolbtns.appendChild(editBtn);
        contolbtns.appendChild(deleteBtn);
        
        
        
        noteObj.appendChild(contolbtns);
        noteObj.appendChild(notetitle);
        noteObj.appendChild(notetext);
        noteObj.appendChild(notedate);
        
        if(note.pin === false) {
            document.getElementById("sauce").appendChild(noteObj);
        }
        else{
            document.getElementById("pinned").appendChild(noteObj);
        }

        refreshBtns();
        console.log("refresh")
    });
}

function createNote(){
    document.getElementById("sauce").innerHTML = " "
    const newnote = document.createElement("div");
    newnote.id = "newnote";
    //---- Title
    const newnotetitle = document.createElement("input");
    newnotetitle.setAttribute("type", "text");
    newnotetitle.setAttribute("maxlength", "20")
    newnotetitle.setAttribute("id", "newnotetitle");
    const titlelabel = document.createElement("label");
    titlelabel.setAttribute("for", "newnotetitle");
    titlelabel.innerHTML = "Title: "
    //---- Note
    const newnoteinterior = document.createElement("textarea");
    newnoteinterior.setAttribute("id", "newnoteinterior");
    const interiorlabel = document.createElement("label");
    interiorlabel.setAttribute("for", "newnoteinterior");
    interiorlabel.innerHTML = "Note: "
    //---- ColorButtons
    const newnotecolorbuttons = document.createElement("div");
    newnotecolorbuttons.id = "buttons"
    newnote.appendChild(newnotecolorbuttons);
    //---- Submit
    const submitbutton = document.createElement("input");
    submitbutton.setAttribute("value", "Submit")
    submitbutton.id = "submit";

    //---- Append
    newnote.appendChild(titlelabel);
    newnote.appendChild(newnotetitle);
    newnote.appendChild(interiorlabel);
    newnote.appendChild(newnoteinterior);
    newnote.appendChild(submitbutton);
    document.getElementById("sauce").appendChild(newnote);

    //---- ColorButtons2
    for(var i = 0; i < colors.length; i++){
        var radio = document.createElement("input");
        radio.type = "radio"
        radio.id = "radio" + i
        radio.name = "color_selector"
        radio.value = colors[i]
        const newnotecolorlabel = document.createElement("label")
        newnotecolorlabel.setAttribute("for", "radio" + i)
        newnotecolorlabel.innerHTML = radio.value;
        document.querySelector("#buttons").appendChild(newnotecolorlabel)
        document.querySelector("#buttons").appendChild(radio)
    }
    document.getElementById("radio0").checked = true;

    submitClick();
}
function editNote(note){
        document.getElementById("sauce").innerHTML = " "
        const newnote = document.createElement("div");
        newnote.id = "newnote";
        //---- Title
        const newnotetitle = document.createElement("input");
        newnotetitle.setAttribute("type", "text");
        newnotetitle.setAttribute("maxlength", "20")
        newnotetitle.setAttribute("id", "newnotetitle");
        newnotetitle.value = note.title;
        const titlelabel = document.createElement("label");
        titlelabel.setAttribute("for", "newnotetitle");
        titlelabel.innerHTML = "Title: "
        //---- Note
        const newnoteinterior = document.createElement("textarea");
        newnoteinterior.setAttribute("id", "newnoteinterior");
        newnoteinterior.value = note.text;
        const interiorlabel = document.createElement("label");
        interiorlabel.setAttribute("for", "newnoteinterior");
        interiorlabel.innerHTML = "Note: "
        //---- ColorButtons
        const newnotecolorbuttons = document.createElement("div");
        newnotecolorbuttons.id = "buttons"
        newnote.appendChild(newnotecolorbuttons);
        //---- Submit
        const submitbutton = document.createElement("input");
        submitbutton.setAttribute("value", "Submit")
        submitbutton.id = "submit";

        //---- Append
        newnote.appendChild(titlelabel);
        newnote.appendChild(newnotetitle);
        newnote.appendChild(interiorlabel);
        newnote.appendChild(newnoteinterior);
        newnote.appendChild(submitbutton);
        document.getElementById("sauce").appendChild(newnote);

        //---- ColorButtons2
        for(var i = 0; i < colors.length; i++){
            var radio = document.createElement("input");
            radio.type = "radio"
            radio.id = "radio" + i
            radio.name = "color_selector"
            radio.value = colors[i]
            const newnotecolorlabel = document.createElement("label")
            newnotecolorlabel.setAttribute("for", "radio" + i)
            newnotecolorlabel.innerHTML = radio.value;
            document.querySelector("#buttons").appendChild(newnotecolorlabel)
            document.querySelector("#buttons").appendChild(radio)
        }
        document.getElementById("radio0").checked = true;


        submitClickEdit(note.id);
    
}

