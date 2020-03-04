module.exports.checkoutSchema = {
    $schema: "http://json-schema.org/draft-04/schema#",
    type: "object",
    properties: {
        productId: {
            type: "integer"
        },
        customer_company: {
            type: "string"
        },
        customer_salutation: {
            type: "string"
        },
        customer_firstname: {
            type: "string"
        },
        customer_lastname: {
            type: "string"
        },
        customer_street: {
            type: "string"
        },
        customer_zip: {
            type: "string"
        },
        customer_city: {
            type: "string"
        },
        customer_country: {
            type: "string"
        },
        customer_email: {
            type: "string"
        },
        customer_birthdate: {
            type: "string"
        },
        device_manufacturer: {
            type: "string"
        },
        device_model: {
            type: "string"
        },
        device_class: {
            type: "string"
        },
        device_purchase_price: {
            type: "number"
        },
        device_purchase_date: {
            type: "string"
        },
        device_condition: {
            type: "integer"
        },
        payment_type: {
            type: "string"
        },
        terms_and_conditions_accepted: {
            type: "boolean"
        }
    },
    required: [
        "productId",
        "customer_company",
        "customer_salutation",
        "customer_firstname",
        "customer_lastname",
        "customer_street",
        "customer_zip",
        "customer_city",
        "customer_country",
        "customer_email",
        "customer_birthdate",
        "device_manufacturer",
        "device_model",
        "device_class",
        "device_purchase_price",
        "device_purchase_date",
        "device_condition",
        "payment_type",
        "terms_and_conditions_accepted"
    ]
};
