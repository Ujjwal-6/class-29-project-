class Box extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.width = 50;
    this.height =50;
  }
  display(){
    fill('lightgreen');
    super.display();
  }
};
