let cars = [];

let tableBody = document.querySelector('.car-table tbody');
let findTable = document.querySelector('#find-table tbody');
let findInput = document.querySelector('#find-input');
let btn = document.querySelector('.btn_add');
let btnClear = document.querySelector('.btn_clear');
let btnFind = document.querySelector('.btn__find');
function validation(car){
    if(car.model === '' || car.color=== '' || car.price === '' ||car.price < 0) return false;
    return true;
}
function addCarToTable(car) {
    if(validation(car) === false){return;}
    tableBody.innerHTML += 
    `<tr>
        <td>${car.model}</td>
        <td>${car.price}$</td>
        <td>${car.color}</td>
        <td>${car.clearance}</td>
    </tr>`;
}
function readCar(){
    let model = document.querySelector('#model-input').value;
    let price = document.querySelector('#price-input').value;
    let color = document.querySelector('#color-input').value;
    let select = document.querySelector('#select-clearence');
    let clearance = select.options[select.selectedIndex].text;
    return {model,price,color,clearance};
}
let bamblbi = {
    model: "bamblbi",
    price: 200000,
    color: "Black-Yellow",
    clearance: "maybe"
};
let optimus = {
    model: "Optimus Prime",
    price: 7777777,
    color: "Red-Blue",
    clearance: "yes"
};
addCarToTable(bamblbi);
addCarToTable(optimus);
cars.push(bamblbi,optimus);
btn.onclick = (e) =>{
    e.preventDefault();
    let newCar = readCar();
    cars.push(newCar);
    addCarToTable(newCar);
}
btnClear.onclick = (e) =>{
    e.preventDefault();
    tableBody.innerHTML = '';
    cars.splice(0);
}
btnFind.onclick = (e)=>{
    e.preventDefault();
    findTable.innerHTML = '';
    
    cars.forEach(car => {
        if(car.model.toLowerCase() === findInput.value.toLowerCase()){
            findTable.innerHTML += 
            `<tr>
                <td>${car.model}</td>
                <td>${car.price}$</td>
                <td>${car.color}</td>
                <td>${car.clearance}</td>
            </tr>`;
        }
    });
    findInput.value = '';
}