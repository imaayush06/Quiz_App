//questions
const questions = [
    {
        'ques':'Which of the following is a markup language?',
        'a':'HTML',
        'b':'JavaScript',
        'c':'CSS',
        'd':'PHP',
        'correct':'a',
    },
    {
        'ques':'What year was Javascript launched?',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'none of the above',
        'correct':'b',
    },
    {
        'ques':'What does CSS stands for?',
        'a':'Hyper Text Markup Language',
        'b':'Cascading Style Sheet',
        'c':'JavaScript Object Notation',
        'd':'Cascading System Sheet',
        'correct':'b',
    }
]

let index = 0
let total = questions.length
let correct = 0, 
    incorrect = 0;
const quesBox = document.getElementById("quesBox")
const optionIn = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(total == index){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    quesBox.innerText =` ${index+1}) ${data.ques}`
    optionIn[0].nextElementSibling.innerText = data.a;
    optionIn[1].nextElementSibling.innerText = data.b;
    optionIn[2].nextElementSibling.innerText = data.c;
    optionIn[3].nextElementSibling.innerText = data.d;
} 

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    console.log(data.correct, ans)
    if(ans == data.correct){
        correct++ }
    else{
        incorrect++ 
    }
    index++
    loadQuestion()
}

const getAnswer = () => {
    let ans;
    optionIn.forEach(
        (input) => {
            if (input.checked) {
                ans = input.value;
            }
        }
    )
    return ans;
}

const reset = () =>{
    optionIn.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML=`
    <h3>Thank you for Answering the Questions</h3>
    <h2>Correct Ans: </h2> ${correct}/${total} 
    `
}
//intial call
loadQuestion(index)