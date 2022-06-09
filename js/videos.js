const TempBtn = document.getElementById('temp-btn');
let clicked = 0;

TempBtn.addEventListener("click", () => {
  if (clicked === 0) {
    let text = document.createElement("p");
    let textNode = document.createTextNode("Never Gonna Give You Up!");
    text.appendChild(textNode);
    document.body.appendChild(text);
    clicked++;
  } else {
    alert("No u")
  }
})