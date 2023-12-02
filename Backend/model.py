import psycopg2

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