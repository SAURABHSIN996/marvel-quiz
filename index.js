var readlinesync = require('readline-sync')
var userName = readlinesync.question("what's your name? ")
console.log("_________WELCOME TO MARVEL QUIZ____________")
score = 0
function play(ques,ans)
{
  var userAns = readlinesync.question(ques)
  if(userAns === ans)
  {
    console.log("you are right! ")
    score = score+1
  }
  else
  {
    console.log("you are wrong! ")
  }
  console.log("________________________________________")
}
var quiz = [
  {
    question: "How many heroes make up the original Avengers Team? \n a.4 heros   b.6 heros\n c.8 heros   d.12 heros\n",
    answer:"b"
  },
  {
    question: "What is the name of the country Black Panther rules over? \n a.wakanda   b.asgard\n c.wakamba   d.nigeria\n",
    answer:"a"
  },
  {
    question: "What is Hawkeye's real name? \n a.bruce banner   b.clint barton\n c.steve rogers   d.tony stark\n",
    answer:"b"
  },
  {
    question: "What rare metal is found in Wakanda? \n a.copper   b.platinum\n c.plutonium   d.vibranium\n",
    answer:"d"
  },
  {
    question: "What is Groot's catchphrase? \n a.I m hungry   b.I m tired\n c.I m groot   d.I m root\n",
    answer:"c"
  },
  {
    question: "What is Killmonger’s relationship to Black Panther? \n a.friend   b.brother\n c.cousin   d.son\n",
    answer:"c"
  },
  {
    question: "Who is the Avengers' enemy that gained control of the Infinity Stones? \n a.magneto   b.apocalyps\n c.ultron   d.thanos\n",
    answer:"d"
  },
  {
    question: "Who plays Iron Man in the Marvel Cinematic Universe? \n a.tony stark   b.chris hamesworth\n c.robert downey Jr.   d.bruce banner\n",
    answer:"c"
  },
  {
    question: "Which war did Captain America fight in? \n a.world war I   b.vietnam\n c.world war II   d.cold war\n",
    answer:"c"
  },
  {
    question: "What food do the Avengers eat after the Battle of New York? \n a.burittos   b.ham burgers\n c.shawarma   d.sushi\n",
    answer:"c"
  }
]
for(var i=0;i<quiz.length;i++)
{
  var currentquestion = quiz[i]
  play(currentquestion.question,currentquestion.answer)
}
console.log("your total score is ",score)