// constants - just a nice cleaner way to store strings inside a variable and reuse the variable instead of messing up writing out strings- prevent mistakes
const GET_PRODUCTS = "product/GET_PRODUCTS";
const GET_ONE_PRODUCT = "product/GET_ONE_PRODUCT"

// actions
//THE ACTION is a pure function, we want to return an object with the type of action and payload (data)
//NOTICE how there is no return keyword. That is because we are using fat arrow syntax which we are implicitly returning the object

const getProducts = (data) => ({
    type: GET_PRODUCTS,
    data: data
})

const getOneProduct = (data) => ({
    type: GET_ONE_PRODUCT,
    data: data
})


// thunk actions
//The purpose of a thunk action is to fetch data from our db and then update the redux store by dispatching the action.
// We want to use ES6 syntax to export functions

export const fetchAllProducts = () => async (dispatch) => {
    const res = await fetch('/api/products/', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await res.json();
    console.log('All Products: ', data)
    // we want to dispatch the data we receive from the response (the backend)
    // dispatch(getProducts(data))
}

export const fetchOneProduct = (productId) => async (dispatch) => {
    //fetch
    const res = await fetch(`/api/products/${productId}/`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    //json the response and store it in a variable
    const data = await res.json();
    //dispatch an action with the data
    console.log('One Product: ', data);
    // dispatch(getOneProduct(data))
}

// Reducer
//IMPORTANT- COME BACK TO FIXING THE GETPRODUCTS CASE
export default function reducer(state={}, action) {
    //this will be your slice of state in the Redux store,
    //in your slice of state you can pass in whatever data structure you prefer.
    //generally we want to return an object with all the correct key:value pairs. So the key is the product_id and value is the product(object) itself
    switch (action.type) {
        case GET_PRODUCTS:
            return state
        default:
            return state
    }
}
