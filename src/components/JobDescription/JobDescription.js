import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const JobDescription = ({
  jobtitle,
  companyName,
  jobLocation,
  jobSalaryRange,
  jobType,
  // jobDetailedDescription,
  // jobApply,
}) => {
  return (
    <Card
      style={{
        position: "sticky",
        top: 70,
        width: "35rem",
        textAlign: "left",
        marginBottom: "15px",
      }}
    >
      <Card.Body>
        <Card.Title>{jobtitle}</Card.Title>
        <Card.Subtitle>{companyName}</Card.Subtitle>
        <Card.Text>{jobLocation}</Card.Text>
        <Card.Text
          style={{
            background: "#b3b0a8",
            padding: "5px",
            margin: 0,
            width: "35%",
            textAlign: "center",
            fontWeight: 600,
            color: "white",
            borderRadius: "5px",
          }}
        >
          {jobSalaryRange}
        </Card.Text>
        <Card.Text>{jobType}</Card.Text>
        <Card.Title>Job Description</Card.Title>
        <Card.Text
          className="mt-2"
          style={{
            textAlign: "justify",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Card.Text>
        <Button
          variant="primary"
          style={{ width: "50%",}}
        >
          Apply Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default JobDescription;
