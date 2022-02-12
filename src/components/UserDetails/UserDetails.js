import React from 'react'
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap";

export default function UserDetails() {
  const UserDetailsRetrived = localStorage.getItem('userData');
  const parsedUserDetailData = JSON.parse(UserDetailsRetrived);
  console.log(parsedUserDetailData.Firstname)
  return (
    <Card className="Admin">
      <Card.Body>
        <Card.Title>Hi {parsedUserDetailData.Firstname}</Card.Title>
        <Card.Text>
          Welcome to your admin account.
    </Card.Text>
        <Link to="/Login"
          style={{ textDecoration: 'none' }}
        >Sign out.
          </Link>
      </Card.Body>
    </Card>
  )
}
