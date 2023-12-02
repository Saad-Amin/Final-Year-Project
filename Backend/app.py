from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
import uuid
import os
from PyPDF2 import PdfReader
import re
import spacy

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

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'pdf'}  # Specify the allowed file extensions

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def check_CV(fileName):
    reader = PdfReader("uploads/"+fileName)
    page = reader.pages[0]
    actualText = page.extract_text()
    # print(actualText)

    match = re.search(r'[\w\.-]+@[a-z0-9\.-]+', actualText)
    email= match.group(0)
    # print(email)

    # Find Similarities Between Resume & Job Discription
    nlp = spacy.load("en_core_web_lg")
    w1 = actualText
    w2 = """Bachelors degree a Minimum. Excellent verbal, written, and interpersonal communication skills. Experience with
    Automation tools like Cypress, Cross Browser Testing, Selenium, Performance testing tools, Browser Debuggers. Must be a 
    self-motivator and self-starter. Exceptional listening and analytical skills. Excellent time management skills. Must be 
    able to interact with people at all levels within the organization effectively. Must be proficient in following technical 
    processes and documentation. Ability to multitask and successfully operate in a fast-paced, team environment. Must adapt well
    to change and successfully set and adjust priorities as needed. Must be proficient with Microsoft Office and Excel. Job 
    Responsibilities:A quality assurance specialist to ensure the company's quality standards in the final product. In general, 
    the QA professional will be responsible for the development and implementation of inspection activities, the detection and 
    resolution of problems, and the delivery of satisfactory outcomes. Should any defects be found, its up to the QA specialist
    to apply corrective actions, like test software, systems, and workflows for errors and verification before and during 
    deployment. Test current products and identifying deficiencies. Suggest solutions to identified product problems. Investigate 
    product quality in order to make improvements to achieve better customer satisfaction. Plan, create and manage the overall 
    Quality Planning strategy. Collaborate with the Product Development team to ensure consistent project execution. Identify 
    quality assurance process bottleneck and suggest actions for improvement. Oversee continuous improvement projects. Collect 
    quality data. Identify key KPIs for product quality."""
    w1= nlp(w1)
    w2= nlp(w2)
    result = w1.similarity(w2)
    final_similarity = round(result*100)
    # print("Similarities Between Resume & Job Discription is",final_similarity,"%")
    return final_similarity

@app.route('/upload-cv', methods=['POST'])
def upload_cv():
    # Check if the POST request has the file part
    if 'cv' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['cv']
    fileName = request.form.get('filename')
    print("FILE Name is : ",file.filename)

    # Save the uploaded file to the designated folder
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
    match = check_CV(fileName)
    return jsonify({
        'message': 'File uploaded successfully',
        'CV_match_score' : match,
        'file_name' : fileName
        }), 200


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
