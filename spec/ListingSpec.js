describe("Property", function(){

  var property;

  beforeEach(function() {
    property = new Property();
  });

  describe('#add', function(){
    it('adds a property to the database', function(){
      property.add('Buckingham Palace', 999);
      expect(property.all[0]["title"]).toEqual("Buckingham Palace");
      expect(property.all[0]["number"]).toEqual("999");
    });
  });
});
