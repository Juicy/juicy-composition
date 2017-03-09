chai.Assertion.addChainableMethod('HTMLAttribute', function (str) {
    var obj = chai.util.flag(this, 'object');
    new chai.Assertion(obj).to.respondTo('getAttribute');
    chai.util.flag(this, 'object', obj.getAttribute(str));
});
chai.Assertion.addProperty('assignedSlot', function (str) {
    var obj = chai.util.flag(this, 'object');
    new chai.Assertion(obj).to.have.property('assignedSlot');
    chai.util.flag(this, 'object', obj.assignedSlot);
});
chai.Assertion.addProperty('assignedContent', function (str) {
    var obj = chai.util.flag(this, 'object');
    // v0
    new chai.Assertion(obj).to.respondTo('getDestinationInsertionPoints');
    chai.util.flag(this, 'object', obj.getDestinationInsertionPoints()[0]);
});
