from app.models import db, Order, Product

# Adds a demo user, you can add other orders_products here if you want
def seed_orders_products():

    #find 3 products
    product_1 = Product.query.get(1)
    product_2 = Product.query.get(2)
    product_3 = Product.query.get(3)

    #find the first order I created
    order_1 = Order.query.get(1)

    order_1.products.append(product_1)
    order_1.products.append(product_2)
    order_1.products.append(product_3)

    db.session.add(order_1)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the orders_products table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_orders_products():
    db.session.execute('TRUNCATE orders_products RESTART IDENTITY CASCADE;')
    db.session.commit()
