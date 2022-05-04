function Cat(name) {
  var foodAmount = 50;
  this.name = name;

  this.feed = function (dailyNorm) {

    if (!arguments.length) return foodAmount;

    if (dailyNorm < 50 || dailyNorm > 100) {
      throw new Error('Значение должно быть в пределах от 50 до 100');
    };

    foodAmount = 'Насыпаем в миску ' + dailyNorm + ' г. корма.';
    return foodAmount
  };
};

var catFirst = new Cat('Freddy');

catFirst.feed(55);

console.log( catFirst.feed() );

console.log (catFirst.name);

catFirst = null;


