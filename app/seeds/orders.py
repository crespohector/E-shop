from app.models import db, Order

# Adds a demo user, you can add other orders here if you want
def seed_orders():

    order = Order(user_id = 1)
    db.session.add(order)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the orders table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_orders():
    db.session.execute('TRUNCATE orders RESTART IDENTITY CASCADE;')
    db.session.commit()
