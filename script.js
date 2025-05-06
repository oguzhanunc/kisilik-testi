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

    // Form submission handling with result logic
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameValid = nameInput.value.length >= 2;
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);

        if (!nameValid || !emailValid) {
            alert("Öncelikle formdaki hataları gidermelisin.");
            return;
        }

        const answers = [
            document.querySelector('input[name="q1"]:checked')?.value,
            document.querySelector('input[name="q2"]:checked')?.value,
            document.querySelector('input[name="q3"]:checked')?.value,
            document.querySelector('input[name="q4"]:checked')?.value,
            document.querySelector('input[name="q5"]:checked')?.value
        ];

        if (answers.includes(undefined)) {
            alert("Lütfen tüm soruları yanıtlayınız.");
            return;
        }

        const scores = {
            "Enerjik": 1,
            "Hemen çözüm üretirim": 1,
            "Arkadaşlarla vakit geçirmek": 1,
            "Soğukkanlı kalırım": 1,
            "Liderlik yaparım": 1
        };

        let total = 0;
        answers.forEach(ans => {
            total += scores[ans] ? 1 : 0;
        });

        let result = "";
        if (total >= 4) {
            result = "Girişken ve lider ruhlusunuz.";
        } else if (total >= 2) {
            result = "Dengeli ve uyumlu bir kişiliğiniz var.";
        } else {
            result = "İçe dönük ve sakin bir yapınız var.";
        }

        const resultData = {
            name: nameInput.value,
            email: emailInput.value,
            result
        };
        window.location.href = `result.html?name=${encodeURIComponent(nameInput.value)}&result=${encodeURIComponent(result)}`;
    });
});
