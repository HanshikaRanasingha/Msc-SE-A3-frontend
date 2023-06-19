import React from 'react';
import Carousel from 'better-react-carousel';

export const CarousalComponent = () => {
  return (
    <Carousel cols={1} rows={1} gap={10} loop autoplay={5000} containerStyle={{ height: '500px' }}>
      <Carousel.Item>
        <img width={'100%'} height={'500px'} src={require('../../assets/carousal1.jpeg')} />
      </Carousel.Item>
      <Carousel.Item>
        <img width={'100%'} height={'500px'} src={require('../../assets/carousal2.jpeg')} />
      </Carousel.Item>
      <Carousel.Item>
        <img width={'100%'} height={'500px'} src={require('../../assets/carousal3.jpeg')} />
      </Carousel.Item>
    </Carousel>
  );
};
