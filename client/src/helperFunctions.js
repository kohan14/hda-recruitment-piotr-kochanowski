//Check if fields are filled
export const checkFieldsFilled = data => {
  for (const input in data) {
    if (!data[input]) {
      return false;
    }
  }
  return true;
};

//Transform NodeList into array and reduce all inputs with their values into single data object
export const inputElementsToData = inputs => {
  return [...inputs].reduce((acc, curr, index) => {
    if (index !== 1) {
      return { ...acc, [curr.name]: curr.value };
    } else {
      return { [acc.name]: acc.value, [curr.name]: curr.value };
    }
  });
};

//Debounce function
export const debounce = (callback, ms) => {
  let timer = 0;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(callback, ms, ...args);
  };
};
