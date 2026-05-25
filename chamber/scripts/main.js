// =====================
// WEATHER API
// =====================

const apiKey = "YOUR_API_KEY"; // replace this
const city = "Kampala";

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
  .then(res => res.json())
  .then(data => {

    document.getElementById("temp").textContent = data.list[0].main.temp;
    document.getElementById("desc").textContent = data.list[0].weather[0].description;

    const forecast = document.getElementById("forecast");
    forecast.innerHTML = "";

    for (let i = 0; i < 3; i++) {
      let day = data.list[i * 8];

      forecast.innerHTML += `
        <p>
          Day ${i + 1}: ${day.main.temp}°C - ${day.weather[0].description}
        </p>
      `;
    }
  });


// =====================
// SPOTLIGHT MEMBERS
// =====================

async function loadSpotlights() {
  const res = await fetch("data/members.json");
  const members = await res.json();

  const filtered = members.filter(m =>
    m.membership === "gold" || m.membership === "silver"
  );

  const shuffled = filtered.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  const container = document.getElementById("spotlight-container");
  container.innerHTML = "";

  selected.forEach(m => {
    container.innerHTML += `
      <div class="card">
        <img src="${m.logo}" alt="${m.name}">
        <h3>${m.name}</h3>
        <p>${m.membership}</p>
        <p>${m.phone}</p>
        <p>${m.address}</p>
        <a href="${m.website}" target="_blank">Visit Website</a>
      </div>
    `;
  });
}

loadSpotlights();