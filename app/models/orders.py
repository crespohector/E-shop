from .db import db
from datetime import datetime


class Order(db.Model):
  __tablename__ = 'orders'

  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)


  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "price": self.price,
      "description": self.description,
      "image": self.image,
      "category": self.category
    }
