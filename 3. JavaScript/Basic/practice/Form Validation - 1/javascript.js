const $ = document.querySelector.bind(document); 
const $$ = document.querySelectorAll.bind(document); 


//isRequired
function isRequired (inputNode, message) {
    switch (inputNode.type) {
        case 'checkbox':
        case 'radio':
            
            break;
        default:
            if (!inputNode.value) {
                inputNode.closest('.form-group').classList.add('invalid');
                inputNode.closest('.form-message').innerHTML = message || 'Vui lòng nhập trường này';
            } else {
                inputNode.closest('.form-group').classList.remove('invalid');
                inputNode.closest('.form-group').querySelector('.form-message').innerHTML = '';
            }
    }
}

const fullName = $('#fullname');
fullName.onblur = function () {
    isRequired (fullName, 'Vui lòng nhập tên của bạn');
}
const email = $('#email');
email.onblur = function () {
    isRequired (email, 'Vui lòng nhập email của bạn');
    isEmail(email.value);
    console.log (email.value)
}
const password = $('#password');
password.onblur = function () {
    isRequired (password, 'Vui lòng nhập mật khẩu của bạn');
}
const password_confirmation = $('#password_confirmation');
password_confirmation.onblur = function () {
    isRequired (password_confirmation, 'Vui lòng nhập lại mật khẩu của bạn');
}


//isEmail
function isEmail (value) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(value) ? undefined : 'Trường này phải là email';
}
