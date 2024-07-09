var statusCode;
(function (statusCode) {
    statusCode[statusCode["notfound"] = 404] = "notfound";
    statusCode["badrequest"] = "400";
    statusCode[statusCode["internalServerError"] = 500] = "internalServerError";
})(statusCode || (statusCode = {}));
console.log(statusCode.notfound);
