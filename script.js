(function () {
  var THEME_KEY = "preferred-theme";
  var root = document.documentElement;
  var toggleButton = document.getElementById("theme-toggle");
  var toggleText = toggleButton ? toggleButton.querySelector(".toggle-text") : null;

  function setTheme(theme) {
    var isDark = theme === "dark";

    root.setAttribute("data-theme", isDark ? "dark" : "light");

    if (toggleButton) {
      toggleButton.setAttribute("aria-pressed", String(isDark));
      toggleButton.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
      );
    }

    if (toggleText) {
      toggleText.textContent = isDark ? "Dark mode" : "Light mode";
    }
  }

  function getSavedTheme() {
    var saved = localStorage.getItem(THEME_KEY);
    return saved === "light" || saved === "dark" ? saved : null;
  }

  function toggleTheme() {
    var current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    var next = current === "dark" ? "light" : "dark";

    setTheme(next);
    localStorage.setItem(THEME_KEY, next);
  }

  setTheme(getSavedTheme() || "dark");

  if (toggleButton) {
    toggleButton.addEventListener("click", toggleTheme);
  }
})();
