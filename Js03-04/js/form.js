var myProgrammingTest = {

    test: [],

    displayQuiz: function()  {
      document.body.setAttribute('style', 'width:50%; margin: 0 auto;');
      document.body.appendChild(document.createElement('h1'));
      var header = document.querySelector('h1');
      var form = document.createElement('form');
      var ul = document.createElement('ul');
      var submit = document.createElement('input');
      var i = 0;
      var listElement;
      header.innerHTML = 'Programming Test';
      header.setAttribute('style', 'text-align: center');
      submit.type = 'submit';
      submit.setAttribute('style', 'width:100%;');
      submit.classList.add("btn");
      document.body.appendChild(form);
      for (i = 0; i < this.test.length; i+=1) {
          listElement = document.createElement('li');
          listElement.innerHTML = this.test[i].question;
          ul.appendChild(listElement);
          ul.appendChild(this.generateAnswers(this.test[i].answers));
          form.appendChild(ul);
        }

      form.appendChild(submit);
    },

    generateAnswers: function(answers) {
      var i;
      var answersList = document.createElement('ul');
      for (i = 0; i < answers.length; i++){
        var answer = document.createElement('li');
        var label = document.createElement('label')
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.setAttribute('id', answers[i]);
        label.appendChild(checkbox);
        label.innerHTML += " " + answers[i];
        answer.appendChild(label);
        answersList.appendChild(answer);
      }
      return answersList;
    },

    generateQuiz: function(){
      var i;
      var questionNum = prompt('Сколько вопросов будет содержать тест?');
      if (isFinite( questionNum ) && (questionNum >= 1)) {
        for (i = 0; i < questionNum; i++) {
          this.test.push(this.createQuestion());
        };
      };
    },

    createQuestion: function(num){
      var newTestQuestion = {
        question: '',
        answers: [],
        correct: null
      };

      newTestQuestion.question = prompt('Введите свой вопрос');
      do {
        var answer = prompt('Введите вариант ответа или пустую строку для завершения');
        if(answer !== ''){
            newTestQuestion.answers.push(answer);
        }
      } while(answer !== '');
      do {
        newTestQuestion.correct = prompt('Введите номер правильного ответа');
      } while (newTestQuestion.correct <= 1 && newTestQuestion.correct > newTestQuestion.answers.length);

      return newTestQuestion;
    }
};

  myProgrammingTest.generateQuiz();
  myProgrammingTest.displayQuiz();
