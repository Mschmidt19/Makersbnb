describe("Property", function(){

  var property;

  beforeEach(function() {
    property = new Property();
  });

  describe("#getAll", function(){
    it('lists all the properties', function(){
      property.add('Buckingham Palace', 999);
      property.add('Ed\'s Palace', 911);
      expect(property.getAll()[0]["title"]).toEqual("Buckingham Palace");
      expect(property.getAll()[0]["number"]).toEqual("999");
      expect(property.getAll()[1]["title"]).toEqual("Ed's Palace");
      expect(property.getAll()[1]["number"]).toEqual("911");
    });
  });

  describe('#add', function(){
    it('adds a property to the database', function(){
      property.add('Buckingham Palace', 999);
      expect(property.all[0]["title"]).toEqual("Buckingham Palace");
      expect(property.all[0]["number"]).toEqual("999");
    });
  });
});
