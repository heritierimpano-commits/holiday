// THEME SWITCHER
let themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// IMAGE CHANGER
let img = document.getElementById("changeImg");
img.addEventListener("click", () => {
    img.src = (img.src.includes("placeholder"))
        ? "https://via.placeholder.com/200/ff4444"
        : "https://via.placeholder.com/200";
});

// SHOW / HIDE TEXT
let toggleBtn = document.getElementById("toggleBtn");
let infoText = document.getElementById("infoText");

toggleBtn.addEventListener("click", () => {
    if (infoText.style.display === "none") {
        infoText.style.display = "block";
        toggleBtn.textContent = "Hide";
    } else {
        infoText.style.display = "none";
        toggleBtn.textContent = "Show More";
    }
});

// FORM VALIDATION
let form = document.getElementById("signupForm");
let message = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        message.textContent = "All fields must be filled.";
        message.style.color = "red";
        return;
    }

    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
});
