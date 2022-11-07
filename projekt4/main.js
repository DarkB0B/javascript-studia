//import { Note } from "./note";
let notes = [];
document.querySelector("#create").addEventListener("click", () => {
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
})
document.querySelector("#show").addEventListener("click", () => {
    
    
})