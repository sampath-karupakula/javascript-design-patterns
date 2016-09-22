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

})