// Existing animation code
const cards = document.querySelectorAll('.card');

function showCards() {
  const triggerBottom = window.innerHeight * 0.8;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showCards);
window.addEventListener('load', showCards);

// Smooth scroll to pricing section
function scrollToPricing() {
  const pricingSection = document.querySelector('section:nth-of-type(3)');
  pricingSection.scrollIntoView({ behavior: 'smooth' });
}

// ----------------
// Task App Prototype
// ----------------
function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement('li');
  li.className = "flex justify-between items-center bg-white p-3 rounded-lg shadow";

  li.innerHTML = `
    <span>${taskText}</span>
    <button class="text-red-500 font-bold hover:text-red-700" onclick="removeTask(this)">✖</button>
  `;

  document.getElementById('taskList').appendChild(li);
  input.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
}
