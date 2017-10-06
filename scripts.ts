let dice: Array<Die> = [];

class Die {
    value: number;
    div: JQuery<HTMLElement>;

    constructor() {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div = $("<div class='die'>" + this.value + "</div>");
        this.div.click(this.roll.bind(this));
        this.div.dblclick(function () {
            this.div.remove();
            let index = dice.indexOf(this);
            dice.splice(index, 1);
        }.bind(this));

        $("#dice-container").append(this.div);
    }

    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div.text(this.value);

    }
}
function rollDice() {
    dice.forEach(function (die) {
        die.roll();
    });

}
function createDie() {
    dice.push(new Die());
}

function sumDice() {
    let total = 0;
    dice.forEach(function (die) {
        total += die.value;
    });
    alert("The sum of all the dice is " + total);
}