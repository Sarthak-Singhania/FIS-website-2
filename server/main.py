from flask import Flask, request, make_response
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin
import MySQLdb.cursors as cur

app=Flask(__name__)

cors=CORS(app)
mysql=MySQL(app)

app.config['CORS_HEADERS'] = 'Content-Type'
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'fis'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_DB'] = 'fis'
app.config['JSON_SORT_KEYS'] = False

@app.get('/')
def welcome():
    return make_response({'message':'welcome'})

@app.post('/login')
@cross_origin()
def login():
    x=request.get_json()
    cursor = mysql.connection.cursor(cur.DictCursor)
    print(x)
    cursor.execute(f"select exists(select users.User_Name from users,password where password.Password={x['password']}) as login")
    # a=f"select exists(select from users, password where users.User_Name={x['user_name']} and password.Password={x['password']})"
    # print(a)
    a=cursor.fetchone()
    print(a)
    return make_response({'message':a})

@app.post('/register')
@cross_origin()
def register():
    x=request.get_json()
    cursor=mysql.connection.cursor(cur.DictCursor)
    cursor.execute(f"insert into users (User_Name,Email) values ({x['user_name']},{x['email']})")
    mysql.connection.commit()
    cursor.execute(f"insert into password (User_Name,Password) values ({x['user_name']},{x['password']})")
    mysql.connection.commit()
    cursor.execute(f"insert into level (User_Name,Level) values ({x['user_name']},'basic')")
    mysql.connection.commit()
    try:
        a=cursor.fetchone()
    except:
        a=None
    return make_response({'message':a if a else "done"})

if __name__=='__main__':
    app.run(debug=True)