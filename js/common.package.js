
if(typeof __inline !== 'function'){
  window.__inline = function(url){
    var xmlhttp = new XMLHttpRequest(),
        responseText;

    try{
        xmlhttp.open('GET', url, false);
        xmlhttp.send(null);

        if(/\.js$/i.test(url)){
          return window.eval(xmlhttp.responseText);
        }else{
          return xmlhttp.responseText;
        }
    }catch(e){}
  };
}

__inline("../common/js/lib/kg.js");
__inline("../common/js/common.js");


(function(){
  $('link[rel="import"]').each(function(){
    var url = this.href,
        link = this;

    $.get(url, function(result){
      console.log('replace import url:', url);
      $(link).after(result);
    });
  });
})();

