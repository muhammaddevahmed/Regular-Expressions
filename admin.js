$(document).ready(function () {
    
    let storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (storedUserData) {
        $("#userDetails").html(`
            <h4>Name: ${storedUserData.name}</h4>
            <h4>Email: ${storedUserData.email}</h4>
            <h4>Password: ${storedUserData.password}</h4>
        `);
    } else {
        alert("No user data found. Please login again.");
        
        window.location.href = "login.html";  
    }

    // Delete Button
    $("#deleteBtn").click(function () {
        localStorage.removeItem("userData");
        alert("Account deleted successfully.");
        window.location.href = "index.html";  
    });

    // Logout Button
    $("#logoutBtn").click(function () {
        window.location.href = "login.html";  
    });
});

$(document).ready(function () {
    // Check if user data exists in localStorage
    let storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (!storedUserData) {
    
        alert("You need to log in first.");
        window.location.href = "login.html"; 
    } else {
    
        $("#userDetails").html(`
            <h4>Name: ${storedUserData.name}</h4>
            <h4>Email: ${storedUserData.email}</h4>
            <h4>Password: ${storedUserData.password}</h4>
        `);
    }
});

$(document).ready(function () {
    // Check if user is logged in
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (!isLoggedIn || isLoggedIn === "false" || !storedUserData) {
        alert("You need to log in first.");
        window.location.href = "login.html";
    } else {
        
        $("#userDetails").html(`
            <h4>Name: ${storedUserData.name}</h4>
            <h4>Email: ${storedUserData.email}</h4>
        `);
    }

    // Logout Button
    $("#logoutBtn").click(function () {
        localStorage.setItem("isLoggedIn", "false"); 
        alert("You have logged out successfully.");
        window.location.href = "login.html"; 
    });
});


