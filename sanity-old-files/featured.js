export default {
    name: "featured",
    type: "document",
    title: "Featured Menu categories",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Featured category name",
            validation: (rule) => rule.required()
        },
        {
            name: "short_description",
            type: "string",
            title: "Short description",
            validation: (rule) => rule.max(200)
        },
        {
            name: "restaurants",
            type: "array",
            title: "Restaurant",
            of: [{ type: "reference", to: [{ type: "restaurant" }] }]
        }
    ]
}