const canvas1 = document.getElementById('test1');
        const e = canvas1.getContext('2d');

        canvas1.width = 600;
        canvas1.height = 500;

        e.fillStyle = "lightgrey";
        e.fillRect(0,0,600,500);

        e.fillStyle = "green";
        e.fillRect(0,0,200,500);

        e.fillStyle = "red";
        e.fillRect(400,0,200,500);

        e.fillStyle = "yellow";
        e.beginPath();
        e.moveTo(300,250);
        e.lineTo(200,400);
        e.lineTo(400,400);
        e.fill();

        e.fillStyle= "blue";
        e.beginPath();
        e.arc(300,200,50,0,2*Math.PI);
        e.fill();
// -------------------------------------------------------------
const canvas3 = document.getElementById('test2');
        const d = canvas3.getContext('2d');

        canvas3.width = 350;
        canvas3.height = 300;

        d.fillStyle= "darkgreen"
        d.fillRect(0,0,350,300);

        d.fillStyle="black"
        d.fillRect(50,60,90,90);
        d.fillRect(210,60,90,90);
        d.fillRect(140,150,70,100);
        d.fillRect(100,190,40,110);
        d.fillRect(210,190,40,110);      
// -------------------------------------------------------------
        
const canvas2 = document.getElementById('test3');
const c = canvas2.getContext("2d");

    canvas2.width = 400;
    canvas2.height = 400;

    c.fillStyle = "black";
    c.beginPath();
    c.moveTo(50,50);
    c.lineTo(50,400);
    c.lineTo(400,400);
    c.fill();

    c.fillStyle= "white";
    c.beginPath();
    c.moveTo(100,175);
    c.lineTo(275,350);
    c.lineTo(100,350);
    c.fill();