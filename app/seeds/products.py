from app.models import db, Product
import requests

r = requests.get('https://fakestoreapi.com/products')
products = r.json()

# Adds a demo user, you can add other products here if you want
def seed_products():

    for product in products:
        new_product = Product(title=product['title'], price=product['price'], description=product['description'],
                                category=product['category'], image=product['image'])
        db.session.add(new_product)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the products table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
