const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const STORAGE_KEY = 'feedback-form-state';

const saveToLocalStorage = _.throttle(() => {
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}, 500);

form.addEventListener('input', saveToLocalStorage);

window.addEventListener('DOMContentLoaded', () => {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    emailInput.value = savedData.email;
    messageInput.value = savedData.message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(data);
  emailInput.value = '';
  messageInput.value = '';
  localStorage.removeItem(STORAGE_KEY);
});
