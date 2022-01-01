// https://fullstack.edu.vn/learning/javascript-co-ban?id=2285

function Validator(options){
    function validate(inputElement, rule) {
        var errorMessage = rule.check(inputElement.value)
        var errorElement = inputElement.closest('.form-group').querySelector(options.messageSelector)
        
        if(errorMessage) {
            errorElement.innerHTML = errorMessage
            inputElement.closest('.form-group').classList.add('error')
        } else {
            errorElement.innerHTML = ''
            inputElement.closest('.form-group').classList.remove('error')
        }
    }

    var formElement = document.querySelector(options.form)
    
    console.log(options.rules)
    if(formElement){
        options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector)
            var errorElement = inputElement.closest('.form-group').querySelector(options.messageSelector)

            if(inputElement) {
                inputElement.onblur = function() {
                    validate(inputElement, rule)
                }

                inputElement.oninput = function() {
                    errorElement.innerHTML = ''
                    inputElement.closest('.form-group').classList.remove('error')
                }
            }
        })
    }
}

Validator.isRequired = function(selector, message) {
    return {
        selector,
        check: function(value) {
            return value.trim() ? undefined : message || 'Please fulfil this field'
        }
    }
}

Validator.isEmail = function(selector, message) {
    return {
        selector,
        check: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : message || 'Please fulfil a valid email address'
        }
    }
}