
const KEY = "feedback-form-state"
// feedback-form

const form = document.querySelector('.feedback-form');
// console.log(form);
const formText = document.querySelector('.feedback-form textarea');

const formEmail = document.querySelector('.feedback-form input[type="email"]');
// console.log(formEmail);

const formData = {
    email: '',
    message: '',
};

onFormSubmit()

formText.addEventListener('input', (e) => {
    formData.message = e.target.value;
    localStorage.setItem(KEY, JSON.stringify(formData));
    console.log(formData);
});

formEmail.addEventListener('input', (e) => {
    formData.email = e.target.value;
    localStorage.setItem(KEY, JSON.stringify(formData));
    console.log(formData);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(formData.email);
    console.log(formData.message);
    if (formData.email && formData.message) {
        console.log(formData);
    } 
    else {
        alert('Fill please all fields');
    }
    localStorage.removeItem(KEY);

});


// localStorage.getItem("feedback-form-state");

function onFormSubmit() {
    if (localStorage.getItem(KEY)) {
        const savedData = JSON.parse(localStorage.getItem(KEY));
        // console.log(savedData);
        formText.value = savedData.message;
        formEmail.value = savedData.email;
    }
}
console.log(formData);
console.log(formData);


// console.log(!!(formData.email && formData.message))