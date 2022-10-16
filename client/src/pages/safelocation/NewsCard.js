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
      <Card style={{ width: '30rem' }} >
        <Card.Body>
          <Card.Title>Emergency Alert</Card.Title>
          <Card.Text>
            National Weather Service: A FLASH FLOOD WARNING is in effect for this area until 8:00PM EST. This is a dangerous and life-threatening situation. Do not attempt to travel unless you are fleeing an area subject to flooding or under an evacuation order.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Emergency Alert</Card.Title>
          <Card.Text>
            National Weather Service: A HURRICANE WARNING is in effect for this area for dangerous and damaging winds. This warning is issued up to 36 hours before hazardous conditions begin. Urgently complete efforts to protect life and property. Have food, water, cash, fuel, and medication for 3+ days. FOLLOW INSTRUCTIONS FROM LOCAL OFFICIALS.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Emergency Alert</Card.Title>
          <Card.Text>
            National Weather Service: Snow squall warning until 6:45PM. Slow Down! Rapid changes in visibility and road conditions are expected with this dangerous snow squall. Be alert for sudden whiteout conditions.
          </Card.Text>
        </Card.Body>
      </Card>
    </Stack>
  )
}

export default NewsCard