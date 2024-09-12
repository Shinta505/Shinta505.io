const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.innerText = " ";
    } else {
        passwordInput.type = "password";
        togglePassword.innerText = " ";
    }
});

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Di sini Anda bisa menambahkan logika untuk memeriksa kredensial dan mengambil tindakan yang sesuai.
    // Misalnya, mengirim data ke server atau menampilkan pesan kesalahan.

    // Contoh sederhana:
    if (username === "user" && password === "password") {
        alert("Login berhasil!");
    } else {
        alert("Login gagal. Periksa kembali username dan password Anda.");
    }
});
