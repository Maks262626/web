const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');

const regexName = /^[A-Z][a-z]+$/g;
const regexPhone = /^0[0-9]{9}$/g;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


nameInput.addEventListener('blur', () => {
  const name = nameInput.value.trim();

  if (!regexName.test(name)) {
    alert('Неправильне ім\'я. Ім\'я повинно містити одну велику літеру, бути більше одного символа і не містити цифр та символів');
  }
});
phoneInput.addEventListener('blur', () => {
    const phone = phoneInput.value.trim();

    if (!regexPhone.test(phone)) {
        alert('Неправильно введено телефон.Телефон повинен містити 10 цифр(перша 0)');
    }
});

emailInput.addEventListener('blur', () => {
    const email = emailInput.value.trim();

    if (!regexEmail.test(email)) {
        alert('Неправильно введено електрону скриньку');
    }
});