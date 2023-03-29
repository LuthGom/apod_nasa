export const urlApi = (key:string, date:string) =>
  `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`;
