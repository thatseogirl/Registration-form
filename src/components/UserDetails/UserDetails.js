import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function UserDetails() {
  const UserDetailsRetrived = localStorage.getItem("userData");
  const parsedUserDetailData = JSON.parse(UserDetailsRetrived);
  return (
    <Card className="Admin">
      <Card.Body>
        <Card.Title>Hi {parsedUserDetailData.Firstname}</Card.Title>
        <Card.Text>Welcome to your admin account.</Card.Text>
        <Link
          to="/Login"
          style={{
            textDecoration: "none",
            color: "#4A87CA",
          }}
        >
          Sign out.
        </Link>
      </Card.Body>
    </Card>
  );
}
