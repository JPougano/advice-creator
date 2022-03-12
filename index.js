let idField = document.querySelector('.advice__number');
let adviceField = document.querySelector('.advice');


function getAdvices(url){
    let request = new XMLHttpRequest();
    request.open("GET",url,false);
    request.send();
    return request.responseText;
}

function usingGet(){
    data = getAdvices("https://api.adviceslip.com/advice");

    adviceData = JSON.parse(data);

    var id = adviceData.slip.id;
    var advice = adviceData.slip.advice;

    idField.textContent = ("ADVICE #" + id)
    adviceField.textContent = ('"' + advice + '"')
}

function paginaCarregou(cb) {
    (function carregamentoCompleto() {
      var state = document.readyState;
      if (state == 'loaded' || state == 'complete') 
      usingGet();
      else setTimeout(carregamentoCompleto, 200);
    })();
  };

  paginaCarregou()

  const wallBrabo = "Wallace Brabo"