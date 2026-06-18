// =====================
// FOOTER
// =====================
document.getElementById("current-year").textContent =
  new Date().getFullYear();

document.getElementById("lastModified").textContent =
  document.lastModified;

// =====================
// WEATHER API
// =====================
const apiKey = "YOUR_API_KEY_HERE"; // keep your real key
const city = "Kampala";

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
    );

    const data = await response.json();

    if (!data.list) throw new Error("Weather data not found");

    document.getElementById("temp").textContent =
      Math.round(data.list[0].main.temp);

    document.getElementById("desc").textContent =
      data.list[0].weather[0].description;

    const forecast = document.getElementById("forecast");
    forecast.innerHTML = "";

    for (let i = 0; i < 3; i++) {
      const day = data.list[i * 8];

      forecast.innerHTML += `
        <p>
          Day ${i + 1}: ${Math.round(day.main.temp)}°C -
          ${day.weather[0].description}
        </p>
      `;
    }
  } catch (error) {
    console.error(error);

    document.getElementById("temp").textContent = "--";
    document.getElementById("desc").textContent = "Weather unavailable";
  }
}

getWeather();

// =====================
// SPOTLIGHT MEMBERS
// =====================
async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const members = await response.json();

    const qualified = members.filter(
      member =>
        member.membership.toLowerCase() === "gold" ||
        member.membership.toLowerCase() === "silver"
    );

    const selected = qualified
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const container = document.getElementById("spotlight-container");

    container.innerHTML = "";

    selected.forEach(member => {
      container.innerHTML += `
        <div class="card">
          <img src="${member.logo}" alt="${member.name}" loading="lazy">
          <h3>${member.name}</h3>
          <p>${member.membership}</p>
          <p>${member.phone}</p>
          <p>${member.address}</p>
          <a href="${member.website}" target="_blank">Visit Website</a>
        </div>
      `;
    });
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

loadSpotlights();