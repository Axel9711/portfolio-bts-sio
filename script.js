// 1. Effet Machine à Écrire (Typewriter)
const words = ["Étudiant BTS SIO SISR", "Admin Systèmes & Réseaux", "Futur Ingénieur Cybersécurité"];
let i = 0;
let timer;

function typingEffect() {
  const target = document.getElementById("typewriter");
  if (!target) return;
  
  let word = words[i].split("");
  var loopTyping = function() {
    if (word.length > 0) {
      target.innerHTML += word.shift();
    } else {
      setTimeout(deletingEffect, 2000);
      return false;
    }
    timer = setTimeout(loopTyping, 100);
  };
  loopTyping();
}

function deletingEffect() {
  const target = document.getElementById("typewriter");
  if (!target) return;
  
  let word = target.innerHTML.split("");
  var loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      target.innerHTML = word.join("");
    } else {
      if (words.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      }
      typingEffect();
      return false;
    }
    timer = setTimeout(loopDeleting, 50);
  };
  loopDeleting();
}

// 2. Gestionnaire de Thème (Clair / Sombre)
document.addEventListener("DOMContentLoaded", () => {
  typingEffect();

  const toggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme") || "dark";
  
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateButtonText(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateButtonText(newTheme);
    });
  }
});

function updateButtonText(theme) {
  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.textContent = theme === "dark" ? "☀️ Mode Light" : "🌙 Mode Dark";
  }
}
