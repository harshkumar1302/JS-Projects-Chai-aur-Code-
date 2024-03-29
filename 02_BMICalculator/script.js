const form = document.querySelector("form");
// console.log(form);
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    // console.log(height);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height in number = ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight in number = ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // results.innerHTML = `<span>${bmi}</span>`;

        if (bmi < 18.6) {
            results.innerHTML = `<span>${bmi}</span> = You are under weight.`
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span>${bmi}</span> = you fall in Normal Range.`
        } else if (bmi > 24.9) {
            results.innerHTML = `<span>${bmi}</span> = you are OverWeight.`
        }
    }
});