var dice = [];
var Die = /** @class */ (function () {
    function Die() {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div = $("<div class='die'>" + this.value + "</div>");
        //Add a click event to this div to roll when clicked
        this.div.click(this.roll.bind(this));
        //Add a dbl-click event to this div to remove
        this.div.dblclick(function () {
            this.div.remove();
            //Get the index of the die in the array
            var index = dice.indexOf(this);
            //Remove it from array
            dice.splice(index, 1);
        }.bind(this));
        //Append our new div to the #dice-container div 
        $("#dice-container").append(this.div);
    }
    Die.prototype.roll = function () {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div.text(this.value);
    };
    return Die;
}());
function rollDice() {
    dice.forEach(function (die) {
        die.roll();
    });
}
function createDie() {
    dice.push(new Die());
}
function sumDice() {
    var total = 0;
    dice.forEach(function (die) {
        total += die.value;
    });
    alert("The sum of all the dice is " + total);
}
