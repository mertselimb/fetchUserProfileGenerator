var url = "https://randomuser.me/api/";
var btn = document.querySelector("#btn");
var username = document.querySelector("#username");
var avatar = document.querySelector("#avatar");
var fullname = document.querySelector("#fullname");
var email = document.querySelector("#email");
var city = document.querySelector("#city");

btn.addEventListener("click", function () {
    fetch(url)
        .then(handleErrors)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            avatar.src = data.results["0"].picture.medium;
            fullname.textContent = capitalizeFirstLetter(data.results["0"].name.first) + " " + capitalizeFirstLetter(data.results["0"].name.last);
            username.textContent = data.results["0"].login.username;
            email.textContent = data.results["0"].email;
            city.textContent = data.results["0"].location.city;
        })
        .catch(function (error) {
            console.log(error);
        });
});

function handleErrors(request) {
    if (!request.ok) {
        throw Error(request.status);
    }
    return request;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
