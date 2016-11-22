var express = require("express");
var app = express();
var corser = require("corser");
var qs = require("querystring");
var ejs = require("ejs");
var fs = require("fs");

var value;
var data = JSON.parse(fs.readFileSync("./scripts/shop.json", "utf8")); // jsonとリンクする

app.use(express.static('public')); // これがないと画像とかcssが使えない
app.use(corser.create()); // CORS回避

app.all('/', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   next();
});

app.post('/post', function(req, res, next){
   req.setEncoding('utf8');

   req.on('data', function(chunk) {
      value = chunk; // shop.ejsでクリックしたときのidを入手
   });

   req.on('end', function() {
      for(var i=0; i<data.length; i++){
         if(value == data[i].id){               // もしidが一致したらvisibleを反転
            data[i].visible = !data[i].visible; // visibleがtrueならlist.ejsに表示
         }
      }
   });

   res.send('POST requested');
   //console.log('recieved');

   next();
});

app.get('/', function(req, res){
   var template = fs.readFileSync("./html/final.ejs", "utf8");
   var html = ejs.render(template, {shops: data});
   res.writeHead(200, {"Content-type": "text/html"});
   res.write(html);
   res.end();
});

app.get('/about', function(req, res){
   var template = fs.readFileSync("./html/about.ejs", "utf8");
   var html = ejs.render(template, {shop: data});
   res.writeHead(200, {"Content-type": "text/html"});
   res.write(html);
   res.end();
})

app.get('/list', function(req,res){
   var template = fs.readFileSync("./html/list.ejs", "utf8");
   var html = ejs.render(template, {data: data});
   res.writeHead(200, {"Content-type": "text/html"});
   res.write(html);
   res.end();
});

app.get('/shops/:id', function(req,res){　// :idにreq.params.idが紐付け
   var shop_id = req.params.id;
   var shop;

   for(var i=0; i<data.length; i++){
      if(shop_id == data[i].id){
         shop = data[i]; // 指定idのデータがshopに入る
      }
   }

   var template = fs.readFileSync("./html/shop.ejs", "utf8");
   var html = ejs.render(template, {shop: shop});
   res.writeHead(200, {"Content-type": "text/html"});
   res.write(html);
   res.end();
});

app.listen(1919);

console.log("server started.");
