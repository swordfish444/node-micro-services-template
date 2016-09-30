var config = require('config');

var safeParse = JSON.parse;
JSON.safeParse = function(json) {
  try {
    return safeParse.apply(this, arguments);
  } catch (e) {
    console.error('failed to parse', json, e, e.stack);
    return null;
  }
}

module.exports.JSON = {
  overview: function() {
    return {
      "new": [{
        "name": "JSON.safeParse",
        "description": "Extension to JSON.parse() with a built-in try/catch.",
        "returns": "Javascript object if successful, otherwise null."
      }]
    };
  }
}