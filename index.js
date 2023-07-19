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
const text = document.querySelector(".text");
const fontFormatting = document.querySelector(".font-formatting");
const bckgrd = document.querySelector(".backgrd-container");
const media = window.matchMedia("screen and (width < 1190px) and (orientation: portrait)");
const mediaXsmall = window.matchMedia("screen and (width < 312px) and (orientation: portrait)");
const mediaLandscape = window.matchMedia("screen and (width < 1190px) and (orientation: landscape)");
const height = window.matchMedia("screen and (height > 500px)");
const mediaLock = window.matchMedia("screen and (width >= 1190px)");

let toggler = true;
let activeSection = resume;
let activeLink = resumeLink;

if(mediaLock.matches) window.screen.orientation.lock("landscape");

function selectedLinkColor(ele) {
    a.forEach(link => link.style.color = link.id === ele.id ? "black" : "white");
    activeLink = ele;
}

function selectedOpacity(ele) {    
    sections.forEach(sect => sect.style.opacity = sect.id === ele.id ? 1 : 0);
    activeSection = ele;    
}

function mediaChanges() {
    text.style.height = "100px";
    text.style.padding = "0px 20px";
    banner.style.top = "25%";
    banner.style.position = "fixed"
    clickMe.style.padding = "0px 20px";
    clickMe.style.fontSize = "15px";
    fontFormatting.style.fontSize = "40px";
    bckgrd.style.height = "40vh";
    left.style.height = "40vh";
    left.style.position = "fixed";
    left.style.zIndex = 10;
}
function mediaLandscapeChanges() {
    mediaChanges();
    banner.style.top = height.matches ? "25%" : "45%"; 
    bckgrd.style.height = height.matches ?"40vh" : "70vh"; 
    left.style.height = height.matches ?"40vh" : "70vh"; 
}

media.addEventListener("change", evt => evt.matches && mediaChanges())
mediaLandscape.addEventListener("change", evt => evt.matches && mediaLandscapeChanges());

nameBanner.addEventListener('click', (evt) => { 
    evt.preventDefault();
    if (mediaXsmall.matches) text.style.marginBottom = "20px";   
    if (media.matches) mediaChanges();
    if (mediaLandscape.matches) mediaLandscapeChanges();
    if (!media.matches && !mediaLandscape.matches) left.style.transform = toggler ? "rotate(0)" : "rotate(45deg)";

    body.style.backgroundColor = toggler ? "#d7cdc1": "white";
    fontFormat.style.color = toggler ? "white" : "black";
    if (!media.matches && !mediaLandscape.matches) nameBanner.style.left = toggler ? "0%" : "70%";
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
