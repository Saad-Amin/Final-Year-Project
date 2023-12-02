from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
import uuid
import os
from findSimilarites import check_CV,check_Score
from model import create_tables

app = Flask(__name__)
CORS(app,supports_credentials=True)

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'pdf'}  # Specify the allowed file extensions

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# PostgreSQL configuration
db_config = {
    'user': 'postgres',
    'password': 'root',
    'host': 'localhost',
    'port': '5432',
    'database': 'Automated_Interview'
}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Connect to PostgreSQL
def connect_to_db():
    conn = psycopg2.connect(**db_config)
    return conn, conn.cursor()

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

# Get Questions and Answers
@app.route('/getqa',methods=['GET'])
def getq():
    try:
        ques = ['How does machine learning impact software testing?','Explain the concept of a microservices API gateway?','What are the key security considerations in web application development?','Discuss the advantages and challenges of using serverless architecture?','What is the role of a database administrator (DBA) in software projects?']   
        return jsonify({
            "questions" : ques
        })
    except Exception as e:
        print()

# Get Score By Comparing Ansers
@app.route('/getscore',methods=['POST'])
def getscore():
    try:
        data = request.get_json()
        user_answers = data['cleanedAnswers']
        
        ans = ['ML automates testing tasks, detects patterns, and enhances coverage. It predicts defects and improves efficiency.','A microservices API gateway manages communication, handles authentication, and ensures a unified interface.','Secure coding, input validation, encryption, proper authentication, and regular updates are crucial for web app security.','Serverless offers automatic scaling and reduced overhead but faces challenges like cold start latency and limited execution time.','DBAs manage databases, design schema, optimize queries, implement backup strategies, and ensure data integrity.']
        
        score = 0
        for i in range(5):
            if check_Score(user_answers[i],ans[i]) > 70:
                score += 1
        
        return jsonify({
            "user_score" : score 
        })
    except Exception as e:
        print()

# Upload CV And Find Similarites   
@app.route('/upload-cv', methods=['POST'])
def upload_cv():
    # Check if the POST request has the file part
    if 'cv' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['cv']
    fileName = request.form.get('filename')
    # print("FILE Name is : ",file.filename)

    file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
    match = check_CV(fileName)
    return jsonify({
        'message': 'File uploaded successfully',
        'CV_match_score' : match,
        'file_name' : fileName
        }), 200

if __name__ == '__main__':
    app.run(debug=True)
