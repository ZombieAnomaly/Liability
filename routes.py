import MySQLdb
from flask import Flask, render_template   # Import Flask to allow us to create our app.
app = Flask(__name__)   
db = MySQLdb.connect(user="root", passwd="", db="world")


@app.route('/')         

def helloworld():
  c = db.cursor()
  c.execute('SELECT * FROM cities')
  row = c.fetchone()
  headers = ['id','name','country_code','district','population','country_id']
  for col in enumerate(row):
    print(headers[col[0]],"-", col[1])
  return render_template('index.html')   

@app.route('/test') 

def test():
  return 'Hello test!'