let input = document.querySelector('#input');
let genbtn = document.querySelector('#genbtn');
let imgqr = document.querySelector('#qr');

function genqr() {
    if (input.value.trim() === '') {
        alert("Input is invalid");
        return;
    }
    imgqr.setAttribute(
        'src',
        'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + (input.value)
    );
}

genbtn.addEventListener('click', genqr);
