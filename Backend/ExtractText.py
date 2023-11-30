#!/usr/bin/env python
# coding: utf-8

# In[2]:


print("saad")


# In[3]:


pip install pyPDF2


# In[4]:


import PyPDF2


# In[2]:


from PyPDF2 import PdfReader

reader = PdfReader("SaadAminSQAEngr.pdf")
page = reader.pages[0]
actualText = page.extract_text()
print(actualText)


# In[8]:


import re


# In[9]:


match = re.search(r'[\w\.-]+@[a-z0-9\.-]+', actualText)
email= match.group(0)
print(email)


# # Find Similarities Between Resume & Job Discription

# In[2]:


get_ipython().system('pip install spacy')


# In[3]:


get_ipython().system('python -m spacy download en_core_web_lg')


# In[4]:


import spacy

nlp = spacy.load("en_core_web_lg")


# In[12]:


# w1= "i believe in the god of the bible"
# w2= "i turst in a higher power of chistiannity"
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
print("Similarities Between Resume & Job Discription is",final_similarity,"%")


# In[11]:


# w1 = """[Your Name]
# [Your Address]
# [Your City, State, ZIP Code]
# [Your Phone Number]
# [Your Email Address]
# [LinkedIn Profile]

# **Objective:**
# Experienced Front-End Developer with a strong track record of creating visually appealing, user-friendly web applications. Proficient in HTML, CSS, and JavaScript, and skilled in utilizing popular frameworks like React. Committed to delivering high-quality, performant, and responsive web experiences.

# **Professional Experience:**

# **Front-End Developer**
# [Company Name], [Location]
# [Dates of Employment]

# - Collaborated with UX/UI designers and back-end developers to create responsive and visually engaging web interfaces.
# - Utilized HTML, CSS, and JavaScript to develop and optimize user-centric web applications.
# - Ensured cross-browser compatibility and adherence to accessibility standards, resulting in a seamless user experience.
# - Conducted comprehensive testing and debugging to identify and resolve front-end issues.
# - Successfully improved web application performance and load times through code optimization.
# - Consistently met project deadlines and delivered clean, well-documented code.

# **Education:**

# Bachelor of Science in Computer Science
# [University Name], [Location]
# [Year of Graduation]

# **Skills:**

# - Front-End Technologies: HTML, CSS, JavaScript, React
# - Responsive Design
# - Cross-Browser Compatibility
# - Performance Optimization
# - Problem Solving
# - Collaboration
# - Documentation

# **Certifications:**
# - [Any relevant certifications]

# **Portfolio:**
# - [Provide a link to your portfolio showcasing your work]

# **References:**
# Available upon request.
# """

# w2 ="""**Job Description: Front-End Developer**

# **Job Overview:**
# We are seeking a talented Front-End Developer to join our dynamic team. As a Front-End Developer, you will be responsible for creating and implementing visually appealing and highly functional web applications. You should have a strong passion for user-centric design, cutting-edge technologies, and the ability to collaborate with cross-functional teams to bring our web projects to life.

# **Key Responsibilities:**

# 1. **Web Development:** Design and develop user-friendly, responsive web interfaces using HTML, CSS, and JavaScript to create engaging user experiences.

# 2. **Collaboration:** Work closely with UX/UI designers, back-end developers, and product managers to ensure seamless integration and optimal performance.

# 3. **Cross-Browser Compatibility:** Ensure consistent functionality and appearance across various browsers and devices.

# 4. **Performance Optimization:** Optimize web applications for speed and efficiency, minimizing load times and improving overall performance.

# 5. **User-Centric Design:** Implement responsive and accessible designs that enhance the user experience and satisfaction.

# 6. **Code Quality:** Write clean, maintainable, and well-documented code, following best practices and coding standards.

# 7. **Testing:** Conduct thorough testing and debugging to identify and fix front-end issues, ensuring a bug-free user experience.

# 8. **Stay Current:** Keep up to date with the latest web development trends, tools, and technologies.

# **Qualifications:**

# - Bachelor's degree in Computer Science or a related field.
# - Proven experience as a Front-End Developer with a strong portfolio showcasing your work.
# - Proficiency in HTML, CSS, JavaScript, and related frameworks (e.g., React, Angular, Vue.js).
# - Familiarity with responsive design principles, cross-browser compatibility, and accessibility standards.
# - Strong problem-solving skills and attention to detail.
# - Excellent communication and collaboration skills."""

# w1= nlp(w1)
# w2= nlp(w2)
# result = w1.similarity(w2)
# final_similarity = round(result*100)
# print("Similarities Between Resume & Job Discription is",final_similarity,"%")


# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# # To Extract skills 

# In[11]:


import re

# Sample text containing skills
text = """
Here are my skills: Programming Languages (Python, Java, C++), Web Development (HTML, CSS, JavaScript),
Data Analysis (Pandas, NumPy, Matplotlib), Databases (SQL, MongoDB), Machine Learning (Scikit-Learn, TensorFlow).
"""

# Define the regular expression pattern for extracting skills with categories
pattern = r"(\w+ [A-Za-z\s]+) \(([^)]+)\)"

# Extract skills using the regular expression
matches = re.findall(pattern, text)

if matches:
    for match in matches:
        category = match[0]
        skill_list = [skill.strip() for skill in match[1].split(',')]
        # Print the extracted skills for each category
        print(f"{category}: {', '.join(skill_list)}")


# In[ ]:





# In[ ]:




