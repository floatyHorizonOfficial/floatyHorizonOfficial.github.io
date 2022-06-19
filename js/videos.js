const TempBtn = document.getElementById('temp-btn');
let clicked = 0;

TempBtn.addEventListener("click", () => {
  if (clicked === 0) {
    let text = document.createElement("p");
    let textNode = document.createTextNode("Dis is a Secret!")
    text.appendChild(textNode);
    document.body.appendChild(text);
    clicked++;
    TempBtn.textContent = "Don't Click Me";
  } else {
    alert("No u")
    document.body.remove();
  }
})
