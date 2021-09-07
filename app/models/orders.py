from .db import db
from datetime import datetime


class Order(db.Model):
  __tablename__ = 'orders'

  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  date = db.Column(db.DateTime, nullable=False, default=datetime.now)


  def to_dict(self):
    return {
      "id": self.id,
      "user_id": self.user_id,
      "date": self.date,
    }
