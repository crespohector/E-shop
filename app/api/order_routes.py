from flask import Blueprint, request
from app.models import Order, Order_Product, db

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
    GET a specific Order with the products associated with the Order
    '''
    #todo- might have to fetch the products associated with the order and send it to the front
    order = Order.query.get(orderId)
    #query through the joins table of order_products and filter out only all the records where orderId is whatever
    order_products = Order_Product.query.filter(Order_Product.order_id == orderId).all()
    return {'order': order.to_dict(), 'products': [order_product.to_dict() for order_product in order_products]}


@order_routes.route('/user/<userId>/', methods=['POST'])
def create_order(userId):
    '''
    POST create an order with userid
    '''
# 1.) query the Order table
# 2.) use the order_by method to query through the Order model in desc order
# 3.) grab the first record by using the first method
    # new_order = Order.query.order_by(Order.id.desc()).first()
    data = request.json
    products = data['products']
    order = Order(
        user_id=userId
    )
    db.session.add(order)
    # make sure to update the db to have the new order
    db.session.commit()
    new_order = order.to_dict()

    for product in products:
        new_order_product = Order_Product(order_id=new_order['id'],product_id=product["productId"],quantity=product["quantity"])
        db.session.add(new_order_product)

    db.session.commit()
    #what should we respond to the cliend side
    return order.to_dict()
