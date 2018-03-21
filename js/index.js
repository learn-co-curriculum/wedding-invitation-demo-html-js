document.addEventListener(
  "DOMContentLoaded",
  function() {
    document.addEventListener("submit", handleSubmit);
    let inputs = document.getElementsByTagName("input");

    for (let x = 0; x < inputs.length; x++) {
      inputs[x].addEventListener("keyup", handleInput);
    }
    let radios = document.getElementsByClassName("radio");
    for (let n = 0; n < radios.length; n++) {
      radios[n].addEventListener("click", handleClick);
    }
  },
  false
);

function handleClick(event) {
  document.getElementById("invitationCard").className = event.target.id;
}

function handleInput(event) {
  document.getElementById(`${event.target.id}Invite`).innerHTML =
    event.target.value;

  if (event.target.id === "groom" || event.target.id === "bride") {
    let b = document.getElementById("bride").value[0]
      ? document.getElementById("bride").value[0]
      : " ";
    let g = document.getElementById("groom").value[0]
      ? document.getElementById("groom").value[0]
      : " ";
    document.getElementById(`initialsInvite`).innerHTML = b + " & " + g;
  }
}
function handleSubmit(event) {
  event.preventDefault();
}
