// Obtener el botón y el elemento raíz
const button = document.getElementById("toggle-mode");
const root = document.documentElement;

// Crear una variable para guardar el estado del modo
let darkMode = false;

// Añadir un evento al botón para cambiar el modo al hacer clic
button.addEventListener("click", function() {
  // Si el modo es claro, cambiar a oscuro
  if (!darkMode) {
    root.style.setProperty("--bg-color", "var(--bg-color-dark)");
    root.style.setProperty("--text-color", "var(--text-color-dark)");
    root.style.setProperty("--border-color", "var(--border-color-dark)");
    darkMode = true;
  }
  // Si el modo es oscuro, cambiar a claro
  else {
    root.style.setProperty("--bg-color", "var(--bg-color-light)");
    root.style.setProperty("--text-color", "var(--text-color-light)");
    root.style.setProperty("--border-color", "var(--border-color-light)");
    darkMode = false;
  }
});
