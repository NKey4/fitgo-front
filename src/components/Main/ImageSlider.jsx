import React, { useState, useEffect } from "react";

export const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000); // Изменяет изображение каждые 2 секунды

    return () => clearTimeout(timer); // Очищает таймер при размонтировании компонента
  }, [currentImageIndex, images]);

  return (
    <div className="main_right">
      <img
        src={images[currentImageIndex]}
        alt="logo"
        width={651}
        height={700}
      />
    </div>
  );
};
