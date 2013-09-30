//------------------------------------------------------------------------------------------------------------------
// YOUR CODE: Create your Zoo "object literal" and Animal "constructor" and "prototypes" here.
//------------------------------------------------------------------------------------------------------------------

function Animal(name, legs) {
  this.name = name;
  this.legs = legs;
  // this.identify = function(){
  //  return "I am a " +  this.name + " with " + this.legs + " legs.";
  // }

  // Watch the video for this nonsense;
  // var ssn = ssn;
  // this.getSSN = function(){
  //   return ssn;
  // }

  // this.setSSN = function(ssn){
  //   ssn = ssn;
  // }

};

Animal.prototype.identify = function(){
  return "I am a " +  this.name + " with " + this.legs + " legs.";
}

var Zoo = {
  init: function(animals){
    this.animals = animals;
  },

  bipeds: function(){
    return this.animals.filter(function(animal){
      return animal.legs === 2;
    });
  },

  quadrupeds: function(){
    return this.animals.filter(function(animal){
      return animal.legs === 4;
    });
  }
};



class Animal

  attr_accessor :name, :legs

  def initialize(name, legs)
    @name = name
    @legs = legs
  end

  def identify
    "I am a #{name} with #{legs} legs."
  end
end

// # Ruby

// a = [1, 2, 3]
// a.select {|i| i > 2 }

//------------------------------------------------------------------------------------------------------------------
// DRIVER CODE: Do **NOT** change anything below this point. Your task is to implement code above to make this work.
//------------------------------------------------------------------------------------------------------------------

function assert(test, message) {
  if (!test) {
    throw "ERROR: " + message;
  }
  return true;
}

var animals = [
  new Animal("Human", 2),
  new Animal("Monkey", 2),
  new Animal("Kangaroo", 2),
  new Animal("Horse", 4),
  new Animal("Cow", 4),
  new Animal("Centipede", 100)
];

Zoo.init(animals);

assert(
  Zoo.bipeds().length === 3, "the Zoo should have 3 bipeds"
);
assert(
  Zoo.quadrupeds().length === 2, "the Zoo should have 2 bipeds"
);
assert(
  animals[0].identify() === "I am a Human with 2 legs.", "humans have 2 legs"
);
assert(
  animals[2].name === "Kangaroo", "expected 'Kangaroo'"
);
assert(
  animals[0].identify === animals[5].identify, "only one implementation of the identify() function should exist"
);
