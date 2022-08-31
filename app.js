const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result
}

const createPassword = () => {
    const minCharCode = 33
    const maxCharCode = 122
    var password = ""
    var length = document.getElementById("range").value
    for (let i = 1; i <= length; i++) {
        var randomCharCode = getRandomInt(minCharCode, maxCharCode);
        var randomChar = String.fromCharCode(randomCharCode)
        password = password.concat(randomChar)
    }
    document.getElementById("password-output").value = password
} 


function copy() {
    var copyText = document.getElementById("input1");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("copied:" + copyText.value);
}