const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");
// console.log(body)


buttons.forEach((button) => {
    console.log(button);
    button.addEventListener("click", (event) => {
        // console.log(event);
        // console.log(event.target);

        if (event.target.id === "grey") {
            body.style.backgroundColor = event.target.id
        } else if (event.target.id === "white") {
            body.style.backgroundColor = event.target.id
        } else if (event.target.id === "blue") {
            body.style.backgroundColor = event.target.id
        } else if (event.target.id === "yellow") {
            body.style.backgroundColor = event.target.id
        } else if (event.target.id === "purple") {
            body.style.backgroundColor = event.target.id
        }

        // // using switch case
        // switch (event.target.id) {
        //     case "grey":
        //     case "white":
        //     case "blue":
        //     case "yellow":
        //     case "purple":
        //         body.style.backgroundColor = event.target.id;
        //         break;
        //     default:
        //         break;
        // }

    });

});