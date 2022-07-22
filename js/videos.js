const v2022 = document.getElementById('year-2022');

const signup = document.getElementById('SignUp');
const upload = document.getElementById('Upload');

let clicked = 0;

v2022.addEventListener("click", () => {
  alert("ERROR: No videos (yet?) from 2022!")
})

signup.addEventListener("click", () => {
  window.location.replace("https://forms.gle/sj7pCS7meUAfEEzk9")
})
upload.addEventListener("click", () => {
  window.location.replace("https://forms.gle/WFjcP2p217off5WNA")
})
