

var initialState = [{
    id: 1,
    name: 'Iphone 6 Plus',
    image: 'https://f3.onrecycle.co.uk/files/images/group/small/39.jpg',
    description: 'Sản phẩm do Apple sản xuất',
    price: 500,
    inventory: 10,
    rating: 5
},{
    id: 2,
    name: 'Samsung Galaxy S7',
    image: 'https://cdn.tgdd.vn/Products/Images/42/74113/samsung-galaxy-s7-2-400x460.png',
    description: 'Sản phẩm do Samsung sản xuất',
    price: 400,
    inventory: 15,
    rating: 4
},{
    id: 3,
    name: 'OPPO F1',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41UFVnYtHrL.jpg',
    description: 'Sản phẩm do Oppo sản xuất',
    price: 450,
    inventory: 5,
    rating: 3
}];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default products;