const results = document.querySelector("#results");

const params = new URLSearchParams(window.location.search);

results.innerHTML = `
<strong>First Name:</strong> ${params.get("firstname")}<br>
<strong>Last Name:</strong> ${params.get("lastname")}<br>
<strong>Email:</strong> ${params.get("email")}<br>
<strong>Phone:</strong> ${params.get("phone")}<br>
<strong>Business:</strong> ${params.get("organization")}<br>
<strong>Submitted:</strong> ${params.get("timestamp")}
`;