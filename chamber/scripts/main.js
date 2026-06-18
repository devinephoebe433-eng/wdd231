// =====================
// FOOTER
// =====================
document.getElementById("current-year").textContent =
  new Date().getFullYear();

document.getElementById("lastModified").textContent =
  document.lastModified;

// =====================
// WEATHER API (unchanged)
// =====================
const apiKey = "6ddd9d48db681af95548a02054736f26";
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
// SPOTLIGHT MEMBERS (FIXED)
// =====================
async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const members = await response.json();

    // Only Gold + Silver members
    const qualified = members.filter(member =>
      member.membership.toLowerCase() === "gold" ||
      member.membership.toLowerCase() === "silver"
    );

    // Shuffle and pick 3
    const selected = qualified
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const container = document.getElementById("spotlight-container");
    container.innerHTML = "";

    selected.forEach(member => {
      container.innerHTML += `
        <div class="card">
          <img src="${member.image}" alt="${member.name}" loading="lazy">
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