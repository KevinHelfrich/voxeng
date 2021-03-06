var size = 10;
var backPlane = 400;
var frontPlane = 100;

var nearRatio = 1;
var farRatio = 0.25;

var scaleFactor = (nearRatio - farRatio)/(frontPlane - backPlane);
var additive = nearRatio - (scaleFactor*frontPlane);

var d = (new Date()).getTime();
var cycles = 0;

var points = [];
for(var z = 0;z<10;z++){
    for(var x = 10-z;x<10;x++){
        for(var y = 10-z;y<10;y++){
            points.push({x:x,y:y,z:z,color: '#' + (z*25).toString(16) + (x*25).toString(16) + (y*25).toString(16)});
        }
    }
}
for(var i =0;i < points.length; i++){
    rotateY(points[i],-0.1);
}
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

console.log(points.length);

setInterval(update,16);

function render(){
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = '#9EB9D4';
    ctx.fillRect(0, 0, c.width, c.height);
    points.sort(function(p1,p2){
        return p1.y - p2.y;
    });
    for(var i = 0; i< points.length; i++){
        var point = points[i];
        var x = point.x + 20;
        var y = point.y + 150;
        var z = point.z + 15;
        if(y<frontPlane||y>backPlane){
            //console.log(x + ' ' + y + ' ' + z);
            continue;
        }
        ctx.fillStyle = point.color;
        var dist = scaleFactor*y + additive;
        //var dist = y/10;
        var thisSize = size/dist;
        ctx.fillRect((x*size)-thisSize,(z*size)-thisSize,2*thisSize,2*thisSize);
    }
}

function update(){
    for(var i =0;i < points.length; i++){
        rotateZ(points[i],0.1);
        //rotateY(points[i],-0.01);
    }
    render();

    cycles++;
    var newD = (new Date()).getTime();
    if(newD-d>1000){
        console.log(cycles);
        cycles = 0;
        d = newD;
    }
}

function rotateZ(point,angle){
    var x = point.x;
    var y = point.y;
    var z = point.z;
    point.x = Math.cos(angle)*x - Math.sin(angle)*y;
    point.y = Math.sin(angle)*x + Math.cos(angle)*y;
    point.z = z;
}
function rotateY(point,angle){
    var x = point.x;
    var y = point.y;
    var z = point.z;
    point.x = Math.cos(angle)*x + Math.sin(angle)*z;
    point.y = y;
    point.z = -1*Math.sin(angle)*x + Math.cos(angle)*z;
}
