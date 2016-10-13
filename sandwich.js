

//var sandwich = {
//    bread: white,
//    cheese: swiss,
//    meat: ham
//};

var sandwich = function (bread,cheese, meat){
    this.bread = bread;
    this.cheese = cheese;
    this.meat = meat;
};

sandwich.prototype.makeSandwich = function (){
    document.write(  "This is your sandwich !" + "<br><br>" + '<img src="images/bread.jpg">' +
        '<img src="images/cheese.jpg">' + this.meat
        +'<img src="images/bread.jpg">');
    this.eatSandwich();
};

sandwich.prototype.eatSandwich = function () {
    document.write( );
};

function wholeAction (){
var sandwichArray = [];

    sandwichArray[0] = new sandwich("white", " swiss", "ham");

    for(var i = 0; i < sandwichArray.length; i++){
        sandwichArray[i].makeSandwich();
    }
}