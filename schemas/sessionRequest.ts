const schema = {
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "type" : "object",
  "properties" : {
    "tokens" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      },
      "uniqueItems" : false
    }
  },
  "additionalProperties" : false
}

export default schema;
