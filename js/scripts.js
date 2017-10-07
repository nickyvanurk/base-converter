var convertBase = function (input, baseFrom, baseTo) {
    if (typeof(input) == "number") {
        return parseInt(String(input)).toString(baseTo);
    } else {
        return parseInt(input.toString(), baseFrom).toString(baseTo);
    };
}