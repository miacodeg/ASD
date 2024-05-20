var hamburer2 = document.querySelector(".hamburger");
var navList = document.querySelector(".nav-list");

if (hamburer2) {
  hamburer2.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}


var formdata = new FormData();
formdata.append("type", "Light Square");
formdata.append("tags", "House");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler1, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "9tvSpqU13ZFuglJi8wBTJsH4tp8ie8VJ");
ajax.send(formdata);

function completeHandler1(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.advertIMG').src = response.link;
    document.querySelector('.advertIMG').alt = response.alt;
    document.querySelector('.anchorElement').href = response.href;
}