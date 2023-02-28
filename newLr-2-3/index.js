function getRandom(min,max){
    // 0 <= f(x) <= 1 | * (max - min) 
    // 0 <= (max-min)f(x) <= max-min | +min
    // min <= (max-min)f(x)+min <= max
    return Math.round(Math.random() * (max-min) + min);
}
let bunnersData = [
    {
        name: 'google',
        url: 'https://file.liga.net/images/general/2020/09/08/20200908171549-5386.jpg?v=1599578314',
        alt: 'banner1',
        href: 'http://www.google.com'
    },
    {
        name: 'youtube',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png',
        alt: 'banner2',
        href: 'http://www.youtube.com',
    },
    {
        name: 'wikipedia',
        url: 'https://hi-news.ru/wp-content/uploads/2014/01/Wikipedia.jpg',
        alt: 'banner3',
        href: 'http://www.wikipedia.com'
    }
];
let btn = document.getElementById('generate_bunners'); 
let bunnersElement = document.getElementById('bunners');
btn.addEventListener('click',()=>{
    
  
    let bunner_link = document.querySelectorAll('.bunner_link');

    bunner_link.forEach(e => {
      e.remove();
    });

    let i = 0;
    let j = 0;

    while(i === j){
        i = getRandom(0,bunnersData.length-1);
        j = getRandom(0,bunnersData.length-1);
    }
    let bunners = [bunnersData[i],bunnersData[j]];
    for(let i = 0;i<bunners.length;i++){
        let a = document.createElement('a');
        let img = document.createElement('img');
        let span = document.createElement('span');

        a.classList.add('bunner_link');
        img.classList.add('img_link');
        span.classList.add('span_link');


        img.alt = bunners[i].alt;
        img.src = bunners[i].url;

     
        a.setAttribute('href', bunners[i].href);
        
        
        a.appendChild(img);
        a.appendChild(span);
        span.appendChild(document.createTextNode(bunners[i].name));
        bunnersElement.append(a);
        body.append(bunnersElement);
    }
});

//-------------
let table = document.getElementById('tablebody');
let items = [
    {name: "Ведмедик Тедді",price: 25.90,count:1},
    {name: "Щур Сірий",price: 16.40,count:2},
    {name: "Лялька Барбі",price: 245.25,count:3}
];
let sum = 0;
let count = 0; 
for(let i = 0;i<items.length;i++){
    let tr = document.createElement('tr');
    table.append(tr);
    if(i == 1){tr.classList.add('blue');}
    sum+= items[i].price * items[i].count;
    count+= items[i].count;
    for(el in items[i]){
        

        let td = document.createElement('td');
        td.appendChild(document.createTextNode(items[i][el]));
        tr.appendChild(td);
    }
    let td = document.createElement('td');
    td.appendChild(document.createTextNode(items[i].price * items[i].count));
    tr.appendChild(td);
}

let tr = document.createElement('tr');
tr.classList.add('purple'); 
let td = document.createElement('td');
td.setAttribute('colspan', '2');
td.appendChild(document.createTextNode("Всього: "));
tr.appendChild(td);

td = document.createElement('td');
td.appendChild(document.createTextNode(count));
tr.appendChild(td)

td = document.createElement('td');
td.appendChild(document.createTextNode(sum));
tr.appendChild(td)

table.append(tr);
