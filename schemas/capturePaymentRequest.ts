const schema = {
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "type" : "object",
  "properties" : {
    "amount" : {
      "type" : "integer"
    },
    "isFinal" : {
      "type" : "boolean"
    },
    "operationReferences" : {
      "$ref" : "#/definitions/operationPaymentReferences"
    },
    "references" : {
      "$ref" : "#/definitions/paymentReferences"
    }
  },
  "additionalProperties" : false,
  "definitions" : {
    "operationPaymentReferences" : {
      "type" : "object",
      "properties" : {
        "merchantReference" : {
          "type" : "string"
        }
      },
      "additionalProperties" : false
    },
    "paymentReferences" : {
      "type" : "object",
      "properties" : {
        "merchantParameters" : {
          "type" : "string"
        },
        "merchantReference" : {
          "type" : "string"
        }
      },
      "additionalProperties" : false
    }
  }
}

export default schema;
