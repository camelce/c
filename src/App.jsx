

// import React, { useState } from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // استيراد createBrowserRouter و RouterProvider
// import Nav1 from './components/Nav1';
// import Footer from './components/Footer';
// import './styles/App.css';
// import './styles/dark_mode.css';
// import Home from './pages/Home.jsx';
// import { Navigate } from 'react-router-dom';
// import ItemDetail from './pages/ItemDetail.jsx';
// import ArticleDetail from './pages/ArticleDetail.jsx';

// // تعريف المسارات

// const router = createBrowserRouter(
//   [
//     {
//       path: "/c/",
//       element: <Home />,
//     },
//     // {
//     //   path: "/",
//     //   element: <Home />,
//     // },
//     {
//       path: "/c/:type",
//       element: <ItemDetail />,
//     },
//     {
//       path: "/c/:type/:id",
//       element: <ArticleDetail />,
//     },
//     {
//       path: "*",
//       element: <Navigate to="/" replace />,
//     },
//   ],
//   {
//     future: {
//       v7_startTransition: true,   // تفعيل الميزة
//       v7_fetcherPersist: true,     // تفعيل الميزة
//       v7_normalizeFormMethod: true, // تفعيل الميزة
//       v7_partialHydration: true,   // تفعيل الميزة
//       v7_skipActionErrorRevalidation: true, // تفعيل الميزة
      
//       v7_relativeSplatPath: true,      // تفعيل الميزة لتغيير سلوك المسارات النسبية
      
//     },
//   }
// );


// const App = () => {
//   const [items] = useState([]);

//   return (
//     <RouterProvider router={router} /> 
//   );
// };

// export default App;

import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // تأكد من استيراد Navigate هنا
import Nav1 from './components/Nav1';
import Footer from './components/Footer';
import './styles/App.css';
import './styles/dark_mode.css';
import Home from './pages/Home.jsx';
import ItemDetail from './pages/ItemDetail.jsx';
import ArticleDetail from './pages/ArticleDetail.jsx';

const App = () => {
  const [items] = useState([]);

  return (
    <Router>  {/* استخدام HashRouter هنا */}
      <Nav1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type" element={<ItemDetail />} />
        <Route path="/:type/:id" element={<ArticleDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


