// Generate error or success messages
export const generateAlert = (status = 'error', message) => {
  const alertEL = document.createElement('div');
  if (status === 'success') {
    alertEL.classList.add('success-popup');
  } else {
    alertEL.classList.add('error-popup');
  }
  alertEL.textContent = message;
  document.querySelector('#alerts').appendChild(alertEL);
  setTimeout(() => alertEL.remove(), 3000);
};
