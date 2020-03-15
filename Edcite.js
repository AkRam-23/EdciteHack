//copy and paste during test on EdCite
//The title of the test will change into the answers to the following question

var userData = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "https://www.edcite.com/students/getassnwork?assignid="+window.location.href.split("?assignid=")[1]+"&uid="+ edcite.userid +"&_=",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 
const check = () => {
    let item = document.getElementsByClassName("active")[0].innerText;
    let itemnumber = parseInt(item);
    for(let i = 0; i < userData.result.qdatas[itemnumber].answer.answers[0].choices.length; i++){
        if(userData.result.qdatas[item].answer.answers[0].choices[i].correct == true){
            let quest = i+1;
            document.getElementsByClassName('extitle')[0].innerHTML = "Question: " + itemnumber + "// Answer: " + quest;
            
        }
    }
}
setInterval(function(){ check() }, 300);
