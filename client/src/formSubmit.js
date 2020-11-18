const submitForm = (e, form) => {
  e.preventDefault();
  console.log('CLIENT: Started submitting data');
  const inputs = form.querySelectorAll('input');

  //Transform NodeList into array and reduce all inputs with their values into single data object
  const data = [...inputs].reduce((acc, curr, index) => {
    if (index !== 1) {
      return { ...acc, [curr.name]: curr.value };
    } else {
      return { [acc.name]: acc.value, [curr.name]: curr.value };
    }
  });
  formValidate(data);
};

const formValidate = data => {
  for (const input in data){
    console.log(input)
    if(!data[input]){
      console.log('something is no yes');
      return false
    }else{
      console.log('passed');
    }
  }
  return true;
};

export default submitForm;
