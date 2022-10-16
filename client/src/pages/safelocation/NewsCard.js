import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

function NewsCard() {
  return (
    <Stack>
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Incoming Hurricane</Card.Title>
          <Card.Text>
            Hide your kids, hide your wife!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Flood Alert</Card.Title>
          <Card.Text>
            Hide your car!
          </Card.Text>
        </Card.Body>
      </Card>
    </Stack>
  )
}

export default NewsCard