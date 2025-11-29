document.getElementById("jobForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const cv = document.getElementById("cv");
    const coverletter = document.getElementById("coverletter");
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");

    // Clear previous messages
    errorMessage.textContent = "";
    successMessage.textContent = "";

    // Basic validation
    if (fullname.value.length < 3) {
        errorMessage.textContent = "Full Name must be at least 3 characters long.";
        return;
    }
    if (!email.value.includes("@")) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }
    if (phone.value.length < 10) {
        errorMessage.textContent = "Phone Number must be at least 10 digits long.";
        return;
    }
    if (cv.files.length === 0) {
        errorMessage.textContent = "Please upload your CV.";
        return;
    }
    if (coverletter.value.length < 20) {
        errorMessage.textContent = "Cover Letter must be at least 20 characters long.";
        return;
    }
    // If all validations pass
    successMessage.textContent = "Your application has been submitted successfully!";

    //Reset the form
    document.getElementById("jobForm").reset();

});