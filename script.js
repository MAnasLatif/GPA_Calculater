let form = document.getElementById("Form");
let alertBox = document.getElementById("alert_box");

form.addEventListener('submit', e => {
    e.preventDefault()
    let gpa = 0;
    let input = form.getElementsByClassName("form-control");
    for (let i = 0; i < input.length; i++) {
        gpa += book_gpa(input[i].valueAsNumber);
    }
    gpa /= input.length;
    display(gpa);
});

function display(gpa) {
    alertBox.innerHTML = ``;
    if (gpa <= 1.8)
        alertBox.innerHTML = `<div class="alert alert-danger" role="alert">Your GPA is ` + gpa + ` </div>`;
    else if (gpa <= 2.2)
        alertBox.innerHTML = `<div class="alert alert-warning" role="alert">Your GPA is ` + gpa + ` </div>`;
    else if (gpa <= 3.0)
        alertBox.innerHTML = `<div class="alert alert-info" role="alert">Your GPA is ` + gpa + ` </div>`;
    else
        alertBox.innerHTML = `<div class="alert alert-success" role="alert">Your GPA is ` + gpa + ` </div>`;
}

function book_gpa(p) {
    if (p >= 86)
        return 4.0;
    else if (p >= 82)
        return 3.67;
    else if (p >= 78)
        return 3.33;
    else if (p >= 74)
        return 3.0;
    else if (p >= 70)
        return 2.67;
    else if (p >= 66)
        return 2.33;
    else if (p >= 62)
        return 2.00;
    else if (p >= 58)
        return 1.67;
    else if (p >= 54)
        return 1.33;
    else if (p >= 50)
        return 1.0;
    else
        return 0.0;
}