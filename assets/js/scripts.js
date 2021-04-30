function changeText() {
    document.getElementById("result").value = "Mimimi, " +
        document.getElementById("mimimiText").value
            .replace(/c[aou]/gi, 'qui')
            .replace(/gua/gi, 'güi')
            .replace(/gu/gi, 'gui')
            .replace(/gii/gi, 'gui')
            .replace(/gi/gi, 'gui')
            .replace(/qi/gi, 'qui')
            .replace(/[aeou]/gi, 'i')
            .replace(/[áéíóú]/gi, 'í')
            .replace(/qii/gi, 'qui')
            .replace(/gii/gi, 'gui')
            .replace(/zi/gi, 'ci')
            .replace(/zi/gi, 'ci')
            .replace(/gue/gi, 'güi') + ", mimimi...";
}

function copyElementText(id) {
    var text = document.getElementById(id).value;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}
