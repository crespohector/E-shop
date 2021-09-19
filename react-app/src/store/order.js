const GET_ORDERS = "order/GET_ORDERS"
const GET_ONE_ORDER = "order/GET_ONE_ORDER"

//actions
const getOrders = (data) => ({
    type: GET_ORDERS,
    data: data,
})

const getOneOrder = (data) => ({
    type: GET_ONE_ORDER,
    data: data
})

//thunk actions
export const fetchAllOrders = (userId) => async (dispatch) => {
    const res = await fetch(`/api/orders/user/${userId}/`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await res.json();
    // console.log('all orders from user: ', data);
    dispatch(getOrders(data))
}

export const fetchOneOrder = (orderId) => async (dispatch) => {
    const res = await fetch(`/api/orders/${orderId}/`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await res.json();
    console.log('Specific order: ', data)
    dispatch(getOneOrder(data))
}

//Reducer
export default function reducer(state={}, action) {
    let newState;
    switch(action.type){
        case GET_ORDERS:
            newState = {...state}
            action.data.orders.forEach(order => {
                newState[order.id] = order
            })
            return newState;

        case GET_ONE_ORDER:
            newState = {...state}
            newState[action.data.id] = action.data;
            return newState;

        default:
            return state;
    }
}
