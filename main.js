var c= document.getElementById('canvas');
var ctx = c.getContext('2d');

var img = new Image();
img.src = 'data:image/gif;base64,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';

var mouse = {
	x:0,
  	y:0
}
document.addEventListener('mousemove',function(e){mouse.x = e.pageX; mouse.y = e.pageY}, false);
parent.document.addEventListener('mousemove',function(e){mouse.x = e.pageX; mouse.y = e.pageY}, false);
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
	c.width = window.innerWidth;
	c.height = window.innerHeight;
}

resizeCanvas();
setInterval(function(){
  ctx.fillStyle="hsla("+Math.floor((mouse.x/c.width)*(mouse.y/c.height)*360)+", 100%, 50%, 1.0)";
  //"rgb("+Math.floor((mouse.x/c.width)*255)+","+Math.floor((mouse.y/c.height)*255)+","+Math.floor((mouse.x/c.width)*255)+")";
  ctx.fillRect(mouse.x-(img.width/2),mouse.y-(img.height/2),img.width-4,img.height);
  ctx.drawImage(img,mouse.x-(img.width/2),mouse.y-(img.height/2));
},10);
