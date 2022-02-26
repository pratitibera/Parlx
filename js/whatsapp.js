function openWhatsappChat(){
	document.getElementById('floating-wpp-popup').classList.add('active');
}
function closeWhatsappChat(){
	document.getElementById('floating-wpp-popup').classList.remove('active');
}
function sendWhatsappMsg(){
	var text = document.getElementById('whatsappmsg').value;
	window.open("https://web.whatsapp.com/send?phone==+917297820374&text=" + text);
}

var textarea = document.getElementById("whatsappmsg");

// Execute a function when the user releases a key on the keyboard
textarea.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    var text = document.getElementById('whatsappmsg').value;
	window.open("https://web.whatsapp.com/send?phone==+917297820374&text=" + text);
  }
});