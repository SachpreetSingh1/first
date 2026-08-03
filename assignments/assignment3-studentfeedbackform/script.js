const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const courseInput = document.getElementById('course');
const feedbackInput = document.getElementById('feedback');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const courseError = document.getElementById('courseError');
const feedbackError = document.getElementById('feedbackError');

const sessionUserBox = document.getElementById('sessionUserBox');
const storedFeedbackBox = document.getElementById('storedFeedbackBox');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---- Individual field validators ----
function validateName(){
    if(nameInput.value.trim().length < 3){
        nameError.textContent = "Name must contain at least 3 characters.";
        return false;
    }
    nameError.textContent = "";
    return true;
}

function validateEmail(){
    if(!emailRegex.test(emailInput.value.trim())){
        emailError.textContent = "Enter a valid email.";
        return false;
    }
    emailError.textContent = "";
    return true;
}

function validateCourse(){
    if(courseInput.value === ""){
        courseError.textContent = "Please select a course.";
        return false;
    }
    courseError.textContent = "";
    return true;
}

function validateFeedback(){
    if(feedbackInput.value.trim() === ""){
        feedbackError.textContent = "Please enter feedback.";
        return false;
    }
    feedbackError.textContent = "";
    return true;
}

// ---- Clear errors live as user types/selects ----
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
courseInput.addEventListener('change', validateCourse);
feedbackInput.addEventListener('input', validateFeedback);

// ---- Load stored data on page load ----
function loadStoredData(){
    const stored = localStorage.getItem('feedbackData');
    if(stored){
        const data = JSON.parse(stored);
        storedFeedbackBox.textContent =
            "Name: " + data.name + "\n" +
            "Email: " + data.email + "\n" +
            "Course: " + data.course + "\n" +
            "Feedback: " + data.feedback;
    } else {
        storedFeedbackBox.textContent = "No feedback stored.";
    }

    const sessionUser = sessionStorage.getItem('sessionUser');
    sessionUserBox.textContent = "Current Session User: " + (sessionUser ? sessionUser : "None");
}

// ---- Form submit ----
document.getElementById('feedbackForm').addEventListener('submit', function(e){
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isCourseValid = validateCourse();
    const isFeedbackValid = validateFeedback();

    if(!(isNameValid && isEmailValid && isCourseValid && isFeedbackValid)){
        return; // stop if any field is invalid
    }

    const data = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        course: courseInput.value,
        feedback: feedbackInput.value.trim()
    };

    localStorage.setItem('feedbackData', JSON.stringify(data));
    sessionStorage.setItem('sessionUser', data.name);

    loadStoredData();

    // Optionally reset the form after successful submit
    this.reset();
});

// ---- Delete stored data ----
document.getElementById('deleteBtn').addEventListener('click', function(){
    localStorage.removeItem('feedbackData');
    sessionStorage.removeItem('sessionUser');
    loadStoredData();
});

// Run on page load
loadStoredData();