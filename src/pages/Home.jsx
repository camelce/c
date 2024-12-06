import React from 'react';
import { Link } from 'react-router-dom';
import { camelc } from '../utils/json';  // استيراد البيانات من ملف JSON

const Home = () => {
  const categories = Object.keys(camelc);  // استخرج جميع الفئات (news, jobs, etc.)
  window.scrollTo(0, 0); // للتأكد من العودة إلى أعلى الصفحة عند التحميل

  return (
    <div>
      <div className="container">
        <h1 className="heading">Welcome to Our Website!</h1>
        <p className="paragraph">
          Your ultimate destination for <strong>news</strong>, <strong>articles</strong>, and{' '}
          <strong>job opportunities</strong> from around the globe.
        </p>
      </div>

      <div className="card-container">
        {categories.map((category, index) => (
          <div key={index} className="card">
            <Link to={`/c/${category}`} className="card-link"> 
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