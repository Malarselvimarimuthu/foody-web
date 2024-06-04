import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import { Button, Card, Carousel } from 'react-bootstrap';

export default function OnlineOrder() {
  const imageFilenames = [
    'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png',
    'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png',
    'https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png',
    'https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png',
    'https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png',
    'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png'
  ];
  const cardsContainer1 = [
    {
      title: 'Card Title 1',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/ee/ab/bc/paneer-veggie-platter.jpg?w=600&h=400&s=1'
    },
    {
      title: 'Card Title 2',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://static.toiimg.com/photo/57867312.cms'
    },
    {
      title: 'Card Title 3',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://i.ytimg.com/vi/Zom7TfS1qao/sddefault.jpg'
    },
    {
      title: 'Card Title 4',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://media.istockphoto.com/id/1405551683/photo/fish-fry-on-a-frying-pan-with-curry-leaves-close-up-shot-of-indian-traditional-kerala-style.jpg?s=612x612&w=0&k=20&c=XFV1zpxmW0QVaEQtTqahAV1CHiP6AfDTOBTUB7oVROE='
    },
    {
      title: 'Card Title 5',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://c.ndtvimg.com/2020-06/md20qlqo_curry_625x300_20_June_20.jpg'
    },
    {
      title: 'Card Title 6',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://www.shutterstock.com/image-photo/chicken-curry-dosa-south-indian-600nw-2249889337.jpg'
    },
    {
      title: 'Card Title 7',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://i.ytimg.com/vi/UfsFL_71YYw/maxresdefault.jpg'
    },
    {
      title: 'Card Title 8',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://i.ytimg.com/vi/8bqiXxdPAMI/maxresdefault.jpg'
    },
  ];

  const cardsContainer2 = [
    {
      title: 'Card Title A',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://sambarcafe.com/wp-content/uploads/2022/10/Appam_500x500.png'
    },
    {
      title: 'Card Title B',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20200706153629/iStock-1253648216.jpg'
    },
    {
      title: 'Card Title C',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://assets.vogue.com/photos/63d169f727f1d528635b4287/master/w_2560%2Cc_limit/GettyImages-1292563627.jpg'
    },
    {
      title: 'Card Title D',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://64.media.tumblr.com/023a47b8420421eb25121ded24d4224b/tumblr_onv6xmu0ec1sjhf2bo1_500.jpg'
    },
    {
      title: 'Card Title E',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://static.vecteezy.com/system/resources/thumbnails/035/376/005/small_2x/ai-generated-south-indian-food-idli-sambar-with-coconut-chutney-photo.jpg'
    },
    {
      title: 'Card Title F',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://c.ndtvimg.com/2023-01/n0aamqh_south-indian-food_625x300_17_January_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675'
    },
    {
      title: 'Card Title G',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://m.media-amazon.com/images/I/71We1JU6EpL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      title: 'Card Title H',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://i0.wp.com/travelgenes.com/wp-content/uploads/2020/10/Uttappam.jpg'
    },
  ];
  
 
    const chunkArray = (array: any[], chunkSize: number) => {
      const results = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        results.push(array.slice(i, i + chunkSize));
      }
      return results;
    };
  
    const cardChunksContainer1 = chunkArray(cardsContainer1, 4);
    const cardChunksContainer2 = chunkArray(cardsContainer2, 4);
  

  return (
    
    <div style={{backgroundColor: 'black',
     backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/026/794/680/small_2x/double-hamburger-isolated-on-white-background-fresh-burger-fast-food-with-beef-and-cream-cheese-realistic-image-ultra-hd-high-design-very-detailed-free-photo.jpg)',
     backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
   }}>
    <div>
      
      <br></br>
      

<Container>
      <h1 className="text-white">Inspiration to the First Order</h1>
      <br />
      <div className="d-flex align-items-center">
        <div className="flex-grow-1" style={{ overflowX: 'auto' }}>
          <Row className="flex-nowrap custom-gap">
            {imageFilenames.map((filename, index) => (
              <Col key={index} xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center">
                <div className="text-center">
                  <img src={filename} alt={`Image ${index + 1}`} className="img-fluid small-img mb-2" />
                  <p className="text-white">Image {index + 1}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
      

     
    <h2 style={{textAlign:'center',fontFamily:'times new Roman',fontSize:30,color:'white'}}><b>Indian meat dishes</b></h2>
     
      <Container className="mt-4">
      <Carousel>
        {cardChunksContainer1.map((chunk, idx) => (
          <Carousel.Item key={idx}>
            <Row>
              {chunk.map((card, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Card style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '250px', overflow: 'hidden' }}>
                      <Card.Img
                        variant="top"
                        src={card.imgSrc}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
      <h2 style={{textAlign:'center',fontFamily:'times new Roman',fontSize:30,color:'white'}}><b>South Indian Food</b></h2>
      
      <Container className="mt-4">
      <Carousel>
        {cardChunksContainer2.map((chunk, idx) => (
          <Carousel.Item key={idx}>
            <Row>
              {chunk.map((card, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Card className="h-100">
                    <div style={{ height: '250px', overflow: 'hidden' }}>
                      <Card.Img
                        variant="top"
                        src={card.imgSrc}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <Button variant="primary" className="mt-auto">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>

      <br></br><br></br> 
    </div>
    </div>
  );
}