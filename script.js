// Elementlarni olish
const phoneInput = document.getElementById("text");
const passwordInput = document.getElementById("password");
const confirmButton = document.getElementById("button");

// Password inputni o'rab turgan divni olish
const passwordContainer = document.querySelector(".number");
passwordContainer.style.position = "relative"; // Parentni joylashishiga ta’sir qilish

// Ko'z ikonkasini yaratish
const togglePassword = document.createElement("value");
togglePassword.innerHTML = "👁️";
togglePassword.style.position = "absolute";
togglePassword.style.top = "65px";
togglePassword.style.right = "75px";
togglePassword.style.top = "50%";
togglePassword.style.transform = "translateY(-50%)";
togglePassword.style.cursor = "pointer";
togglePassword.style.fontSize = "18px";
togglePassword.style.color = "#777";

// Iconni input ichida ko'rinadigan qilish
passwordContainer.appendChild(togglePassword);

// Tugma rangini o'zgartirish funksiyasi
function checkInputs() {
    if (phoneInput.value.trim() !== "" || passwordInput.value.trim() !== "") {
        confirmButton.style.backgroundColor = "red"; // Tugmani qizil qilish
        confirmButton.style.cursor = "pointer";
    } else {
        confirmButton.style.backgroundColor = "#f5a08a"; // Oldingi rang
        confirmButton.style.cursor = "not-allowed";
    }
}

// Parolni ko'rsatish yoki yashirish
togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.innerHTML = "🙈"; // Yashirish ko‘zcha
    } else {
        passwordInput.type = "password";
        togglePassword.innerHTML = "👁️"; // Ko‘rsatish ko‘zcha
    }
});

// Inputlarga event qo'shish
phoneInput.addEventListener("input", checkInputs);
passwordInput.addEventListener("input", checkInputs);
