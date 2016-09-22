var singleton = (function() {

    var initiated;

    function init() { // init method to create a singleton object. or internal constructor.
        return { // an object which exposed internal state to external world.
            publicFunction: privateFunction,
            publicField: "public field"
        };
    }

    //private content. which is not visisble outside.
    var privateField = "private field";

    function privateFunction() {
        return "called private function";
    }

    // a closure, which returns internal state by creating upon calling on getInstance method.
    return {
        getInstance: function() {
            if (!initiated) { //lazy initialization. if initialized return previously created object, which hold singleton nature.
                initiated = init();//otherwise initialize it.
            }
            return initiated;
        }
    };

})();