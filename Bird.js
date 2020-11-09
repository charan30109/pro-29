class bird extends BaseClass {

  constructor(x,y){
    super(x,y,50,50);
  
  }

  display() {
    
    super.display();
      push();
      tint(255,this.Visiblity);
      pop();
  }
}
