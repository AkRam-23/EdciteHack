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
            let url = window.location.href.split("#")[1]
            //if you add #show to the url it will show the answers
            //I added that option just in case it doesn't automatically click the answers
            if(url == "show"){
                document.getElementsByClassName('extitle')[0].innerHTML = "Question: " + itemnumber + "// Answer: (" + quest + ") " + userData.result.qdatas[item].answer.answers[0].choices[i].html;
            }
            for(let k = 0; k < document.getElementsByClassName('cmcv_text').length; k++){
                if(userData.result.qdatas[item].answer.answers[0].choices[i].html == document.getElementsByClassName('cmcv_text')[k].innerHTML){
                    document.getElementsByClassName('cmcv_text')[k].click();
                }
            }
            
        }
    }
}
setInterval(function(){ check() }, 600);
