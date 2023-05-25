const arr = [
    'а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м',
    'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я'
  ];
  const btnWrapper = document.querySelector('.buttons');
for(let i = 0;i < arr.length;i++){
    let btn = document.createElement('button');
    btn.classList.add('btn-key');
    btn.innerText = arr[i];
    btnWrapper.append(btn);
}
const btns = document.querySelectorAll('.buttons .btn-key');
const textareaKeyboard = document.querySelector('.keyboard-textarea');
const clearSymbol = document.querySelector('#clearSymbol');
const clearAll = document.querySelector('#clearAll');

let textareaKeyboardValue = '';
for(let i = 0;i<btns.length;i++){
    btns[i].addEventListener('click',(e)=>{
        e.preventDefault();

        textareaKeyboardValue += e.target.innerText;
        textareaKeyboard.value = textareaKeyboardValue;
    });
}
clearSymbol.onclick = (e) =>{
    e.preventDefault();

    textareaKeyboardValue = textareaKeyboardValue.slice(0,textareaKeyboardValue.length-1);
    textareaKeyboard.value = textareaKeyboardValue;
}
clearAll.onclick = (e)=>{
    e.preventDefault();
    textareaKeyboardValue = '';
    textareaKeyboard.value = '';
}
textareaKeyboard.onchange = ()=>{
    textareaKeyboardValue = textareaKeyboard.value;
}
window.textareaKeyboardValue = textareaKeyboardValue;