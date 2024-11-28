// darkMode Starts here

let darkModeBtn = document.querySelector('.darkModeBtn');
let body = document.querySelector('body');
function darkmode() {
  body.classList.toggle('darkmode');
}

darkModeBtn.addEventListener('click', darkmode);

// darkMode Ends here
// Custom Cursor starts here

let cursor = document.querySelector(".cursor")
let cursorSm = document.querySelector(".cursorSm")

function cursorMoved (event) {
  let top = event.pageY;
  let left = event.pageX;
  cursor.style.left = `${left}px`
  cursor.style.top = `${top}px`
  cursorSm.style.left = `${left}px`
  cursorSm.style.top = `${top}px`
}

window.addEventListener("mousemove", cursorMoved)

// Custom Cursor ends here
// FAQ starts here

let faqs = document.querySelectorAll(".faq")

function toggleFaq(event) {
    for (faq of faqs) {
      faq.classList.remove("active")
    }
    event.currentTarget.classList.add("active")
}

for (faq of faqs){
  faq.addEventListener("click", toggleFaq)
}

// FAQ ends here
// jQuery starts here


$(window).on("load", function () {
  $("#preloader").fadeOut();
});

// $(".backToTop").click(function){
//   $("html,body").animate({ scrolltop: 0 }, 500)
// }