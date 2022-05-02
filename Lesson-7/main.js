function Cat(name) {
  var foodAmount = 50;
  this.name = name;

    this.feed = function () {
      return 'Насыпаем в миску ' + formatFoodAmount () + ' корма.';
    }

    function formatFoodAmount () {
      return foodAmount + ' гр.';
    }

    this.dailyNorm = function(amount){
      if (!arguments.length) return foodAmount;

      if (amount < 50 || amount > 100) {
        throw new Error('Значение должно быть в пределах от 50 до 100');
      }

      foodAmount = amount;
    };
}

var catFirst = new Cat('Freddy');

catFirst.dailyNorm(110);

console.log( catFirst.feed() );

console.log (catFirst.name);

catFirst = null;


