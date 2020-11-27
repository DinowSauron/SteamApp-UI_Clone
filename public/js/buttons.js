

function toogleActive(elemClass, event){
    console.log(elemClass, event);
    
}

function toogleOptions(selection){
    const option = selection.querySelector(".options");
    option.className = option.className == "options active" ? "options" : "options active";
}