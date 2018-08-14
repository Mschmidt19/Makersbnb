function Property(){
  this.all = [];
};
Property.prototype.add = function(mytitle, mynumber) {
  this.all.push({title: `${mytitle}`, number: `${mynumber}`})
};
