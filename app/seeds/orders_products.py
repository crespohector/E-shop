from app.models import db, Order, Product, Order_Product

# Adds a demo user, you can add other orders_products here if you want
def seed_orders_products():

    #find two products
    # product_1 = Product.query.get(1)
    # product_2 = Product.query.get(2)

    #find the first order
    # order_1 = Order.query.get(1)
    # order_1.products.append(product_1)
    # order_1.products.append(product_2)

    
    new_order_product = Order_Product(order_id=1,product_id=1,quantity=1)
    new_order_product_2 = Order_Product(order_id=1,product_id=2,quantity=2)
    # new_order_product = Order_Product(quantity=2)
    # new_order_product.products = product_1
    # order_1.products.append(new_order_product)

    db.session.add(new_order_product)
    db.session.add(new_order_product_2)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the orders_products table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_orders_products():
    db.session.execute('TRUNCATE orders_products RESTART IDENTITY CASCADE;')
    db.session.commit()
