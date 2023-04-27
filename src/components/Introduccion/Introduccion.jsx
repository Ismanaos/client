import Card from 'react-bootstrap/Card';
import './Introduccion.css'

function Introduccion() {
    return (
      <div className='obg'>
        <Card className="bg-dark text-black">
          <Card.Img 
          src="https://cdn.photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg" alt="Card image"
          style={{ width: "100%", height: "300px" }}
          />
          <Card.ImgOverlay>
            <Card.Title>Sobre Nostros</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>  
    );
  }

export default Introduccion;