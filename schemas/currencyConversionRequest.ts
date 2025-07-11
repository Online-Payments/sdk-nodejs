const schema = {
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "type" : "object",
  "properties" : {
    "cardSource" : {
      "$ref" : "#/definitions/dccCardSource"
    },
    "transaction" : {
      "$ref" : "#/definitions/transaction"
    }
  },
  "additionalProperties" : false,
  "definitions" : {
    "amountOfMoney" : {
      "type" : "object",
      "properties" : {
        "amount" : {
          "type" : "integer"
        },
        "currencyCode" : {
          "type" : "string"
        }
      },
      "additionalProperties" : false
    },
    "cardInfo" : {
      "type" : "object",
      "properties" : {
        "cardNumber" : {
          "type" : "string"
        },
        "paymentProductId" : {
          "type" : "integer"
        }
      },
      "additionalProperties" : false
    },
    "dccCardSource" : {
      "type" : "object",
      "properties" : {
        "card" : {
          "$ref" : "#/definitions/cardInfo"
        },
        "encryptedCustomerInput" : {
          "type" : "string"
        },
        "hostedTokenizationId" : {
          "type" : "string"
        },
        "token" : {
          "type" : "string"
        }
      },
      "additionalProperties" : false
    },
    "transaction" : {
      "type" : "object",
      "properties" : {
        "amount" : {
          "$ref" : "#/definitions/amountOfMoney"
        }
      },
      "additionalProperties" : false
    }
  }
}

export default schema;
