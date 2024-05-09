function newButton(name, url) {
    let output = "<a href='" + url + "'>" + name + "</a>"
    return output;
}

const buttons = [newButton("Home", "index.html"),
                 newButton("Project List", ""),
                 newButton("About", "")];

function addNav(buttonArray) {
    let output = "";
    for(let i = 0; i > (buttonArray.length-1); i++) {
        output += buttonArray[i];
    }
    document.getElementsByClassName("navbar").innerHTML = output;
}

addNav(buttons);