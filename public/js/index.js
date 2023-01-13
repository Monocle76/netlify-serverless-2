var fetchBtn = document.getElementById("fetch-btn")
var target = document.getElementById("target")

fetchBtn.addEventListener("click", async () => {
    var response = await fetch("/.netlify/functions/hello-world")
    var data = await response.json()

    target.innerText = data.message
})
