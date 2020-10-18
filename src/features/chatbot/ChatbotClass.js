import natural from "natural";

class Chatbot {
  constructor(name = "Agent") {
    this.name = name;
    this.questions = {};
  }

  addQuestionsAnswer = (questions, answer) => {
    let question;

    for (question of questions) {
      this.questions[question] = answer;
    }
  };

  //  stem words (fast but abstract words)
  stemSentence = (sentence) => {
    return natural.PorterStemmer.tokenizeAndStem(sentence);
  };

  ask = (question) => {
    question = question.toLowerCase().trim();
    const questionWordList = this.stemSentence(question);
    let index = 0;
    let match = [];
    //console.log(questionWordList);

    let ques;
    for (ques of Object.keys(this.questions)) {
      ques = ques.toLowerCase().trim();
      //console.log(ques);
      const quesWordList = this.stemSentence(ques);
      // console.log(quesWordList);
      match.push(0);
      let count = 0;

      let word;
      for (word of quesWordList) {
        count += 1;
        if (questionWordList.includes(word)) {
          match[index] += 1;
        }
      }
      match[index] = match[index] / Math.max(count, 1);
      index += 1;
      //  console.log(ques)
      //  console.log(question)
      // if (ques.toLowerCase().trim() === question) {
      //   console.log(match);

      //   console.log(match.index(match.max));
      //   return this.questions[ques];
      // }
    }

    console.log(match);
    const max = Math.max(...match);
    console.log(max);
    if (max >= 0.3) {
      //  [match.index(max(match))]
      const bestQuestionMatch = Object.keys(this.questions)[match.indexOf(max)];
      return this.questions[bestQuestionMatch];
    }

    return "I did not understand the question!";
  };

  listQuestions = () => {
    var question;
    let questionList = [];
    for (question of Object.keys(this.questions)) {
      // console.log(question);
      questionList.push(question);
    }
    // console.log(questionList);
    return questionList;
  };

  initiateChat = () => {
    // console.log("Chat with {this.name}");
    // console.log("Availabe questions for {this.name}");
    this.listQuestions();

    while (1) {
      //var question = prompt("Enter question for {this.name} \n");
      const question = "Hi";
      if (
        [
          "quit",
          "exit",
          "close",
          "stop",
          "end",
          ".",
          "annihilate",
          "disconnect",
        ].includes(question)
      ) {
        break;
      }

      // console.log("{this.ask(question)}");
    }
  };
}

export default Chatbot;
