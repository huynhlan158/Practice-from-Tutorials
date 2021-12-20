function Validator(form) {
    var ValidatorRules = {
        required (value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';
        },
        min (min) {
            return value => {
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`
            }
        }
    }

    var formRules = {};

    var formElement = document.querySelector(form);

    var isFormValid = true;

    var formValue = {};

    if (formElement) {
        
        function handleValidate(event) {
            var errorMessage;
            formRules[event.target.name].some(rule => {
                errorMessage = rule(event.target.value);
                return errorMessage;
            })

            if (errorMessage) {
                var formGroupElement = event.target.closest('.form-group')
                var errorElement = formGroupElement.querySelector('.form-message')
                errorElement.innerHTML = errorMessage
                formGroupElement.classList.add('invalid')
                isFormValid = false;
            }
        }

        function handleClearError(event) {
            var formGroupElement = event.target.closest('.form-group')
            var errorElement = formGroupElement.querySelector('.form-message')
            if (formGroupElement.classList.contains('invalid')) {
                formGroupElement.classList.remove('invalid')
                errorElement.innerHTML = ''
                isFormValid = true;
            }
        }

        var inputElements = formElement.querySelectorAll('[name][rules]')

        if(inputElements) {
            Array.from(inputElements).forEach((input) => {
                var rules = input.getAttribute('rules').split('|');

                rules.forEach(rule => {

                    var ruleFunc;
                    if (rule.includes(':')) {
                        var ruleInfo = rule.split(':');
                        rule = ruleInfo[0];
                        ruleFunc = ValidatorRules[rule](ruleInfo[1])
                    } else {
                        ruleFunc = ValidatorRules[rule];
                    }

                    if(Array.isArray(formRules[input.name])) {
                        formRules[input.name].push(ruleFunc)
                    } else {
                        formRules[input.name] = [ruleFunc];
                    }
                })

                input.onblur = handleValidate;
                input.oninput = handleClearError;
            })
        }
    }

    formElement.onsubmit = function (event) {
        event.preventDefault();
        var inputElements = formElement.querySelectorAll('[name][rules]');
        Array.from(inputElements).forEach(input => {
            handleValidate({target: input})
            formValue[input.name] = input.value
        })
        if (isFormValid) {
            console.log(formValue)
        }
    }
}