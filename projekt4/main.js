
let notes = [];
let colors = ["green", "black", "yellow", "red"];

class Note{   
    constructor(color, title, text, date)
    {
        this.title = title
        this.text = text
        this.date = date
        this.color = color
        //this.tags = x.tags
        //this.id = x.id
    }
}

//---- Create
document.querySelector("#create").addEventListener("click", () => {
    createNote();
})


//----ShowNotes

document.querySelector("#show").addEventListener("click", () => {
    
    notes.forEach(note => {
        
    });
})


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
       
        const notee = new Note(thiscolor, title, interior, date,);
        notes.push(notee);
        console.log(notes);
        createNote();
    })
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
