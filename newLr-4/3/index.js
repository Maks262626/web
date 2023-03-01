const circle = document.getElementById("circle");
//по горизонтальій прямій
function Problem1(){
    let a = circle.style.left = 50 + '%';
    circle.style.left = a; 
    let x =50;
    let inc = -1;
    function draw() {    
        if(x>=90 || x<=0) {inc*=-1;}
        x+= inc;


        circle.style.left = `${x}%`;
        setTimeout(draw, 4);
    }
    draw();
}
//по колу ( x=Rcost;  y=Rsint );
function Problem2(){
    let x = window.innerWidth /2;
    let y = window.innerHeight /2;
    let r = 250;
    let angle = 0;

        
    function moveObject() {  

            
        angle += 1;

            
        let newX = x + r * Math.cos(angle * Math.PI / 180);  
        let newY = y + r * Math.sin(angle * Math.PI / 180);  

            
        circle.style.left = newX + 'px'; 
        circle.style.top = newY + 'px';      
        
        setTimeout(moveObject, 1);  

    }  
    moveObject();
}

function Problem3(){
    //x=R(t-sint);  y=R(1-cost)
    let x = 50;
    let y = 50;
    let r = 25;
    let angle = 0;
    function moveObject() {  
        angle += 1;
        let t = angle * Math.PI / 180;
        let newX = x + r * (t-Math.sin(t));  
        let newY = y + r * (1-Math.cos(t));  
        circle.style.left = newX + 'px'; 
        circle.style.top = newY + 'px';      
        setTimeout(moveObject, 1);  
    }  
    moveObject();
}

//Problem1();
Problem2();
//Problem3();