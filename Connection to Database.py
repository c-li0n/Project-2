import sqlite3
from flask import g

DATABASE = './datasets/Tornados22.sqlite'


def get_db():
    db = sqlite3.connect(DATABASE)
    return db


db = get_db()

print(db)

# @app.teardown_appcontext
# def close_connection(exception):
# db = getattr(g, '_database', None)
# if db is not None:
# db.close()
