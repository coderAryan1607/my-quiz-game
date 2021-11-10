class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.answerInput = createInput("enter correct option no.")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h4") 
    this.option1 = createElement("h3");
    this.option2 = createElement("h3");
    this.option3 = createElement("h3");
    this.option4 = createElement("h3");


    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Question:- What starts and ends with the letter'E', but only has one letter?");
    this.question.position(250,50)
    this.option1.html("1:Everyone");
    this.option1.position(350,70);
    this.option2.html("2:Envelope");
    this.option2.position(350,90);
    this.option3.html("3:Estimate");
    this.option3.position(350,110);
    this.option4.html("4:Example");
    this.option4.position(350,130);

    this.input1.position(150, 230);
    this.button.position(290, 300);
    this.answerInput.position(400,230);


    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank you, your answer has been submitted");
      this.message.position(250,350);
    })


  }
}
