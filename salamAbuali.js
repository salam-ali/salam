document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let errors = false;

    // Visitor Info Validation
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(firstName)) {
        document.getElementById('firstNameError').textContent = 'Please enter a valid first name.';
        errors = true;
    } else {
        document.getElementById('firstNameError').textContent = '';
    }

    if (!nameRegex.test(lastName)) {
        document.getElementById('lastNameError').textContent = 'Please enter a valid last name.';
        errors = true;
    } else {
        document.getElementById('lastNameError').textContent = '';
    }

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        errors = true;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Quiz Questions Validation
    // Question 1: Radio Button - Correct answer is "The World Food Programme"
    const question1 = document.querySelector('input[name="question1"]:checked');
    if (!question1 || question1.value !== "The World Food Programme") {
        document.getElementById('question1Error').textContent = 'Incorrect answer. Try again!';
        errors = true;
    } else {
        document.getElementById('question1Error').textContent = '';
    }

    // Question 2: Checkboxes - Correct answers are "Marie Curie" and "Albert Einstein"
    const question2 = document.querySelectorAll('input[name="question2"]:checked');
    const selectedAnswers = Array.from(question2).map(el => el.value);
    const correctAnswers = ["Marie Curie", "Albert Einstein"];
    if (selectedAnswers.length === 0 || !correctAnswers.every(ans => selectedAnswers.includes(ans))) {
        document.getElementById('question2Error').textContent = 'Incorrect choices. Try again!';
        errors = true;
    } else {
        document.getElementById('question2Error').textContent = '';
    }

    // Question 3: Text Entry - Correct answer is "Marie Curie"
    const question3 = document.getElementById('question3').value.trim();
    if (question3.toLowerCase() !== "marie curie") {
        document.getElementById('question3Error').textContent = 'Incorrect answer. Try again!';
        errors = true;
    } else {
        document.getElementById('question3Error').textContent = '';
    }

    // Display success message if no errors
    if (!errors) {
        document.getElementById('successMessage').textContent = 'Submission successful! Thank you.';
    } else {
        document.getElementById('successMessage').textContent = '';
    }
});
