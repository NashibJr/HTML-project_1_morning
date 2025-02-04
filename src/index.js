document.addEventListener("DOMContentLoaded", function() {
    const togglePassword = document.querySelector(".toggle-password");
    const passwordField = document.getElementById("password");

    togglePassword.addEventListener("click", function() {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            togglePassword.textContent = "🙈"; // Change icon when showing password
        } else {
            passwordField.type = "password";
            togglePassword.textContent = "👁️"; // Change back to eye icon
        }
    });
});
