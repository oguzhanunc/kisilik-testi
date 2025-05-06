
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("quizForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");

    // Real-time name validation
    nameInput.addEventListener("input", function () {
        if (nameInput.value.length < 2) {
            nameError.textContent = "İsim en az 2 karakter olmalı!";
        } else {
            nameError.textContent = "";
        }
    });

    // Real-time email validation
    emailInput.addEventListener("input", function () {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = "Lütfen geçerli bir eposta gir!";
        } else {
            emailError.textContent = "";
        }
    });

    // Form submission handling
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (nameInput.value.length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            alert("Form başarıyla kaydedildi. Sonuçları görebilirsin.");
            window.location.href = "result.html";
        } else {
            alert("Öncelikle formdaki hataları gidermelisin.");
        }
    });
});
