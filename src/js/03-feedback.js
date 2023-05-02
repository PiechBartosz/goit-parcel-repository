// Zainicjalizuj formularz i pola
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// Zdefiniuj klucz do local storage
const STORAGE_KEY = 'feedback-form-state';

// Zdefiniuj funkcję zapisującą stan formularza do local storage
const saveToLocalStorage = _.throttle(() => {
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}, 500);

// Śledź zdarzenie input i zapisuj stan formularza
form.addEventListener('input', saveToLocalStorage);

// Przy ładowaniu strony, sprawdź stan storage i wypełnij pola formularza
window.addEventListener('DOMContentLoaded', () => {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    emailInput.value = savedData.email;
    messageInput.value = savedData.message;
  }
});

// Po wysłaniu formularza wyczyść storage i pola formularza
form.addEventListener('submit', event => {
  event.preventDefault(); // Zapobiegaj domyślnej akcji wysyłania formularza
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(data); // Wyloguj dane
  emailInput.value = '';
  messageInput.value = '';
  localStorage.removeItem(STORAGE_KEY);
});
