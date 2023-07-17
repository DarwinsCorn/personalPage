const nameBanner = document.querySelector("#name");
const aboutLink = document.querySelector("#aboutLink");
const about = document.querySelector("#about");
const projectsLink = document.querySelector("#projectsLink");
const projects = document.querySelector("#projects");
const resumeLink = document.querySelector("#resumeLink");
const resume = document.querySelector("#resume");
const clickMe = document.querySelector(".click-me");
const left = document.querySelector("#left_panel");
const body = document.querySelector("body");
const fontFormat = document.querySelector(".font-formatting");
const a = document.querySelectorAll("a");
const sections = document.querySelectorAll("section");
const banner = document.querySelector(".banner");

let toggler = true;
let activeSection = resume;
let activeLink = resumeLink;

function selectedLinkColor(ele) {
    a.forEach(link => link.style.color = link.id === ele.id ? "black" : "white");
    activeLink = ele;
}

function selectedOpacity(ele) {
    sections.forEach(sect => sect.style.opacity = sect.id === ele.id ? 1 : 0);
    activeSection = ele;
}

nameBanner.addEventListener('click', (evt) => { 
    evt.preventDefault();
    left.style.transform = toggler ? "rotate(0)" : "rotate(45deg)";
    body.style.backgroundColor = toggler ? "#d7cdc1": "white";
    fontFormat.style.color = toggler ? "white" : "black";
    nameBanner.style.left = toggler ? "0%" : "70%";
    clickMe.style.opacity = toggler ? 1 : 0;
    a.forEach(ele => {
        ele.style.color = toggler ? "white" : "black";
        ele.style.opacity = 1
    });
    activeSection.style.opacity = toggler ? 1 : 0; 
    activeLink.style.color =  "black" ;

    toggler = !toggler;
});

aboutLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    if(toggler) nameBanner.click();
    selectedOpacity(about);
    selectedLinkColor(aboutLink);
});

projectsLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    if(toggler) nameBanner.click();
    selectedOpacity(projects);
    selectedLinkColor(projectsLink)
});

resumeLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    if(toggler) nameBanner.click();
    selectedOpacity(resume);
    selectedLinkColor(resumeLink);
});
