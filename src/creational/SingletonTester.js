var SingletonTester = (function() { // A simple tester function for Singleton.
    function Singleton(options) { // internal constructor function
        options = options || {};
        this.name = "SingletonTester";
        this.pointX = options.pointX || 4;
        this.pointY = options.pointY || 4;
    }

    var instance; // instance of instance object.


    var _static = { // static object, which return on using class or function name.
        name: "SingletonTester",
        getInstance: function(options) {
            if (instance === undefined) {
                instance = new Singleton(options);
            }
            return instance;
        }
    };
    return _static;
})();