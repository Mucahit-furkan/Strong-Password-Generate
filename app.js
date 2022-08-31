function generate() {
    const chars = "0123456789qwertyuıopğüasdfghjklşizxcvbnmöç!_?"
    let  passwordLenght = 20 
    let password = ""

    for (let i = 0; i < passwordLenght; i++ ) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("input1").value = password;
}





function copy() {
    var copyText = document.getElementById("input1");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("copied:" + copyText.value);
}