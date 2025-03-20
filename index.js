function switchTab(tab) {
    const sliderBall = document.querySelector(".slider-ball");
    const loginButton = document.querySelector(".tab[onclick*='login']");
    const registerButton = document.querySelector(".tab[onclick*='register']");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const welcomeText = document.getElementById("welcome-text");

    if (tab === 'login') {
        sliderBall.style.left = "5px"; // Move ball to the left
        loginButton.classList.add("active");
        registerButton.classList.remove("active");
        loginForm.style.display = "block"; // Show login form
        registerForm.style.display = "none"; // Hide register form
        welcomeText.textContent = "Welcome Back\nAccess Justice, Anytime, Anywhere";
    } else if (tab === 'register') {
        sliderBall.style.left = 'calc(50% + 5px)'; // Move ball to the right
        registerButton.classList.add("active");
        loginButton.classList.remove("active");
        loginForm.style.display = "none"; // Hide login form
        registerForm.style.display = "block"; // Show register form
        welcomeText.textContent = "Join Our Platform\nCreate an account to access legal services.";
    }
}

// Theme toggle functionality (unchanged)
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");

    function setTheme(theme) {
        document.body.classList.remove("light-mode", "dark-mode");
        document.body.classList.add(theme);

        const rightSection = document.querySelector(".right-section");
        if (rightSection) {
            rightSection.classList.remove("light-mode", "dark-mode");
            rightSection.classList.add(theme);
        }

        const themeIcon = themeToggle.querySelector("span");
        themeIcon.textContent = theme === "light-mode" ? "dark_mode" : "light_mode";
        localStorage.setItem("theme", theme);
    }

    function toggleTheme() {
        if (document.body.classList.contains("light-mode")) {
            setTheme("dark-mode");
        } else {
            setTheme("light-mode");
        }
    }

    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme || "light-mode");

    themeToggle.addEventListener("click", toggleTheme);
});