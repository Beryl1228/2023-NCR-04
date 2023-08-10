
item = {
    price: ...,
    name: ...
}

cartItem = {
    count: ...,
    item: ...
}

cartData = {
    id => cartItem
}

cartData = {
    1: {
        count: 2,
        item: {
            id: 1,
            name: ...,
            price: ...
        }
    },
    2: {
        count: ...,
        item: {
            id: 2,
            ...
        }
    }
}
