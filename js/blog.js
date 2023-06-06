var popout = document.querySelector(".popout");
var closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", function() {
    popout.style.display = "none";
});

window.addEventListener("load", function() {
    setTimeout(function() {
        popout.style.display = "block";
    }, 15000); // Adjust the time (in milliseconds) as per your preference
});