const form = document.querySelector("#signupForm");
const note = document.querySelector("#formNote");
const recipient = "Tacarey6@gmail.com";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get("name").trim();
  const email = data.get("email").trim();
  const goal = data.get("goal");
  const type = data.get("type");
  const message = data.get("message").trim();

  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Training goal: ${goal}`,
    `Training type: ${type}`,
    "",
    "Notes:",
    message || "No extra notes provided.",
  ].join("\n");

  const subject = encodeURIComponent(`Training sign up request from ${name}`);
  const encodedBody = encodeURIComponent(body);

  note.textContent = "Opening your email app with this sign up request.";
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${encodedBody}`;
});
