describe('Object creation streategy', function() {
    it('Literal object creation', function() {
        defineProp(newObject, "someValue", "someValue");
        expect(newObject).not.toBe(null);
        expect(newObject.someKey).toEqual("someKey");
        expect(newObject.someValue).toEqual("someValue");

    });

    it(' object creation by Object.create', function() {
        defineProp(newObject, "someValue", "someValue");
        expect(newObject1).not.toBe(newObject);
        expect(newObject1["someKey"]).toEqual("someKey");
        expect(newObject.someValue).toEqual("someValue");
    });
    it('object creation by new Object', function() {
        defineProp(newObject, "someValue", "someValue");
        expect(newObject2).not.toBe(newObject);
        expect(newObject2).not.toBe(newObject1);
        expect(newObject2.someKey).toEqual("someKey");
        expect(newObject.someValue).toEqual("someValue");
    });
});

describe("Constructor function test", function() {
    it("Object property test 1", function() {
        var BMW = new Car("BMW", 2016, 25);
        var benz = new Car("BENZ", 2016, 25);
        expect(BMW.model).toEqual(2016);
        expect(BMW.milage).toEqual(25);
        expect(BMW.toString).toBe(benz.toString);
    });
});