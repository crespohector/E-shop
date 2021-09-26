from flask import Blueprint, request
from app.models import Order, db

order_routes = Blueprint('orders', __name__)

@order_routes.route('/user/<userId>/')
def orders(userId):
    '''
    GET all orders by user Id
    '''
    orders = Order.query.filter(Order.user_id == userId).all()
    return {'orders': [order.to_dict() for order in orders]}

@order_routes.route('/<orderId>/')
def order_by_id(orderId):
    '''
    GET a specific order
    '''
    order = Order.query.get(orderId)
    return order.to_dict()


@order_routes.route('/user/<userId>/', methods=['POST'])
def create_order(userId):
    '''
    POST create an order with userid
    '''
    #create an Order
    #db.session.add the order to the db
    #IDK if order will be immidiatly updated after add if not just commit it
    #then, i will find the order by its primary key
    #iterate to create and db.session.add the order_product
    #update it to the db
    #make sure to return the created order with order_product
    #to to the front end

    #figure out how to get the orderProducts array from the backend side

    data = request.data
    print('DATA: ', data)

    # order = Order(
    #     user_id=userId
    # )

    # db.session.add(order)
    # db.session.commit()
    # return order.to_dict()
    return {"order": 'orders'}
