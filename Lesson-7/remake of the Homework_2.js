function Cat(name) {
  var foodAmount = 50;
  this.name = name;

  function formatFoodAmount () {
    return foodAmount + ' гр.';
  };

  this.feed = function () {
    return 'Насыпаем в миску ' + formatFoodAmount () + ' корма.';
  };

  this.dailyNorm = function(amount){
    if (!arguments.length) return formatFoodAmount ();

    if (amount < 50 || amount > 100) {
      throw new Error('Значение должно быть в пределах от 50 до 100');
    };

  foodAmount = amount;
  };
};

var catFirst = new Cat('Freddy');

catFirst.dailyNorm(60);

console.log( catFirst.feed() );

console.log (catFirst.name);

catFirst = null;