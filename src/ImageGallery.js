import React, { useState } from 'react';

const images = [
  { id: 1, url: '/dog.jpg', thumbnail: '/dog.jpg' },
  { id: 2, url: '/pic1.jpg', thumbnail: '/pic1.jpg' },
  { id: 3, url: '/pic2.jpg', thumbnail: '/pic2.jpg' },
  { id: 4, url: '/pic3.jpg', thumbnail: '/pic3.jpg' },];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0].url);

  return (
    <div>
      <img src={selectedImage} alt="Selected" style={{ width: '350px', height: '350px', display: 'block', margin: 'auto' }} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        {images.map(image => (
          <img
            key={image.id}
            src={image.thumbnail}
            alt={`Thumbnail ${image.id}`}
            style={{ margin: '0 5px', cursor: 'pointer', width: '50px', height: '50px' }}
            onClick={() => setSelectedImage(image.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
