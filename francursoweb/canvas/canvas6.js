function dibujar(){
	
  	var elemento=document.getElementById('lienzo');
  	lienzo=elemento.getContext('2d');
            
  	lienzo.beginPath();
    p1x=200;
    p1y=200;
            
      
	p2x=p1x+200;
    p2y=p1y+0;
            
    p3x=p2x+200*Math.sin(Math.PI/6);
    p3y=p2y+200*Math.cos(Math.PI/6);
  
    p4x=p3x-200*Math.sin(Math.PI/6);
    p4y=p3y+200*Math.cos(Math.PI/6);
  
    p5x=p4x-200;
    p5y=p4y+0;
  
    p6x=p5x-200*Math.sin(Math.PI/6);
    p6y=p5y-200*Math.cos(Math.PI/6);
  
    pcx=p1x+200*Math.sin(Math.PI/6);
    pcy=p1y+200*Math.cos(Math.PI/6);
  
	lienzo.moveTo(p1x,p1y);
	lienzo.lineTo(p2x,p2y);
	lienzo.lineTo(p3x,p3y);
    lienzo.lineTo(p4x,p4y);
    lienzo.lineTo(p5x,p5y);
    lienzo.lineTo(p6x,p6y);
    lienzo.lineTo(p1x,p1y);
    lienzo.lineTo(p4x,p4y);
    lienzo.moveTo(p2x,p2y);
    lienzo.lineTo(p5x,p5y);
    lienzo.moveTo(p3x,p3y);
    lienzo.lineTo(p6x,p6y);
    lienzo.moveTo(p3x,p3y);
    lienzo.arc(pcx,pcy,200.0,Math.PI*2,false);
    lienzo.moveTo(p2x,p2y);
    lienzo.arc(p1x,p1y,200,Math.PI/3*0,Math.PI/3*2,false);
    lienzo.moveTo(p3x,p3y);
    lienzo.arc(p2x,p2y,200,Math.PI/3*1,Math.PI/3*3,false);
    lienzo.moveTo(p4x,p4y);
    lienzo.arc(p3x,p3y,200,Math.PI/3*2,Math.PI/3*4,false);
    lienzo.moveTo(p5x,p5y);
    lienzo.arc(p4x,p4y,200,Math.PI/3*3,Math.PI/3*5,false);
    lienzo.moveTo(p6x,p6y);
    lienzo.arc(p5x,p5y,200,Math.PI/3*4,Math.PI/3*6,false);
    lienzo.moveTo(p1x,p1y);
    lienzo.arc(p6x,p6y,200,Math.PI/3*5,Math.PI/3*1,false);
  	lienzo.stroke();
}

window.addEventListener("load",dibujar,false);