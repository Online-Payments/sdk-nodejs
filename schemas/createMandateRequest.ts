const schema = {
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "type" : "object",
  "properties" : {
    "alias" : {
      "type" : "string"
    },
    "customer" : {
      "$ref" : "#/definitions/mandateCustomer"
    },
    "customerReference" : {
      "type" : "string"
    },
    "language" : {
      "type" : "string"
    },
    "recurrenceType" : {
      "type" : "string"
    },
    "returnUrl" : {
      "type" : "string"
    },
    "signatureType" : {
      "type" : "string"
    },
    "uniqueMandateReference" : {
      "type" : "string"
    }
  },
  "additionalProperties" : false,
  "definitions" : {
    "bankAccountIban" : {
      "type" : "object",
      "properties" : {
        "iban" : {
          "type" : "string"
        }
      },
      "additionalProperties" : false
    },
    "mandateAddress" : {
      "type" : "object",
      "properties" : {
        "city" : {
          "type" : "string"
        },
        "countryCode" : {
          "type" : "string"
        },
        "houseNumber" : {
          "type" : "string"
        },
        "street" : {
          "type" : "string"
        },
        "zip" : {
          "type" : "string"
        }
      },
      "additionalProperties" : false
    },
    "mandateContactDetails" : {
      "type" : "object",
      "properties" : {
        "emailAddress" : {
          "type" : "string"
        }
      },
      "additionalProperties" : false
    },
    "mandateCustomer" : {
      "type" : "object",
      "properties" : {
        "bankAccountIban" : {
          "$ref" : "#/definitions/bankAccountIban"
        },
        "companyName" : {
          "type" : "string"
        },
        "contactDetails" : {
          "$ref" : "#/definitions/mandateContactDetails"
        },
        "mandateAddress" : {
          "$ref" : "#/definitions/mandateAddress"
        },
        "personalInformation" : {
          "$ref" : "#/definitions/mandatePersonalInformation"
        }
      },
      "additionalProperties" : false
    },
    "mandatePersonalInformation" : {
      "type" : "object",
      "properties" : {
        "name" : {
          "$ref" : "#/definitions/mandatePersonalName"
        },
        "title" : {
          "type" : "string"
        }
      },
      "additionalProperties" : false
    },
    "mandatePersonalName" : {
      "type" : "object",
      "properties" : {
        "firstName" : {
          "type" : "string"
        },
        "surname" : {
          "type" : "string"
        }
      },
      "additionalProperties" : false
    }
  }
}

export default schema;
