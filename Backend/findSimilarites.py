from PyPDF2 import PdfReader
import re
import spacy

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
    return final_similarity

def check_Score(userAnswer,actualANswer):
    # Find Similarities Between User Answers and Actual ANswers
    nlp = spacy.load("en_core_web_lg")
    w1 = userAnswer
    w2 = actualANswer
    w1= nlp(w1)
    w2= nlp(w2)
    result = w1.similarity(w2)
    final_similarity = round(result*100)
    return final_similarity
