describe("Singleton design pattern test suit", function() {
    describe("internal part access", function() {
        var single = singleton.getInstance();
        it("access internal property privateField", function() {
            expect(single.privateField).toBeUndefined();
        });
        it("access internal function privateFunction", function() {
            expect(single.privateFunction).toBeUndefined();
        })
    });

    describe("internal part access through public functions", function() {
        var single = singleton.getInstance();
        it("access internal property public Field", function() {
            expect(single.publicField).toEqual("public field");
        });
        it("access internal function publicFunction", function() {
            expect(single.publicFunction()).toEqual("called private function");
        })
    });
    describe("Singleton Tester testing", function() {
        var single = SingletonTester;
        it("accesssing the static part", function() {
            expect(single.name).toEqual("SingletonTester");
            expect(single.pointX).toBeUndefined();
        });
        it("accesssing the instance", function() {
            var single = SingletonTester.getInstance({ pointX: 10, pointY: 20 });
            expect(single.name).toEqual("SingletonTester");
            expect(single.pointX).toEqual(10);
            expect(single.pointY).toEqual(20);
        });
    });

})