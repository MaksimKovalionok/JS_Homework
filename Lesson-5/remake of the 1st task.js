var i = {};

function isEmpty(obj) {

  for (var key in obj) {
    return false;
  };

  return true;
};

console.log (isEmpty(i));