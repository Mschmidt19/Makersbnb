describe ("Property", function () {

  var firebaseMock = jasmine.createSpyObj('firebaseMock', ['collection']);
  var collectionMock = jasmine.createSpyObj('collectionMock', ['doc']);
  var documentMock = jasmine.createSpyObj('documentMock', ['set']);
  // spyOn(firebaseMock, 'collection').and.returnValue(collectionMock);
  // spyOn(collectionMock, 'doc').and.returnValue(documentMock);

  var property = new Property(firebaseMock);

  describe("addProperty", function () {
    it("delegates adding of property to firebase instance with passed data", function () {
      property.addProperty("Log Cabin", 45, 9998765432, "A lovely log cabin for a great price!", "https://odis.homeaway.com/odis/listing/badb5f7a-40bb-4b18-ac49-ea217f79cb2b.c10.jpg")
      expect(documentMock.set).toHaveBeenCalled();
    })
  });

  describe("sayHello", function () {
    it("returns 'hello'", function () {
      expect(property.sayHello()).toEqual("hello");
    })
  })

});
