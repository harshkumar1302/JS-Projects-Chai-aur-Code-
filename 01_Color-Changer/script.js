const buttons = document.querySelectorAll(".button");
// console.log(buttons);

const body = document.querySelector("body");
// console.log(body);


buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener("click", function (e) {
        // console.log(e);
        // console.log(e.target);


        // // // using if else
        // // if (e.target.id === "grey") {
        // //     body.style.backgroundColor = e.target.id;
        // // } else if (e.target.id === "white") {
        // //     body.style.backgroundColor = e.target.id;
        // // } else if (e.target.id === "blue") {
        // //     body.style.backgroundColor = e.target.id;
        // // } else if (e.target.id === "yellow") {
        // //     body.style.backgroundColor = e.target.id;
        // // } else if (e.target.id === "purple") {
        // //     body.style.backgroundColor = e.target.id;
        // // }

        // // // using switch case;
        switch (e.target.id) {
            case "grey":
            case "white":
            case "blue":
            case "yellow":
            case "purple":
                body.style.backgroundColor = e.target.id;
                break;
            default:
                break;
        }

    });
});
