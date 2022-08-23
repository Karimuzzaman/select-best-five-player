function textField(element) {

    const textFieldElement = document.getElementById(element);
    const textFieldEString = textFieldElement.innerText;
    const textFieldValue = parseInt(textFieldEString);
    return textFieldValue;

}

function inputField(element) {

    const inputField = document.getElementById(element);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    return inputFieldValue;

}