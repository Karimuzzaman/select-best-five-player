function textField(element) {

    const textFieldElement = document.getElementById(element);
    const textFieldEString = textFieldElement.innerText;
    if (textFieldEString === '') {
        alert("please select at least one player");
        return textField();
    }
    else {
        const textFieldValue = parseInt(textFieldEString);
        return textFieldValue;

    }


}

function inputField(element) {

    const inputField = document.getElementById(element);
    const inputFieldValueString = inputField.value;

    if (isNaN(inputFieldValueString) || inputFieldValueString === '') {
        alert("please enter number");
        return inputField();
    }
    else {
        const inputFieldValue = parseInt(inputFieldValueString);
        return inputFieldValue;
    }




}