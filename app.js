const userInput = document.querySelector("#user-input");
const btnShorten = document.querySelector("#btn-shorten");
const userOutput = document.querySelector("#user-output");

const url = "https://url-shortener-service.p.rapidapi.com/shorten";

function btnClickHandler() {
  var userText = userInput.value;
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
      "x-rapidapi-key": "bb61d06463msh89dd1a63f6ef387p1bb3edjsndb98b1222485",
    },
    body: {
      url: userText,
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

btnShorten.addEventListener("click", btnClickHandler);
