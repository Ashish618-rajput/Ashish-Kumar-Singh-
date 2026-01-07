document.getElementById("generateBtn").addEventListener("click", generatePassword);

function generatePassword() {
  const length = document.getElementById("length").value || 12;
  const upper = document.getElementById("upper").checked;
  const lower = document.getElementById("lower").checked;
  const number = document.getElementById("number").checked;
  const symbol = document.getElementById("symbol").checked;

  let chars = "";
  if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
  if (number) chars += "0123456789";
  if (symbol) chars += "!@#$%^&*()_+[]{}<>?/";

  if (!chars) {
    document.getElementById("result").value = "Select at least one option";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  document.getElementById("result").value = password;
}
