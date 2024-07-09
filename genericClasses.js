var GenericNumber = /** @class */ (function () {
    function GenericNumber(zeroValue, add) {
        this.zeroValue = zeroValue;
        this.add = add;
    }
    return GenericNumber;
}());
var myGenericnumber = new GenericNumber(0, function (x, y) { return x + y; });
console.log(myGenericnumber.add(2, 3));
