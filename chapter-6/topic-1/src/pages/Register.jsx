import axios from "axios";
import { useState } from "react";
import { Form, Button, Card, CardBody, CardHeader } from "react-bootstrap";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log("Name", formData.name);
  console.log("Email", formData.email);
  console.log("Password", formData.password);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { VITE_API_URL: API_URL } = import.meta.env;

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) return;

    try {
      const { data } = await axios.post(
        `${API_URL}/api/v1/auth/register`,
        formData
      );

      console.log("~ 🚀Data", data?.data);

      const token = data?.data?.token;

      // Save token to localStorage
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("~ 🎯", error?.message);

      if (axios.AxiosError(error)) {
        console.error(error?.reponse?.data?.status_message);
        return;
      }

      throw new Error(error);
    }
  };

  return (
    <Card>
      <CardHeader>Login</CardHeader>
      <CardBody>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
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

export default Register;
