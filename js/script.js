
// ------------------SLIDER---------------------------
var slides = document.querySelectorAll('#slides .slide'),
	currentSlide = 0,
	slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
    pauseButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function() {
    if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function() {
    pauseSlideshow();
    previousSlide();
};


// ---------------------MODAL WINDOW-------------------

$(document).ready(function(){

// localStorage.clear();
    var a = +localStorage.xxx || 0;
    3 > a && (localStorage.xxx = ++a, $("#bg_popup").show().on("click", function(a) {
        ($(a.target).closest(".close").length || a.target == this) && $("#bg_popup").hide()
    }))

});
