// --- 스크롤 로직 (기존 유지) ---
const container = document.getElementById('scroll-container');
let target = container.scrollLeft;
let current = target;
let isMoving = false;

container.addEventListener("wheel", e => {
  e.preventDefault();
  if (!isMoving) target = current = container.scrollLeft;
  target = Math.max(0, Math.min(container.scrollWidth - container.clientWidth, target + e.deltaY));
  if (!isMoving) {
    isMoving = true;
    scrollAnimate();
  }
}, { passive: false });

function scrollAnimate() {
  current += (target - current) * 0.05;
  container.scrollLeft = current;
  if (Math.abs(target - current) < 0.5) {
    isMoving = false;
  } else {
    requestAnimationFrame(scrollAnimate);
  }
}

// // --- 마우스 원 로직 (Page 1 영역 한정) ---
// const page1 = document.getElementById('target-area');
// const cursor1 = document.getElementById('cursor-1');
// const cursor2 = document.getElementById('cursor-2');

// let mouseX = 0;
// let mouseY = 0;

// // 두 번째 원의 부드러운 이동을 위한 변수 (Lerp 용)
// let cursor2X = 0;
// let cursor2Y = 0;

// // 마우스 움직임 감지 (page1 영역 내)
// document.addEventListener('mousemove', (e) => {
//   // page1 기준 상대 좌표 계산 (스크롤 영향 받지 않도록)
//   const rect = page1.getBoundingClientRect();
//   mouseX = e.clientX - rect.left;
//   mouseY = e.clientY - rect.top;

//   // 첫 번째 원은 마우스를 즉시 따라다님
//   cursor1.style.left = `${mouseX}px`;
//   cursor1.style.top = `${mouseY}px`;
// });

// // 애니메이션 루프 (두 번째 원의 부드러운 추격 효과)
// function cursorAnimate() {
//   // Lerp 알고리즘: 현재 위치에서 목표 위치까지 거리의 10%만큼 이동
//   cursor2X += (mouseX - cursor2X) * 0.1;
//   cursor2Y += (mouseY - cursor2Y) * 0.1;

//   cursor2.style.left = `${cursor2X}px`;
//   cursor2.style.top = `${cursor2Y}px`;

//   requestAnimationFrame(cursorAnimate);
// }

// cursorAnimate(); // 커서 애니메이션 시작