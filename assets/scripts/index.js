const faqBtn = document.querySelectorAll("#faq-btn");
faqBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    expandQst(e.currentTarget);
  });
});
function expandQst(button) {
  const content = button.nextElementSibling;
  const plus = button.querySelector("span");
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    plus.textContent = "-";
  } else {
    content.classList.add("hidden");
    plus.textContent = "+";
  }
}
