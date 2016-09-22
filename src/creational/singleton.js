var singleton = (function() {

    var initiated;

    function init() {
        return {
            publicFunction: privateFunction,
            publicField: "public field"
        };
    }

    var privateField = "private field";

    function privateFunction() {
        return "called private function";
    }

    return {
        getInstance: function() {
            if (!initiated) {//lazy initialization.
                initiated = init();
            }
            return initiated;
        }
    };

})();