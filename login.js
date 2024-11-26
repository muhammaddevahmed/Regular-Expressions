  // Email validation
  $("#loginEmail").on("keyup", function () {
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
$("#loginPassword").on("keyup", function () {
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



        $(document).ready(function () {
            $("#loginBtn").click(function () {
                let email = $("#loginEmail").val();
                let password = $("#loginPassword").val();

                let storedUserData = JSON.parse(localStorage.getItem("userData"));

                if (storedUserData) {
                    if (email === storedUserData.email && password === storedUserData.password) {
                        localStorage.setItem("isLoggedIn", "true"); 
                        alert("Login successful!");
                        window.location.href = "admin.html";
                    } else {
                        alert("Invalid email or password!");
                    }
                } else {
                    alert("No user found. Please register first.");
                }
            });
        });
   


    

