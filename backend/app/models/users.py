from app import db
from flask_bcrypt import generate_password_hash, check_password_hash

class User(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(100), nullable=False)
    cpf= db.Column(db.String(11), nullable=False, unique=True)
    rg= db.Column(db.String(9), unique=True)
    birth= db.Column(db.Date, nullable=False)
    gender= db.Column(db.String(15), nullable=False)
    email= db.Column(db.String(100), nullable=False, unique=True)
    password= db.Column(db.String(255), nullable=False)
    sec= db.Column(db.Boolean, default=False)
    device = db.Column(db.String(255))
    createdAt = db.Column(db.Datetime, nullable=False)
    updatedAt= db.Column(db.Datetime, nullable=False)
    active= db.Column(db.Boolean, default=True)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password).decode('utf8')

    def check_passwprd(self, password):
        return check_password_hash(self.password_hash, password)