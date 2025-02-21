import { useState } from "react";
import styles from "../styles/author.module.css";

const Author = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setExpandedImage(expandedImage === image ? null : image); // Toggle between expanded and normal state
  };

  return (
    <div className={styles.container}>
      <h2>👤 About the Author</h2>
      <p>Hey there! I'm Samantha Daly and I'm a Junior Developer.</p>
      <p>I have two shetland sheepdogs.</p>

      <div className={styles.images}>
        <img
          src="/0E2C0F4F-430D-4DF1-98B5-C6C046129F70.jpg"
          alt="Shetland Sheepdog 1"
          className={`${styles.image} ${expandedImage === 'image1' ? styles.expanded : ''}`}
          onClick={() => handleImageClick('image1')}
        />
        <img
          src="/8B315AA3-FF21-4BD1-89E9-26E8D3F7C0F6.JPG"
          alt="Shetland Sheepdog 2"
          className={`${styles.image} ${expandedImage === 'image2' ? styles.expanded : ''}`}
          onClick={() => handleImageClick('image2')}
        />
      </div>

      <p>
        I started my career as a translator and e-commerce executive, which gave me a problem-solving mind and experience working in multicultural teams around the world with people from different backgrounds.
        However, my passion for games eventually led me to programming, where I found endless opportunities to explore my creative side and tackle diverse challenges.
      </p>
      <p>
        My experience in digital marketing and web analytics paired with programming languages gives me an edge when it comes to developing solutions through responsive web applications, platforms, and other tools that simplify complex problems for an international audience.
      </p>
    </div>
  );
};

export default Author;