emailjs.init("xcTuRfxk28hZhL34w");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
      "service_y0x7g9c",
      "template_gkhd4ok",
      this
    )
    .then(() => {

      alert("Message Sent Successfully!");

      this.reset();

    })
    .catch((error) => {

      alert("Failed to send message");

      console.log(error);

    });

});