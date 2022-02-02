from .db import db

class Order_Product(db.Model):
    __tablename__ = 'orders_products'

    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'), primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), primary_key=True)
    quantity = db.Column(db.Integer, nullable=False)

    orders = db.relationship('Order', back_populates="products")
    products = db.relationship('Product', back_populates="orders")


    def to_dict(self):
        return {
      "order_id": self.order_id,
      "product_id": self.product_id,
      "quantity": self.quantity,
    }



#---------------------------------------------------------------------------------------------------------------
# order_product = db.Table(
#     "orders_products",
#     db.Column("order_id",
#     db.Integer,
#     db.ForeignKey("orders.id"),
#     primary_key=True
#     ),
#     db.Column("product_id",
#     db.Integer,
#     db.ForeignKey("products.id"),
#     primary_key=True
#     ),
#     db.Column("quantity",
#     db.Integer,
#     nullable=False,
#     ),
# )
