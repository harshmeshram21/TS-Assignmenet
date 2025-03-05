// Promises and Async/Await
// Scenario: You need to fetch weather data from an API and display it on a webpage.
// Question: Write an async function to fetch data from  https://api.example.com/weather  and log the result. How would you handle errors?

const weatherData: any = async () => {
  try {
    const promiseData = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&hourly=temperature_2m"
    );
    const data = await promiseData.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
weatherData();
