console.log("JavaScript ligado com sucesso!");

// Mini Hero Carousel — data and state
const alerts = [
  {
    title: "Dangerous fellowship try to destroy the ring",
    text: "Orcs, Goblins, Balrogs, protect your master Sauron!",
  },
  {
    title: "The ring was seen near the Anduin",
    text: "Send scouts immediately. Reward for confirmed sightings.",
  },
  {
    title: "Dwarf activity reported in the Misty Mountains",
    text: "Track their movements. Report any signs of the ring.",
  },
];

let current = 0; // index of the active slide

// DOM element selection
const hero = document.querySelector(".hero"); // hero container
const titleEl = hero?.querySelector("h1"); // hero title (h1)
const textEl = hero?.querySelector("p"); // hero paragraph
const buttons = hero?.querySelectorAll("button"); // all buttons inside hero
const prevBtn = document.querySelector(".hero-prev"); // left arrow button
const nextBtn = document.querySelector(".hero-next"); // right arrow button

// Render function — updates DOM with slide data
function renderSlide(index) {
  if (!titleEl || !textEl) return; // safety check: exit if elements not found
  const item = alerts[index]; // pick the alert object by index
  titleEl.textContent = item.title; // update h1 text
  textEl.textContent = item.text; // update paragraph text
}

// Navigation functions (circular using modulo)
function goNext() {
  current = (current + 1) % alerts.length; // move forward, loop back to 0
  renderSlide(current);
}

function goPrev() {
  current = (current - 1 + alerts.length) % alerts.length; // move backward, loop to last
  renderSlide(current);
}

// Attach events to buttons (if they exist)
prevBtn?.addEventListener("click", goPrev);
nextBtn?.addEventListener("click", goNext);

// Keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") goNext();
  else if (e.key === "ArrowLeft") goPrev();
});

// Initial render — sync UI with current state
renderSlide(current);
