var input = document.querySelector("#inputText");
var image = document.querySelector("#image");
var imageBox = document.querySelector("#imgQr");

function generateQR() {
  if (input.value === "") {
    input.classList.add("error");
    let errormsg = "🚨 Please enter text or URL..!";
    alertMe(errormsg);
    //

    //
    setTimeout(() => {
      input.classList.remove("error");
    }, 300);
  } else {
    let scsmsg = "✅ QR Code Generated..!";
    alertMe(scsmsg);
    //

    //
    imageBox.classList.add("showQR");
    image.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      input.value;
  }
  input.value = "";
}

function alertMe(msg) {
  var message = document.getElementById("alerts");
  let div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = msg;
  if (msg.includes("enter")) {
    div.classList.add("red");
  }
  if (msg.includes("Generated")) {
    div.classList.add("green");
  }
  message.appendChild(div);
  setTimeout(() => {
    div.remove();
  }, 3000);
}
