// constants
const GET_PRODUCTS = "product/GET_PRODUCTS";
const GET_ONE_PRODUCT = "product/GET_ONE_PRODUCT"

// actions
const getProducts = (data) => ({
    type: GET_PRODUCTS,
    data: data
})

const getOneProduct = (data) => ({
    type: GET_ONE_PRODUCT,
    data: data
})


// thunk actions
export const fetchAllProducts = () => async (dispatch) => {
    const res = await fetch('/api/products/', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await res.json();
    dispatch(getProducts(data))
    const products = Object.values(data.products);
    return products;
}

export const fetchOneProduct = (productId) => async (dispatch) => {
    const res = await fetch(`/api/products/${productId}/`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await res.json();
    dispatch(getOneProduct(data))
}

// Reducer
export default function reducer(state={}, action) {
    let newState;
    switch (action.type) {

        case GET_PRODUCTS:
            newState = {...state}
            action.data.products.forEach(product => {
                newState[product.id] = product
            })
            return newState;

        case GET_ONE_PRODUCT:
            newState = {...state}
            newState[action.data.id] = action.data
            return newState;

        default:
            return state
    }
}
