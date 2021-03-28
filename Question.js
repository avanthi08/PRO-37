class Question{
    constructor (){
          this.title=createElement("h1");
          this.name = createInput("ENTER YOUR NAME!");
          this.answer = createInput ("Enter your answer");
          this.submit = createButton("Submit");
          this.question  = createElement("h3");
          this.option1 = createElement("h5");
          this.option2 = createElement("h5");
          this.option3 = createElement("h5");
          this.option4 = createElement("h5");
    }
    hide() {
        this.title.hide();
        this.name.hide();
        this.answer.hide();
        this.submit.hide()
    }
    display(){
        this.title.html("My quiz game");
        this.title.position(470,10);
        this.name.position(400,100);
        this.answer.position(400,120);
        this.submit.position(400,150);
        this.question.html("Whats ur name??");
        this.question.position(400,200);
        this.option1.html(this.name);
        this.option2.html("name");
        this.option3.html("this project");
        this.option4.html("12345");
        this.option1.position(400,220)
        // do with all the four options//
        // whenever the submit button is pressed, everything should be hidden
        //then update the contestant's name and answer
        // 
       // this.title.position();
    }
}