import axios from "axios";
import { useState } from "react";
import { Button, Card, CardBody, CardHeader, Form } from "react-bootstrap";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `https://shy-cloud-3319.fly.dev/api/v1/auth/login`,
        formData
      );

      const token = data.data.token;

      console.log("~🚀 Token", token);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Card>
      <CardHeader>Login</CardHeader>
      <CardBody>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default Login;
