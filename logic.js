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
    subject = `${reservation} - Refund Notification`;
  }

  const body = `
        <b>Reservation Number:</b> ${reservation}%0D%0A
        <b>Notification Type:</b> ${emailType}%0D%0A
        <b>Card Type:</b> ${cardType}%0D%0A
        <b>Last 4 of Card:</b> ${ccLast4}%0D%0A
        <b>Description:</b>${description}%0D%0A
    `.trim();

  const to = "palburqueque@trumpmiami.com";
  const cc = "zcrespo@trumpmiami.com,ptrobo@trumpmiami.com";

  const mailtoLink = `mailto:${to}?cc=${encodeURIComponent(
    cc
  )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;

  document.getElementById("refundForm").reset();
});
