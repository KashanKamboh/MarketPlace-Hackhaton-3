

 const order= {
    name: "order",
    type: "document",
    title: "Order",
    fields:[
        {
            name:"firstName",
            title:"First Name",
            type:"string",
        },
        {
            name:"lastName",
            title:"Last Name",
            type:"string",
        },
        {
            name:"address",
            title:"Address",
            type:"string",
        },
        {
            name: "city",
            title: "City",
            type: "string",
        },
        {
            name:"zipCode",
            title:"Zip Code",
            type:"string",
        },
        {
            name:"phone",
            title:"Phone",
            type:"string",
        },
        {
            name:"email",
            title:"Email",
            type:"string",
        },
        {
            name:"cartItems",
            title:"Cart Items",
            type:"array",
            of:[{type:"reference", to:{type:"product"}}]
        },
        {
            name:"total",
            title:"Total",
            type:"number",
        },
        {
            name: "orderDate",
            title: "Order Date",
            type: "datetime",
        },
        {
            name:"status",
            title:"Status",
            type:"string",
            options:{
                list:[
                    {value:"pending", title:"Pending"},
                    {value:"processing", title:"Processing"},
                    {value:"success", title:"Success"},
                    {value:"cancelled", title:"Cancelled"},
                    ],
                    layout: "radio"
            },
            initialValue: "pending"
        }
    ]
}
export default order;