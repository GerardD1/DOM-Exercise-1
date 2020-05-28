function main() {
    document.getElementById("grow-me").classList.add("big");
    document.getElementById("shrink-me").classList.remove("big");
    let lis = document.querySelectorAll(li);
    for (let listItem of lis) {
        console.log(listItem.innerText);
    }

    let changeLink = document.querySelector(".link");
    changeLink.setAttribute("href", "https://www.example.com");
    changeLink.innerText = "somewhere";

    let changeCss1 = document.getElementById("hide-me");
    changeCss1.style.display = "none";

    let changeCss2 = document.getElementById("show-me");
    changeCss2.style.display = "block";

    let setMessage = document.getElementById("name").value;
    console.log(setMessage);
    document.querySelector("h1").innerText = 'Hello ${setMessage}';
}