// Password yang benar
let correctPassword = "admin123";

// Meminta user memasukkan password
let inputPassword = prompt("Please enter your password:");

// Logika pengecekan password
if (inputPassword === correctPassword) {
  alert("Password is correct. Welcome!");
} else {
  alert("Incorrect password. Redirecting...");
  window.location.href = "https://www.google.com"; // Arahkan ke Google jika salah
}
