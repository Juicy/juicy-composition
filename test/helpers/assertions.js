chai.Assertion.addChainableMethod('HTMLAttribute', function (str) {
    var obj = chai.util.flag(this, 'object');
    new chai.Assertion(obj).to.respondTo('getAttribute');
    chai.util.flag(this, 'object', obj.getAttribute(str));
});
chai.Assertion.addProperty('assignedSlot', function (str) {
    var obj = chai.util.flag(this, 'object');
    // new chai.Assertion(obj).to.respondTo('assignedSlot');
    new chai.Assertion(obj).to.respondTo('getDestinationInsertionPoints');
    chai.util.flag(this, 'object', obj.getDestinationInsertionPoints()[0]);
});
