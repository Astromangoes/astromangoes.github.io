function newButton(name, url) {
    let output = "<a href='" + url + "'>" + name + "</a>"
    return output;
}

const navButtons = [newButton("Home", "/index.html"),
                    newButton("Project List", "/projList.html"),
                    newButton("About", "/about.html")];

let navItems = "";
console.log(navButtons.length);
for(let i = 0; i <= (navButtons.length-1); i++) {
    navItems += navButtons[i];
    console.log(navItems);
}
document.getElementById("navbar").innerHTML = navItems;