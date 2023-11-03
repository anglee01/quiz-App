var questions = [
    {
        question:"What are people who  write computer code called?",
        option1:"Programmer",
        option2:"Manufacturer",
        option3:"Crytographers",
        correctAns:"Programmers"
    },
    {
        question:"How many bones do we have in an ear? ",
        option1:"2",
        option2:"3",
        option3:"4",
        correctAns:"3"
    },{
        question:"The branch of physics that studies the internal structure of the earth",
        option1:"Plasma Physics",
        option2:"Geo physics",
        option3:"Mechanics",
        correctAns:"Geo physics"
    },{
        question:"What is the largest Spanish-speaking city in the world? ",
        option1:"Paris",
        option2:"Mexico-city",
        option3:"Karachi",
        correctAns:"Mexico-city"
    },{
        question:"how many data types in js?",
        option1:"6",
        option2:"7",
        option3:"8",
        correctAns:"8"
    }
    ,{
        question:"How many states are there in USA?",
        option1:"30",
        option2:"28",
        option3:"50",
        correctAns:"50"
    }]
    
    
    var para = document.getElementById("ques");
    var opt1 = document.getElementById("opt1");
    var opt2 = document.getElementById("opt2");
    var opt3 = document.getElementById("opt3");
    var button = document.getElementById("btn");
    var timer = document.getElementById("timer")
    var index = 0;
    var score = 0;
    var min = 1;
    var sec = 59;
    
    
    
    setInterval(function(){
        timer.innerHTML = `${min}:${sec}`;
        sec--
        if(sec<0){
            min--;
            sec = 59    
        }
        if(min<0){
            min= 1;
            sec = 59;
            nextQuestion()
        }
    },1000)
    
    
    function nextQuestion(){
    
        var getOptions = document.getElementsByName("options");
    
        for(var i = 0;i<getOptions.length;i++)
        {
            if(getOptions[i].checked){
                var selectedValue = getOptions[i].value;
                // console.log(selectedValue)
                var selectedQues = questions[index - 1]["question"];
                var selectedAns = questions[index-1][`option${selectedValue}`]
                var correctAns = questions[index - 1]["correctAns"]
                if(selectedAns == correctAns){
                    score++
                }
            }
            getOptions[i].checked = false
        }
    
        button.disabled = true
    
        if(index >questions.length - 1){
    
            Swal.fire(
                'Excellent job!',
            `Your percentage is ${((score / questions.length)*100).toFixed(2)}`,
                'success'
              )
            // console.log("your percentage is " + ((score / questions.length)*100).toFixed(2))
            }
        else {
    
            para.innerHTML = questions[index].question;
            opt1.innerText = questions[index].option1;
            opt2.innerText = questions[index].option2;
            opt3.innerText = questions[index].option3;
            index++
        }
    }
    
    // nextQuestion()
    
    function clicked()
    {
        button.disabled = false
    }