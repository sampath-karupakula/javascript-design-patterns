var singleton = function() {

    var privateField = "private field";

    function privateFunction() {
        return "called private function";
    }

    return {
        publicFunction: privateFunction,
        publicField: "public field"
    }
}