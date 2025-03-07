// .feedback-form botton
const form03 = document.querySelector('.feedback-form');
// console.log(form);
const formData03 = {
    email: '',
    message: '',
};
const KEY03 = 'feedback-form-state';

 populateForm03();

form03.addEventListener('input', (e) => {
    // console.log(e.target);
    formData03[e.target.name] = e.target.value;
    localStorage.setItem(KEY03, JSON.stringify(formData03));

});
form03.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(formData03);
    form03.reset();
    localStorage.removeItem(KEY03);
    formData03.email = '';
    formData03.message = '';
   
});

function populateForm03() {
    const savedMessage = JSON.parse(localStorage.getItem(KEY03));
    if (savedMessage) {

        formData03.email = savedMessage.email;
        formData03.message = savedMessage.message;
        form03.elements.email.value = savedMessage.email;
        form03.elements.message.value = savedMessage.message;
    }
}



const date = new Date();
console.log(date);

Math.random();
console.log(Math.random() < .5);

const now = Date.now();
console.log(now);

const day = date.getDate();
console.log(day);