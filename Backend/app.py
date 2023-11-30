from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
import uuid

app = Flask(__name__)
CORS(app,supports_credentials=True)

# PostgreSQL configuration
db_config = {
    'user': 'postgres',
    'password': 'root',
    'host': 'localhost',
    'port': '5432',
    'database': 'Automated_Interview'
}

# Function to connect to PostgreSQL
def connect_to_db():
    conn = psycopg2.connect(**db_config)
    return conn, conn.cursor()

# Function to create tables if they don't exist
def create_tables():
    conn, cur = connect_to_db()
    
    # Roles Table
    cur.execute('''
        CREATE TABLE IF NOT EXISTS roles(
            role_id INT PRIMARY KEY,
            role_name VARCHAR(50)
        )
    ''')
    
    # Users Table
    cur.execute('''
        CREATE TABLE IF NOT EXISTS users(
            user_id UUID PRIMARY KEY,
            role_id INT references roles(role_id),
            name VARCHAR(255),
            email varchar(255) unique not null,
            password VARCHAR(255) NOT NULL,
            cnic VARCHAR(255) unique,
            company_name VARCHAR(255),
	        dob VARCHAR(255)
        )
    ''')
    
    # Jobs table
    cur.execute('''
        CREATE TABLE IF NOT EXISTS jobs(
            job_id UUID PRIMARY KEY,
            user_id UUID references users(user_id),
            minimum_education VARCHAR(255),
            job_description varchar(255) NOT NULL,
	        skill_set VARCHAR(255) NOT NULL
        )
    ''')
    
     # Applications table
    cur.execute('''
        CREATE TABLE IF NOT EXISTS applications(
            app_id UUID PRIMARY KEY,
	        job_id UUID REFERENCES jobs(job_id),
	        user_id UUID REFERENCES users(user_id),
	        expected_salary int,
	        notice_period varchar(255),
	        skill_set VARCHAR(255),
	        status INT
        )
    ''')
    
     # Questions table
    cur.execute('''
        CREATE TABLE IF NOT EXISTS question(
            question_id UUID PRIMARY KEY,
            app_id UUID REFERENCES applications(app_id),
            question_text VARCHAR(255),
            answer_text VARCHAR(255),
            score VARCHAR(255)
        )
    ''')

    conn.commit()
    conn.close()

# Initialize tables on startup
create_tables()

# Check Availability of Email
def email_exists(email):
    conn, cur = connect_to_db()
    cur.execute('SELECT EXISTS(SELECT 1 FROM users WHERE email = %s)', (email,))
    result = cur.fetchone()[0]
    conn.close()
    return result

def cnic_exists(cnic):
    conn, cur = connect_to_db()
    cur.execute('SELECT EXISTS(SELECT 1 FROM users WHERE cnic = %s)', (cnic,))
    result = cur.fetchone()[0]
    conn.close()
    return result

# Home Page
@app.route('/',)
def home():
    return "Hello World"
    
# Registration
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        data = request.get_json()
        role_id = data['role_id']
        name = data['name']
        email = data['email']
        password = data['password']
        cnic = data['cnic']
        company_name = data['company_name']
        dob = data['dob']

        if email_exists(email):
            return jsonify(
                {
                    "error" : "Email Already Exists"
                }
            ),201
            
        if cnic_exists(cnic):
            return jsonify(
                {
                    "error" : "CNIC Number Already Exists"
                }
            ),202

        # Generate a unique ID for the user
        user_id = str(uuid.uuid4())

        # Insert user data into the 'users' table
        conn, cur = connect_to_db()
        cur.execute('INSERT INTO users(user_id, role_id, name, email, password, cnic, company_name, dob) VALUES (%s, %s, %s,%s, %s, %s,%s, %s)', (user_id, role_id, name, email, password, cnic, company_name, dob))
        conn.commit()

        # Insert user data into the 'all_users' table
        # cur.execute('INSERT INTO users_info (id, username) VALUES (%s, %s)', (user_id, name))
        # conn.commit()

        # conn.close()
        
        return jsonify(
            {
                "success" : "Registered Successfully"
            }
        )

# Login
@app.route('/login',methods=['POST'])
def login():
    try:
        data = request.get_json()
        email = data['email']
        password = data['password']
        conn, cur = connect_to_db()
        cur.execute('SELECT EXISTS(SELECT 1 FROM users WHERE email = %s AND password = %s )', (email,password))
        result = cur.fetchone()[0]
        conn.close()

        if(result):
            return jsonify(
                {
                    "success" : result
                }
                ),250
        else:
            return jsonify(
                {
                    "error" : "Invalid Email or Password"
                }
                ),200
    except Exception as e:
        print()
        
if __name__ == '__main__':
    app.run(debug=True)
