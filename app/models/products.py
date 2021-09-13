from .db import db

class Product(db.Model):
  __tablename__ = 'products'

  id = db.Column(db.Integer, primary_key = True)
  title = db.Column(db.String(150), nullable = False)
  price = db.Column(db.Integer, nullable=False)
  description = db.Column(db.String, nullable=False)
  image = db.Column(db.String, nullable=False)
  category = db.Column(db.String(99), nullable=False)

  orders = db.relationship('Order_Product', back_populates="products")


def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "price": self.price,
      "description": self.description,
      "image": self.image,
      "category": self.category
    }
