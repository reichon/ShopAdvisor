var a = 0;
var b = 0;
var c = 0;


function waku() {
   var canvas = document.getElementById('canvas');
   var ctx = canvas.getContext('2d');
   ctx.strokeRect(10, 50, 50, 150);
   ctx.strokeRect(100, 50, 50, 150);
   ctx.strokeRect(190, 50, 50, 150);
}

function countUp1() {
   if ( a <= 29) {
      a++;
      document.getElementById('number1').innerHTML = a;
   }
   var canvas = document.getElementById('canvas');
   var ctx = canvas.getContext('2d');
   var y = a * 5;
   ctx.strokeRect(10, 50, 50, 150);
   ctx.fillRect(10, 200 - y, 50, y);
   if( a == 30 ) {
      alert("ありがとうございます！お待ちしております^^")
   }
}

function countUp2() {
   if ( b <= 29) {
      b++;
      document.getElementById('number2').innerHTML = b;
   }
   var canvas = document.getElementById('canvas');
   var ctx = canvas.getContext('2d');
   var y = b * 5;
   ctx.strokeRect(100, 50, 50, 150);
   ctx.fillRect(100, 200 - y, 50, y);
   if( b == 30 ) {
      alert("ありがとうございます！ぜひまたご来店ください^^")
   }
}


function countUp3() {
   if ( c <= 29) {
      c++;
      document.getElementById('number3').innerHTML = c;
   }
   var y = c * 5;
   var canvas = document.getElementById('canvas');
   var ctx = canvas.getContext('2d');
   ctx.strokeRect(190, 50, 50, 150);
   ctx.fillRect(190, 200 - y, 50, y);
   if( c == 30 ) {
      alert("申し訳ありませんでした。よろしければ口コミにご要望をお書きください。")
   }
}