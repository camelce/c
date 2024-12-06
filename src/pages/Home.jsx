import React from 'react';
import { Link } from 'react-router-dom';
import { camelc } from '../utils/json';  // استيراد البيانات من ملف JSON

const Home = () => {
  const categories = Object.keys(camelc);  // استخرج جميع الفئات (news, jobs, etc.)
  window.scrollTo(0, 0);

  return (
    <div>
      <div className="container">
        <h1 className="heading">Welcome to Our Website!</h1>
        <p className="paragraph">
          Your ultimate destination for <strong>news</strong>, <strong>articles</strong>, and{' '}
          <strong>job opportunities</strong> from around the globe.
        </p>
        <p className="paragraph">
          Our mission is to be your go-to source for valuable information and inspiration to meet your
          everyday needs. Stay connected with us to stay informed and inspired! 🌍
        </p>
      </div>

      

      <div className="card-container">
        {categories.map((category, index) => (
          <div key={index} className="card">
            <Link to={`/${category}`} className="card-link"> 
              <img src={`/c/assets/${category}.jpg`} alt={category} className="imgfordiv" />
              <div className="divName">
                <strong>{category}</strong>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
