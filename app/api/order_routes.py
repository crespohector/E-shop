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
    POST create a order with userid
    '''
    order = Order(
        user_id=userId
    )
    db.session.add(order)
    db.session.commit()
    return order.to_dict()
