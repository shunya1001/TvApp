import { Carousel } from 'react-carousel-minimal';

function App() {
 const data = [
    {
        image: "../images/m3.jpg",
        caption: "Movies"
      }, 
    {
      image: "../images/m1.jpg",
      caption: "Movies"
    },
   {
        image: "../images/m4.jpg",
        caption: "Movies"
      },    {
        image: "../images/m5.jpg",
        caption: "Movies"
      },    {
        image: "../images/m6.jpeg",
        caption: "Movies"
      },    {
        image: "../images/m7.jpeg",
        caption: "Movies"
      },    {
        image: "../images/m8.jpeg",
        caption: "Movies"
      },    {
        image: "../images/m9.jpeg",
        caption: "Movies"
      },    {
        image: "../images/m10.jpeg",
        caption: "Movies"
      },
      {
        image: "../images/m11.jpeg",
        caption: "Movies"
      },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className=" bg-black py-8">
      <div style={{ textAlign: "center" }}>
        
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="1200px"
            height="350px"
            captionStyle={captionStyle}
            radius="10px"
            // slideNumber={true}
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;