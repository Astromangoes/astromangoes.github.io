function formatProjectName(project) {
    let output = "<h1>"+project.name+"</h1>";
    return output;
}
function formatProjectDate(project) {
    let output = "<span>"+project.day+"/"+project.month+"/"+project.year+"</span>";
    return output;
}
function formatProjectSummary(project) {
    let output = "<p>"+project.summary+"</p>";
    return output;
}function formatProjectImg(project) {
    let output = "<img src='/projects/"+project.folder+"/"+project.folder+".jpg'>";
    return output;
}
function formatProject(project) {
    let output = "<div class='project-list'>" + 
                "<div class='project-list-left'>" +
                "<div class='project-list-left-top'>" +
                "<div class='project-list-name'>" +
                formatProjectName(project) +
                "</div>" +
                "<div class='project-list-date'>" +
                formatProjectDate(project) +
                "</div>" +
                "</div>" +
                "<div class='project-list-left-bottom'>" +
                "<div class='project-list-summary'>" +
                formatProjectSummary(project) +
                "</div>" +
                "</div>" +
                "</div>" +
                "<div class='project-list-right'>" +
                "<div class='project-list-img'>" +
                formatProjectImg(project) +
                "</div>" +
                "</div>" +
                "</div>";
    return output;
}
function drawProjects(projArray) {
    let output = "";
    for(let i = (projArray.length-1); i > -1; i--) {
        let currProj = projArray[i];
        output += formatProject(currProj);
    }
    document.getElementById("proj").innerHTML = output;
}
function loadJSONDoc(filename) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            let projects = JSON.parse(this.responseText);
            drawProjects(projects);
        }
      };
          xhttp.open("GET", filename, true);
          xhttp.send();
}
loadJSONDoc("/projects/projects.json");
