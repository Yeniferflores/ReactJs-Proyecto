const data= [
    {
        id: 1,            
        title: "Cargo Jacket",
        img:"https://cdn.shopify.com/s/files/1/0567/5873/0916/products/cargo-jacket-mens_720x.png?v=1643086819",
        price: 6000,
        detail: "Fabricado con materiales de primera calidad y funcional",
        stock: 5,
        color: "Black",
    },
    {
        id: 2, 
        title: "Cargo Jacket for woman",
        img:"https://cdn.shopify.com/s/files/1/0567/5873/0916/products/cargo-utility-jacket-womens-156_57ebecdd-f28e-43f6-bc5a-f693c5889c8a_720x.jpg?v=1642788068",
        price: 5000,
        detail: "Fabricado con materiales de primera calidad y funcional",
        stock:8,
        color: "Black",
    },
    {
        id: 3,
        title: "Techwear Hood",
        img: "https://urbxn-techwear.com/wp-content/uploads/2021/10/techwear-hood-7.jpg",
        price: 9000,
        detail:"Fabricado con materiales de primera calidad y funcional",
        stock: 2,
        color: "Black",
    },
    {
        id: 4,
        title: "Waterproof Techwear Pants",
        img: "https://urbxn-techwear.com/wp-content/uploads/2021/10/techwear-waterproof.jpg",
        price: 5000,
        detail: "Innovadores pantalones impermeables techwear con estilo futurista y táctico",
        stock: 6,
        color: "Black",
    }

]

export default function getPorduct() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), 1000);
});
}

export function getOneProduct(id) {
    return new Promise((resolve, reject) => {
        let productReq = data.find ((prod) => {
            return prod.id === Number(id);
        });
        setTimeout(() => resolve(productReq), 1000);
});
}

