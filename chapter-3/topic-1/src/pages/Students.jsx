import Layout from "../layouts/Layout";
import studentsJSON from "../data/students.json";
import { Col, Row } from "react-bootstrap";
import Student from "../components/Student";

const Students = () => {
  // const [students, setStudents] = useState(studentsJSON);

  return (
    <Layout>
      <Row className="justify-content-center">
        {studentsJSON?.map((student) => {
          return (
            <Col key={student.id} md={3} className="g-3">
              <Student name={student.name} className={student.class} />
            </Col>
          );
        })}
      </Row>
    </Layout>
  );
};

export default Students;
