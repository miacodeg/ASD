var formdata = new FormData();
formdata.append("type", "Thick horizontal");
formdata.append("tags", "");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler2, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "9tvSpqU13ZFuglJi8wBTJsH4tp8ie8VJ");

ajax.send(formdata);

function completeHandler2(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.adIM2G').src = response.link;
    document.querySelector('.adIM2G').alt = response.alt;
    document.querySelector('.anchoElem2').href = response.href;
}