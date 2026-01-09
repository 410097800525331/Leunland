const main = document.querySelector(".main");

let currentPage = 0;
const pages = document.querySelectorAll(".page");
let isScrolling = false;

function scrollToPage(index) {
  main.scrollTo({
    left: index * main.clientWidth,
    behavior: "smooth"
  });
}

main.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
    if (isScrolling) return;
    isScrolling = true;

    if (e.deltaY > 0) {
      currentPage = Math.min(currentPage + 1, pages.length - 1);
    } else {
      currentPage = Math.max(currentPage - 1, 0);
    }

    scrollToPage(currentPage);

    setTimeout(() => {
      isScrolling = false;
    }, 600);
  },
  { passive: false }
);

window.addEventListener("resize", () => {
  scrollToPage(currentPage);
});