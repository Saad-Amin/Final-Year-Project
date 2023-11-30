import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Jobcard = ({jobtitle, companyName, jobLocation, jobSalaryRange, jobType, jobDescription}) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: '30rem', textAlign: 'left', marginBottom: '15px' }}>
      <Card.Body>
        <Card.Title>{jobtitle}</Card.Title>
        <Card.Subtitle>{companyName}</Card.Subtitle>
        <Card.Text>{jobLocation}</Card.Text>
        <Card.Text style={{
            background: '#b3b0a8',
            padding: '5px',
            margin: 0,
            width: '35%',
            textAlign: 'center',
            fontWeight: 600,
            color: 'white',
            borderRadius: '5px'
        }}>{jobSalaryRange}</Card.Text>
        <Card.Text>{jobType}</Card.Text>
        <Card.Text className='mt-2  '>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => {
          navigate('/login')
        }}>Apply Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Jobcard;