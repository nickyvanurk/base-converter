let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

let input1Select = document.getElementById('input1-select');
let input2Select = document.getElementById('input2-select');

function convertBase(input, baseFrom, baseTo) {
  if (typeof(input) == "number") {
    return parseInt(String(input)).toString(baseTo);
  } else {
    return parseInt(input.toString(), baseFrom).toString(baseTo);
  }
}

function updateInputs(input1, input2, select1, select2) {
  if (input1.value) {
    const value = !Number.isNaN(Number(input1.value)) ? Number(input1.value) : input1.value;
    const result = convertBase(value, select1.value, select2.value);
    input2.value = result != 'NaN' ? result : 'Invalid conversion';
  } else {
    input2.value = '';
  }
}

input1.addEventListener('input', () => {
  updateInputs(input1, input2, input1Select, input2Select);
});
input2.addEventListener('input', () => {
  updateInputs(input2, input1, input2Select, input1Select);
});