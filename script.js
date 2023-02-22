const green = "rgb(47, 255, 78)";
const red = "red";

// First name
const fname = document.querySelector("#fname");
const fbox = document.querySelector("#fbox");

// Last name
const lname = document.querySelector("#lname");
const lbox = document.querySelector("#lbox");

// Passwords
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const p1box = document.querySelector("#p1");
const p2box = document.querySelector("#p2");

fname.addEventListener("keyup", function() {
    if (fname.value.length == 0)
    {
        fbox.style.color = "white";
    } else if (fname.value.length >= 3)
    {
        fbox.style.color = green;
    } else {
        fbox.style.color = red;
    }
});

lname.addEventListener("keyup", function() {
    if (lname.value.length == 0)
    {
        lbox.style.color = "white";
    } else if (lname.value.length >= 3)
    {
        lbox.style.color = green;
    } else {
        lbox.style.color = red;
    }
});

password1.addEventListener("keyup", function() {
    if (password1.value == password2.value) {
        p1box.style.color = green;
        p2box.style.color = green;
    } else {
        p1box.style.color = red
        p2box.style.color = red
    }
});

password2.addEventListener("keyup", function() {
    if (password1.value == password2.value) {
        p1box.style.color = green;
        p2box.style.color = green;
    } else {
        p1box.style.color = red;
        p2box.style.color = red;
    }
});

