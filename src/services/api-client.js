const JokeURL = "https://official-joke-api.appspot.com/random_joke"

// eslint-disable-next-line no-unused-vars
export async function getJoke() {
   const respone = await fetch(JokeURL);
   const obj = await respone.json();
   return obj;
}