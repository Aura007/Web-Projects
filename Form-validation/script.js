const form = document.getElementById('form');
const uname = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const pass2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    validInputs();
});

const setError = (ele, msg) => {
    const inp = ele.parentElement;
    const errorDisplay = inp.querySelector('.error');
    errorDisplay.innerText = msg;
    inp.classList.add('error');
    inp.classList.remove('success');
};

const setSuccess = (ele) => {
    const inp = ele.parentElement;
    const errorDisplay = inp.querySelector('.error');
    errorDisplay.innerText = '';
    inp.classList.add('success');
    inp.classList.remove('error');
};

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validInputs = () => {
    const user1 = uname.value.trim();
    const email1 = email.value.trim();
    const pass1 = pass.value.trim();
    const passs2 = pass2.value.trim();

    if (user1 === '') {
        setError(uname, 'Username is required');
    } else {
        setSuccess(uname);
    }

    if (email1 === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(email1)) {
        setError(email, 'Enter a valid email');
    } else {
        setSuccess(email);
    }

    if (pass1 === '') {
        setError(pass, 'Password is required');
    } else if (pass1.length < 6) {
        setError(pass, 'Password must be at least 6 characters');
    } else {
        setSuccess(pass);
    }

    if (passs2 === '') {
        setError(pass2, 'Please confirm your password');
    } else if (passs2 !== pass1) {
        setError(pass2, 'Passwords do not match');
    } else {
        setSuccess(pass2);
    }
};
