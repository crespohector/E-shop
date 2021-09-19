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
    // console.log('All Products: ', data)
    dispatch(getProducts(data))
}

export const fetchOneProduct = (productId) => async (dispatch) => {
    //fetch
    const res = await fetch(`/api/products/${productId}/`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await res.json();
    // console.log('One Product: ', data);
    dispatch(getOneProduct(data))
}

// Reducer
export default function reducer(state={}, action) {
    //this will be your slice of state in the Redux store,
    //in your slice of state you can pass in whatever data structure you prefer.
    //generally we want to return an object with all the correct key:value pairs. So the key is the product_id and value is the product(object) itself
    let newState;
    switch (action.type) {
        case GET_PRODUCTS:
            //rule of thumb is we want to grab a copy of the current slice of start.
            newState = {...state}
            action.data.products.forEach(product => {
                newState[product.id] = product
            })
            return newState;
            //If you set the slice of state to be an array. It is fine but if you need to find a specific product
            //in the array, you will have to iterate through the entire array to find the product.
            //But with grabbing a copy of the state and creating key:value pairs, you now have easy access to
            //find any specific product in constant time.
            //  return action.data.products
        case GET_ONE_PRODUCT:
            newState = {...state}
            newState[action.data.id] = action.data
            return newState;
        default:
            return state
    }
}
