const JokeURL = "https://official-joke-api.appspot.com/random_joke"

export async function getJoke() {
   const respone = await fetch(JokeURL);
   const obj = await respone.json();
   return obj;
}