import axios from 'axios';

const generateJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  try {
    const res = await axios.get('https://icanhazdadjoke.com', config);
    document.getElementById('joke').innerHTML = res.data.joke;
  } catch (error) {
    console.error('Error fetching joke:', error);
  }
};

export default generateJoke;