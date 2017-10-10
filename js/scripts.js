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

input1.addEventListener('input', function () {
  if (input1.value) {
    const result = convertBase(input1.value, input1Select.value, input2Select.value);
    input2.value = !isNaN(result) ? result : 'Invalid conversion';
  } else {
    input2.value = '';
  }
});

input2.addEventListener('input', function () {
  if (input2.value) {
    const result = convertBase(input2.value, input2Select.value, input1Select.value);
    input1.value = !isNaN(result) ? result : 'Invalid conversion';
  } else {
    input1.value = '';
  }
});