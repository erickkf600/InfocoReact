import React from "react";
import Swiper from 'react-id-swiper';
import { Parallax, Background } from 'react-parallax';
function template() {
  const banners = [
    { name: 'titulo1', url: '../imgs/banner1.jpg' },
    { name: 'titulo2', url: '../imgs/banner2.png' }
  ];
  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    }
  }
  return (
    <div>
      <Swiper {...params} className="slides">
        { banners.map(banner => 
          <Parallax key={banner.name} strength={200} blur={{ min: -15, max: 15 }}>
            <div>Use the background component for custom elements</div>
            <Background className="banner">
              <img src={banner.url} alt="fill murray" />
            </Background>
          </Parallax>
      )}
      </Swiper>
    </div>
  );
};

export default template;
