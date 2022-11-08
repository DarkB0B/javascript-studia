
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
    deleteClick();
})

function deleteClick(){
   const buttons = document.querySelectorAll(".deleteBtn");
   buttons.forEach(button => {
    console.log(buttons);
    document.getElementById(button.id).addEventListener("click", () => {
        notes.splice(button.value, 1)
        showNotes();
        deleteClick();
    })
   })

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
        createNote();
    })
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
        deleteBtn.id = note.id;
        deleteBtn.innerHTML = "X";

        noteObj.appendChild(deleteBtn);
        noteObj.appendChild(notetitle);
        noteObj.appendChild(notetext);
        noteObj.appendChild(notedate);
        
        
        document.getElementById("sauce").appendChild(noteObj);
        

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

