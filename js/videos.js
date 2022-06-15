const TempBtn = document.getElementById('temp-btn');
let clicked = 0;

TempBtn.addEventListener("click", () => {
  if (clicked === 0) {
    let text = document.createElement("p");
    let textNode = document.createTextNode("Never Gonna Give You Up! - You've been trolled! hehe");
    text.appendChild(textNode);
    document.body.appendChild(text);
    clicked++;
    TempBtn.textContent = "Don't Click Me";
  } else {
    alert("No u")
    document.body.remove();
  }
})