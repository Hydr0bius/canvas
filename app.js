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
