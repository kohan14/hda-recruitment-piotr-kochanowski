//POST data to BE
export const sendForm = async data => {
  const response = await fetch('/people', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
};

//Search db with query string
export const searchDb = async term => {
  const response = await fetch(`/people?search=${term}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(
    `CLIENT: Accessing DB for results with a \'${term}\' query parameter`
  );
  return response.json();
};
