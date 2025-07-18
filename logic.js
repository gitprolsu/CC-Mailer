document.getElementById("refundForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const reservation = document.getElementById("reservation").value.trim();
  const ccLast4 = document.getElementById("ccLast4").value.trim();
  const cardType = document.getElementById("cardType").value;
  const emailType = document.getElementById("emailType").value;
  const description = document.getElementById("description").value.trim();

  let subject = "";

  if (emailType === "Void / Reversal Notification") {
    subject = `${reservation} - Void in Shift4`;
  } else {
    subject = `${reservation} - ${emailType}`;
  }

  const body = `
        Reservation Number: ${reservation}%0D%0A
        Notification Type: ${emailType}%0D%0A
        Card Type: ${cardType}%0D%0A
        Last 4 of Card: ${ccLast4}%0D%0A
        Description:%0D%0A${description}
    `.trim();

  const mailtoLink = `mailto:?subject=${encodeURIComponent(
    subject
  )}&body=${body}`;
  window.location.href = mailtoLink;
});
