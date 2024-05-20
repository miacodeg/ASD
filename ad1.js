var formdata = new FormData();
formdata.append("type", "Thick Vertical");
formdata.append("tags", "music,party,House");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler1, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "9tvSpqU13ZFuglJi8wBTJsH4tp8ie8VJ");

ajax.send(formdata);

function completeHandler1(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.adverIMG1').src = response.link;
    document.querySelector('.adverIMG1').alt = response.alt;
    document.querySelector('.anchoElement1').href = response.href;
}