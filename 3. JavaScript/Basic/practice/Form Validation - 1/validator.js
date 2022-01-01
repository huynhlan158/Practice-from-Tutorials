function Validator (options) {
    // list of rules to be executed
    var ruleList = {};

    // validate function for an input element
    function validate (inputElement, rule) {
        var errorElement = inputElement.closest(options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;
        var rules = ruleList[rule.selector];
        for (i = 0; i< rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](formElement.querySelector(rule.selector + ':checked'));
                    break;
                default: 
                    errorMessage = rules[i](inputElement.value)
            }
            if (errorMessage) break;
        }
            
        if (errorMessage) {
            errorElement.innerHTML = errorMessage;
            inputElement.closest(options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerHTML = '';
            inputElement.closest(options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    // get the right form
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // when submiting the form
        formElement.onsubmit = function (e) {
            e.preventDefault();
            var isFormValid = true;
            
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            })

            if (isFormValid) {
                // with javascript
                if (typeof options.onSubmit === 'function') {
                    var isValidRadio = false;
                    var isValidCheckbox = false;
                    var checkboxValues = [];
                    var availableInputs = formElement.querySelectorAll('[name]');
                    var availableValues = Array.from(availableInputs).reduce(function (result, input) {
                        switch (input.type) {
                            case 'radio':
                                if (input.matches(':checked')){
                                    isValidRadio = true;
                                    result[input.name] = input.value;
                                }
                                if (!isValidRadio) {
                                    result[input.name] = '';
                                }
                                break;
                            case 'checkbox':
                                if (input.matches(':checked')) {
                                    checkboxValues.push(input.value);
                                    result[input.name] = checkboxValues;
                                    isValidCheckbox = true;
                                }
                                if (!isValidCheckbox) {
                                    result[input.name] = '';
                                }
                                break;
                            default:
                                result[input.name] = input.value;
                        }
                        return result;
                    }, {})

                    options.onSubmit(availableValues);
                }
                // default action
                else {
                    formElement.submit();
                }
            }
        }

        // execute on each rule
        options.rules.forEach(function (rule) {
            // get input elements
            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
                // when moving the cursor outsit an input element 
                inputElement.onblur = function () {
                    validate (inputElement, rule)
                }

                // when inputing value to an input element
                inputElement.oninput = function () {
                    var errorElement = inputElement.closest(options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerHTML = '';
                    inputElement.closest(options.formGroupSelector).classList.remove('invalid');
                }
            })

            if (Array.isArray(ruleList[rule.selector])) {
                ruleList[rule.selector].push(rule.check);
            } else {
                ruleList[rule.selector] = [rule.check];
            }
        })

    }

}


Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        check: function (value) {
            return value ? undefined : message || 'Vui lòng nhập trường này';
        }
    }
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        check: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';
        }
    }
}

Validator.minLength = function (selector, type, min) {
    return {
        selector: selector,
        check: function (value) {
            return value.length >= min ? undefined : `${type} phải có ít nhất ${min} ký tự`
        }
    }
}

Validator.isConfirmed = function (selector, type, getConfirmedValue) {
    return {
        selector: selector,
        check: function (value) {
            return value === getConfirmedValue() ? undefined : `${type} nhập lại không đúng`
        }
    }
}