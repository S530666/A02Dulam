QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test('Testing total sum function with several sets of inputs', function (assert) {
    assert.equal(calcTotal(2,3,4,5,6,7), 27, "works with a positive number");
    assert.equal(calcTotal(0,0,0,10,10,10), 30, "works with zero number");
    assert.throws(function () { calcTotal(-10,1,2,3,4,5); }, new Error('The given argument is not a positive number'), "correctly raises an error if one tries to enter negative number");
});
QUnit.test('Testing total sum function with several sets of inputs', function (assert) {
    assert.throws(function () { calcTotal("wqd",1,2,3,4,5); }, new Error('The given argument is not a number'), "correctly raises an error if one tries to enter string value");
    assert.throws(function () { calcTotal("","","","","",""); }, new Error('The given argument is null'), "correctly raises an error if one doesnt input anything.");
});




