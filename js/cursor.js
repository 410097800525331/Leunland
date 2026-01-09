// --- 마우스 원 로직 (viewport 기준) ---
const page1 = document.getElementById('target-area');
const cursor1 = document.getElementById('cursor-1');
const cursor2 = document.getElementById('cursor-2');

let mouseX = 0;
let mouseY = 0;

let cursor2X = 0;
let cursor2Y = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor1.style.transform =
    `translate3d(${mouseX - 10}px, ${mouseY - 10}px, 0)`; // 20px / 2
});

function cursorAnimate() {
  cursor2X += (mouseX - cursor2X) * 0.1;
  cursor2Y += (mouseY - cursor2Y) * 0.1;

  cursor2.style.transform =
    `translate3d(${cursor2X - 25}px, ${cursor2Y - 25}px, 0)`; // 50px / 2

  requestAnimationFrame(cursorAnimate);
}


cursorAnimate();
