$(function(){
 
  var url = 'http://api.gnavi.co.jp/PhotoSearchAPI/20150630/?callback=?';
  var params = {
    shop_name: '和食処 八田 東口本家店',
    keyid: 'cc1ac38f4f4ab20592a21a09a2c9f8e6',
    format: 'json'
  };
 
  var showResult = function(result){
    var res = '';
    if ( 'result.response.total_hit_count'> 0 ) {
      res = "";
      for ( var i in result.response){
        var r = result.response[i];
        r = r.photo;
        if(typeof r != 'undefined') {
          if(typeof r.shop_name != undefined) res += r.shop_name + '：' + r.comment + '\n \n';
        }
      }
    } else {
      res = '検索結果が見つかりませんでした。';
    }
    alert(res);
  }
 
  $(document).on('click', '.js--apply', function(){
    $.getJSON(url, params, function(result){
      showResult(result);
    });
  });
 
}(jQuery));
