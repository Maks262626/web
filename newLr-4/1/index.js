//Перевірити на коректність введений користувачем e-mail. 
//Е-mail повинен містити лише один символ @, не містити крапок, 
//ком та інших розділових знаків до цього символа та хоча б одну крапку після нього.

let login = document.getElementById('login');
let btn = document.getElementById('btn');
let symbols = String.raw`/\-=+,;^&*()?><#$%`;




function validation(v){
//    let v = login.value;
    let atCount = (v.match(/@/g)||[]).length;
    if(atCount != 1){
        return false;
    }
    arr = v.split("@");
    for (let i = 0; i < symbols.length; i++) {
        if(arr[0].includes(symbols[i])){
            return false;
        }
        
    }
    if(!arr[1].includes('.')){
        return false;
    }
    return true;
}
btn.addEventListener('click', ()=>{
    
    validation(login.value) ? alert("Valid") : alert("not Valid");
});


