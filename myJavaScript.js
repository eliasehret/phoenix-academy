
var sideBarOpen = false;

function openProbetrainingsAnmeldung(){

    const display = document.getElementById("Probetrainingsanmeldung");
    const coverImage = document.getElementById("CoverImage");
    
    if(sideBarOpen) {
        display.classList.add("sideBarClosing");
        display.classList.remove("sideBarOpening");
        // display.style.animation = "fadeOut .5s ease-out forwards";
        coverImage.style.animation = "fadeOutCoverImage .9s ease-out forwards";
        display.style.zIndex = 3;

        sideBarOpen = false;
    }
    else {
        display.classList.add("sideBarOpening");
        display.classList.remove("sideBarClosing");
        // display.style.animation = "fadeIn .5s ease-out forwards";
        coverImage.style.animation = "fadeInCoverImage .5s ease-out forwards";
        display.style.zIndex = 11;

        sideBarOpen = true;
    }
}

function openQuestionDropdown(){

    var dropdown = document.getElementsByClassName("fragen_dropdown");
    var i;
    var j;
    
    
    for (i = 0; i < dropdown.length; i++) {

        dropdown[i].addEventListener("click", function() {

            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;

            dropdownContent.classList.toggle("fragen_dropdown-content_open");
        });
    } 
}