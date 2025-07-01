// Meminta user memasukkan nilai (1–100)
let score = parseInt(prompt("Enter your score (1-100):"));

// Logika pengecekan nilai dan pemberian grade
if (score >= 80 && score <= 100) {
  alert("Your grade is A");
} else if (score >= 60 && score < 80) {
  alert("Your grade is B");
} else if (score >= 40 && score < 60) {
  alert("Your grade is C");
} else if (score >= 1 && score < 40) {
  alert("Your grade is D");
} else {
  alert("Cannot calculate your grade");
}
