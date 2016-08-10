//Here goes main javascript code
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

//getting viewport width and height;
var w=window, d=document, e=d.documentElement, g=d.getElementsByTagName('body')[0];
var x=w.innerWidth||e.clientWidth||g.clientWidth, y=w.innerHeight||e.clientHeight||g.clientHeight;
console.log("Viewport width and height : " + x + ", " + y);

d.getElementById('container').style.height = y + "px";

function absolutePositioning() {
    var contHeight = d.getElementById('container').clientHeight;
    console.log(contHeight);

    //setting elements absolute top position
    d.getElementById('c1').style.top =  contHeight - d.getElementById('c1').clientHeight + "px";
    d.getElementById('c2').style.top =  contHeight - d.getElementById('c2').clientHeight + "px";
    d.getElementById('bush1').style.top =  contHeight - d.getElementById('bush1').clientHeight + "px";
    d.getElementById('bush2').style.top =  (contHeight*0.97) - d.getElementById('bush2').clientHeight + "px";
    d.getElementById('ssn').style.top =  (contHeight*0.94) - d.getElementById('ssn').clientHeight + "px";
    d.getElementById('gate').style.top =  (contHeight*0.96) - d.getElementById('gate').clientHeight + "px";
    d.getElementById('sun').style.top =  contHeight - d.getElementById('sun').clientHeight + "px";
    d.getElementById('logo').style.top =  (contHeight*0.03) + "px";

    var contWidth = d.getElementById('container').clientWidth;
    console.log(contWidth);
    var conWidthHalf = contWidth / 2;
    //setting elements absolute left position
    d.getElementById('c1').style.left =  conWidthHalf - d.getElementById('c1').clientWidth / 2 + "px";
    d.getElementById('c2').style.left =  conWidthHalf - d.getElementById('c2').clientWidth / 2+ "px";
    d.getElementById('bush1').style.left =  conWidthHalf - d.getElementById('bush1').clientWidth  / 2 + "px";
    d.getElementById('bush2').style.left =  conWidthHalf - d.getElementById('bush2').clientwidth / 2+ "px";
    d.getElementById('ssn').style.left =  conWidthHalf - d.getElementById('ssn').clientWidth / 2+ "px";
    d.getElementById('gate').style.left =  conWidthHalf - d.getElementById('gate').clientWidth / 2 + "px";
    d.getElementById('sun').style.left =  conWidthHalf - d.getElementById('sun').clientWidth / 2 + "px";
    d.getElementById('logo').style.left =  conWidthHalf - d.getElementById('logo').clientWidth / 2 + "px";
};

absolutePositioning();

window.onresize = function(event){
    absolutePositioning();
}