import { generateAlert } from './alert.js';
import { sendForm } from './api.js';
import { checkFieldsFilled, inputElementsToData } from './helperFunctions.js';

const onFormSubmit = (e, form) => {
  e.preventDefault();
  console.log('CLIENT: Started submitting data');

  const inputs = form.querySelectorAll('input');
  const data = inputElementsToData(inputs);

  //Validate and send request
  if (!checkFieldsFilled(data)) {
    generateAlert('error', 'Check fields for any mistakes');
    console.log('CLIENT: Something went wrong, request not sent');
  } else {
    sendForm(data).then(() => {
      generateAlert('success', 'Successfully added to DB !');
      console.log('CLIENT: Data successfully posted to BE');
      inputs.forEach(input => (input.value = ''));
    });
  }
};

export default onFormSubmit;
