import axios from "axios";
import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Profile = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [user, setUser] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) return;

        const { data } = await axios.get(`${API_URL}/api/v1/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(data?.data);
      } catch (error) {
        if (axios.AxiosError(error)) {
          console.error(error?.reponse?.data?.status_message);
          return;
        }

        throw new Error(error);
      }
    };
    getPopularMovies();
  }, [API_URL]);
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>User</CardTitle>
        </CardHeader>
        <CardBody>
          <CardTitle>Name: {user?.name}</CardTitle>
          <CardTitle>Email: {user?.email}</CardTitle>
        </CardBody>

        <CardFooter>
          <Link to="/">Back Home</Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default Profile;
