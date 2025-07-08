/* Get the customer first and last name and generate a thank-you message that includes their name */
// order-confirmation.js

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const firstName = params.get("firstName") || "";
    const lastName = params.get("lastName") || "";

    const thankYouMessage = document.getElementById("thankYouMessage");
    thankYouMessage.textContent = `Thank you, ${firstName} ${lastName}!`;
});
