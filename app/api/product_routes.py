from flask import Blueprint
from app.models import Product, db

product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def products():
    '''
    GET all products
    '''
    products = Product.query.all()
    return {'products': [product.to_dict() for product in products]}
    

@product_routes.route('/<productId>/')
def product_by_id(productId):
    '''
    GET a specific product by its id
    '''
    #how to get the product id
    # print('PRODUCT ID: ', productId)
    product = Product.query.get(productId)
    return product.to_dict()
