$(document).ready(function () {
    // Name validation
    $("#name").on("keyup", function () {
        let uname = $(this).val();
        let regexName = /^[\w\s]{3,20}$/i;
        if (!regexName.test(uname)) {
            $(this).css("border", "2px solid red");
            $(this).next("small").html("Name must be 3-20 characters").css({
                "color": "red",
                "font-weight": "bold",
                "margin": "2px",
            });
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("small").html("");
        }
    });

    // Email validation
    $("#email").on("keyup", function () {
        let uemail = $(this).val();
        let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regexEmail.test(uemail)) {
            $(this).css("border", "2px solid red");
            $(this).next("small").html("Invalid email format").css({
                "color": "red",
                "font-weight": "bold",
                "margin": "2px",
            });
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("small").html("");
        }
    });

    // Password validation
    $("#password").on("keyup", function () {
        let uPassword = $(this).val();
        let regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,12}$/;
        if (!regexPassword.test(uPassword)) {
            $(this).css("border", "2px solid red");
            $(this).next("small").html("Password must be 8-12 characters long, with uppercase, lowercase, number, and special character").css({
                "color": "red",
                "font-weight": "bold",
                "margin": "2px",
            });
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("small").html("");
        }
    });

    // Confirm password validation
    $("#confirmPassword").on("keyup", function () {
        let cpassword = $(this).val();
        let upass = $("#password").val();
        if (cpassword !== upass) {
            $(this).css("border", "2px solid red");
            $(this).next("small").html("Passwords do not match").css({
                "color": "red",
                "font-weight": "bold",
                "margin": "2px",
            });
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("small").html("");
        }
    });

    // Function to check if an input is valid
    function isInputValid(id, regex) {
        let value = $(id).val().trim();
        return regex.test(value);
    }

    // Function to check if all validations are correct
    function isFormValid() {
        
        let validName = isInputValid("#name", /^[\w\s]{3,20}$/i);
        let validEmail = isInputValid("#email", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        let validPassword = isInputValid("#password", /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,12}$/);
        let validConfirmPassword = $("#password").val() === $("#confirmPassword").val();

        
        if (!validName) $("#name").css("border", "2px solid red");
        if (!validEmail) $("#email").css("border", "2px solid red");
        if (!validPassword) $("#password").css("border", "2px solid red");
        if (!validConfirmPassword) $("#confirmPassword").css("border", "2px solid red");

        
        return validName && validEmail && validPassword && validConfirmPassword;
    }


    $("#registeration").click(function (e) {
        e.preventDefault();

        if (isFormValid()) {
            let userData = {
                name: $("#name").val(),
                email: $("#email").val(),
                password: $("#password").val(),
            };

    
            localStorage.setItem("userData", JSON.stringify(userData));
            alert("Account registered successfully. Data saved in local storage.");
            window.location.replace("login.html");
        } else {
            alert("Please fill in all fields correctly.");
        }
    });
});



  