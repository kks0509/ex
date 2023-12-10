import React from 'react';

export default function Product() {
  const product = [
    {
      name: 'Female Hoodie Crop top with Mask',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/5ae4337c11464ccda6050085e4878cf0/embed?ui_theme=dark&dnt=1',
    },
    {
      name: 'Pencil Skirt Sleeveless Dress',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/0a035326ed6c403183a407baec543604/embed?ui_theme=dark',
    },
    {
      name: 'Female Turtle-neck one piece',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/9f471178fe004dc180fc612736182100/embed',
    },
    {
      name: 'Outer / Jumper / Down Jacket',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/de1f1663c8b346ca999247504e9cd605/embed',
    },
    {
      name: 'Armjak. 19th century.',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/c5a53cf7ffe046e0973590ed6f139da3/embed',
    },
    {
      name: 'Men Short Sleeved Solid Color Polo',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/670dad551f4243e39f116f5e5e038a5e/embed',
    },
    {
      name: 'Sage Collection: Cargo Pants',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/ba7b2a55f4f04164bc087ab87322317a/embed',
    },
    {
      title: 'Men Long Sleeved Collar Stand Polo',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/cbcff5c160854e83a689572d1e3fde83/embed',
    },
    {
      title: 'Jacket',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/b82c3b5584114a40b6d7e028f680c1d0/embed',
    },
    {
      title: 'LEATHER JACKET',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/9ae7c88201eb42cdbb072d551c89d042/embed',
    },
  ];
  return (
    <div className="text-center ml-4">
      <h1 className="text-9xl md:text-16xl font-bold py-10">
        3D Models
      </h1>
      <br></br><br></br><br></br><br></br><br></br>
      <div
        className="sketchfab-embed-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        {product.map((product, index) => (
          <div
            key={index}
            style={{ textAlign: 'center', marginBottom: '20px' }}
          >
            <iframe
              name={product.name}
              frameborder="0" 
              allowfullscreen 
              mozallowfullscreen="true" 
              webkitallowfullscreen="true" 
              allow="autoplay; fullscreen; xr-spatial-tracking" 
              xr-spatial-tracking 
              execution-while-out-of-viewport 
              execution-while-not-rendered 
              web-share 
              width="680" 
              height="440"
              src={product.modelSrc}
            ></iframe>
            <p style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>
              {product.name}
            </p>
            <p style={{ color: 'gray' }}>{`₩${product.price}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}