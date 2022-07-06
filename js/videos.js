const TempBtn = document.getElementById('temp-btn');
const v2022 = document.getElementById('year-2022');
let clicked = 0;

v2022.addEventListener("click", () => {
  alert("ERROR: No videos (yet?) from 2022!")
})

TempBtn.addEventListener("click", () => {
  if (clicked === 0) {
    let text = document.createElement("p");
    let textNode = document.createTextNode("Dis is a Secret!");
    text.appendChild(textNode);
    document.body.appendChild(text);
    clicked++;
    TempBtn.textContent = "Don't Click Me";
  } else {
    alert("No u, Say goodbye to this page!")
    document.body.remove();
  }
})
