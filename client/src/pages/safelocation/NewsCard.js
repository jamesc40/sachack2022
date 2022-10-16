import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

function NewsCard() {

//   const url = "https://rss.nytimes.com/services/xml/rss/nyt/Climate.xml"
//   const [news, setNews] = useState([{}])


//   useEffect(() => {
//     fetch(url)
//     .then(response => response.json())
//     .then (news => setNews(news))
// },[])

// console.log(news)

  return (
    <Stack className="news-card">
      <Card style={{ width: '35rem' }} >
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
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Flood Alert</Card.Title>
          <Card.Text>
            Hide your car!
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