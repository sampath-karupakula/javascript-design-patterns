var newObject = newObject || {}; //literal object creation.
var newObject1 = Object.create(null); //object creation without prototype
var newObject2 = new Object(); //object creation with type Object.

newObject.someKey = "someKey";
newObject1["someKey"] = "someKey";;
Object.defineProperty(newObject2, "someKey", {
    value: "someKey",
    enumerable: true,
    writable: true,
    configurable: true
});


function defineProp(obj, key, value) {
    Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        writable: true,
        configurable: true
    });
};


/* costructors */

function Car(name, model, milage) {
    this.name = name;
    this.model = model;
    this.milage = milage;

    
};

Car.prototype.this.toString = function() {
        return this.name + " gives " + this.milage + "miles";
    };