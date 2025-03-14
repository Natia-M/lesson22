document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("userContainer");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    users.forEach((user) => {
      const card = document.createElement("div");
      card.classList.add("user-card");

      card.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
});
