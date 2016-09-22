var SingletonTester = (function() {
    function Singleton(options) {
        options = options || {};
        this.name = "SingletonTester";
        this.pointX = options.pointX || 4;
        this.pointY = options.pointY || 4;
    }

    var instance;


    var _static = {
        name:"SingletonTester",
        getInstance : function(options){
            if(instance === undefined){
                instance = new Singleton(options);
            }
            return instance;
        }
    };
    return _static;
})();