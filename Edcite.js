$(".submitBtn").click(function(){ alert("(https://Josh-Hunta.xyz) Check out my other projects if you want. Thanks for using my hack.") });

alert("For this to work you must open each question twice to get the answers.");

async function complete() {
    let userData = null;

    const check = async() => {
        await $.ajax({
            async: false,
            url: "https://www.edcite.com/students/getassnwork?assignid=" +
                window.location.href.split("?assignid=")[1] +
                "&uid=" +
                edcite.userid +
                "&_=",
            dataType: "json",
            success: function(data) {
                userData = data;
                console.clear();
                console.log("Good");
            }
        });

        console.log("working!");
        let itemnumber = parseInt($(".active")[0].innerText);

        for (
            let i = 0; i < userData.result.qdatas[itemnumber].answer.answers[0].choices.length; i++
        ) {
            if (
                userData.result.qdatas[itemnumber].answer.answers[0].choices[i]
                .correct == true
            ) {
                let quest = i + 1;
                let url = window.location.href.split("#")[1];

                document.getElementsByClassName("extitle")[0].innerHTML =
                    "Question: " +
                    itemnumber +
                    "// Answer: (" +
                    quest +
                    ") " +
                    userData.result.qdatas[itemnumber].answer.answers[0].choices[i].html;
                $(".roundBox")[i].click();
            }
        }
    };

    check();
}
setInterval(complete, 2000);
