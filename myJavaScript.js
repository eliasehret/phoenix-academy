
var sideBarOpen = false;

function openProbetrainingsAnmeldung(){

    const display = document.getElementById("Probetrainingsanmeldung");
    const coverImage = document.getElementById("CoverImage");
    
    if(coverImage.style.backgroundColor == "black") 
    {
        console.log("H");
    }

    if(sideBarOpen) {
        display.style.animation = "fadeOut .5s ease-out forwards";
        coverImage.style.animation = "fadeOutCoverImage 1s ease-out forwards";
        display.style.zIndex = 3;

        sideBarOpen = false;
    }
    else {
        display.style.animation = "fadeIn .5s ease-out forwards";
        coverImage.style.animation = "fadeInCoverImage .5s ease-out forwards";
        display.style.zIndex = 11;

        sideBarOpen = true;
    }
}