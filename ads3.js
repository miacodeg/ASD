var formdata = new FormData();
formdata.append("type", "Horizontal Strp");
formdata.append("tags", "House");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler3, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "9tvSpqU13ZFuglJi8wBTJsH4tp8ie8VJ");

ajax.send(formdata);

function completeHandler3(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.adIMg').src = response.link;
    document.querySelector('.adIMg').alt = response.alt;
    document.querySelector('.anchoEle').href = response.href;
}