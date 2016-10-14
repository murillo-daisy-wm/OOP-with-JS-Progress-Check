//-----LITERAL NOTATION----- //

//var sandwich = {
//    bread: white,
//    cheese: swiss,
//    meat: ham
//};



 //-----CONSTRUCTOR----- //
var sandwich = function (bread,cheese, meat, lettuce){
    this.bread = bread;
    this.cheese = cheese;
    this.meat = meat;
    this.lettuce = lettuce;
};

//------encapsulation-------//

sandwich.prototype.makeSandwich = function (){
    document.write('<center>'  + "<br><br>" + '<img src="images/bread.jpg">' +
            ' '+ '<img src="images/cheese.jpg">' + ' ' +
            '<img src="images/meat.jpg">' + ' ' + '<img src="images/lettuce.jpg">'
+ ' '            +'<img src="images/bread.jpg">' + '</center>' + '<br>');
    this.eatSandwich();
};

sandwich.prototype.eatSandwich = function () {
    document.write( "<center>" + "<div> <br> Sandwich! Has wheat bread, cheese, ham & lettuce!" + "</div>" + "</center>");
};
//---------------------------//



//-------INHERITANCE---------//
//-----------------SUBCLASS #1-------------//
function baconSandwich(bread, cheese, meat, lettuce, bacon){
    sandwich.call(this, bread,cheese, meat, lettuce);
    this.bacon = bacon;
}

baconSandwich.prototype = Object.create(sandwich.prototype);
baconSandwich.prototype.constructor = baconSandwich;

baconSandwich.prototype.makeSandwich = function (){
    document.write( '<center>'  + "<br><br>" + '<img src="images/bread.jpg">' +
        ' '+ '<img src="images/cheese.jpg">' + ' ' +
        '<img src="images/meat.jpg">' + ' ' + '<img src="images/lettuce.jpg">'
            + ' ' + '<img src="images/bacon.jpg">'
        + ' ' +'<img src="images/bread.jpg">' + '</center>'+ '<br>');
    this.eatSandwich();
};

baconSandwich.prototype.eatSandwich = function () {
    document.write("<center>" + "<div> <br> Bacon Sandwich! Just like the last one but add bacon!" + "</div>" + "</center>");
};
//--------------------------//


//------------------SUBCLASS #2--------------//
function pickleSandwich(bread, cheese, meat, tomatoes, pickles){
    sandwich.call(this, bread,cheese, meat );
    this.tomatoes = tomatoes;
    this.pickles = pickles;
}

pickleSandwich.prototype = Object.create(sandwich.prototype);
pickleSandwich.prototype.constructor = pickleSandwich;

pickleSandwich.prototype.makeSandwich = function (){
    document.write('<center>'  + "<br><br>" + '<img src="images/bread.jpg">' +
        ' '+ '<img src="images/cheese.jpg">' + ' ' +
        '<img src="images/meat.jpg">' + ' ' + '<img src="images/tomatoes.jpg%20.png">'
        + ' ' +'<img src="images/pickles.jpg">' + '<img src="images/bread.jpg">' + '</center>'+ '<br>');
    this.eatSandwich();
};

pickleSandwich.prototype.eatSandwich = function () {
    document.write("<center>" + "<div> <br> Pickly Sandwich! Just take off the bacon & lettuce, <br> " +
        "and toss in the pickles!" +'<br>'

     + "</div>" + "</center>");
};


//----------------SUBCLASS #3--------------//
function veggieSandwich(bread, lettuce, tomatoes, pickles, avocados){
    sandwich.call(this, bread, lettuce);
    this.tomatoes = tomatoes;
    this.pickles = pickles;
    this.avocados = avocados;
}

veggieSandwich.prototype = Object.create(sandwich.prototype);
veggieSandwich.prototype.constructor = veggieSandwich;

veggieSandwich.prototype.makeSandwich = function (){
    document.write('<center>'  + "<br><br>" + '<img src="images/bread.jpg">' +
        ' '+ '<img src="images/lettuce.jpg">' + ' ' +
        '<img src="images/tomatoes.jpg%20.png">' + ' ' + '<img src="images/pickles.jpg">'
            + ' ' + '<img src="images/avocados.jpg">'
        + ' ' +'<img src="images/bread.jpg">' + '</center>'+ '<br>');
    this.eatSandwich();
};

veggieSandwich.prototype.eatSandwich = function () {
    document.write("<center>" + "<div> <br> Veggie Sandwich! Lettuce! Tomatoes! Pickles! & Avocados!" + "</div>" + "</center>");
};

//-------------SUBCLASS #4-----------//

function pbjSandwich(bread, peanutButter, grapeJelly){
    sandwich.call(this, bread);
    this.peanutButter = peanutButter;
    this.grapeJelly = grapeJelly;
}

pbjSandwich.prototype = Object.create(sandwich.prototype);
pbjSandwich.prototype.constructor = pbjSandwich;

pbjSandwich.prototype.makeSandwich = function (){
    document.write('<center>' + "<br><br>" + '<img src="images/bread.jpg">' +
        ' '+ '<img src="images/peanutButter.jpg">' + ' ' +
        '<img src="images/grapeJelly.jpg">'
        + ' ' +'<img src="images/bread.jpg">' + '</center>' + '<br>');
    this.eatSandwich();
};

pbjSandwich.prototype.eatSandwich = function () {
    document.write("<center>" + "<div> <br> Classic PB&J! Wheat bread with peanut butter and grape jelly!" + "</div>" + "</center>");
}

//-----POLYMORPHISM------//
function wholeAction (){
var sandwichArray = [];
    //--------instantiating with NEW keyword-------//
    sandwichArray[0] = new sandwich("white", " swiss", "ham", "lettuce");
    sandwichArray[1] = new baconSandwich("wheat", "american", "turkey", "pork");
    sandwichArray[2] = new pickleSandwich("white", "american", "ham", "tomatoes","pickles");
    sandwichArray[3] = new veggieSandwich("wheat", "lettuce", "tomatoes", "pickles", "avocados");
    sandwichArray[4] = new pbjSandwich("white", 'peanut butter', "grape jelly");

    for(var i = 0; i < sandwichArray.length; i++){
        sandwichArray[i].makeSandwich();
    }
};
//----------------------//