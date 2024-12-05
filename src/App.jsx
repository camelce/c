


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Nav1 from './components//Nav1';
// import Footer from './components/Footer';
// import './styles/App.css';
// import './styles/dark_mode.css';
// import Home from './pages/Home.jsx'
// import { Navigate } from 'react-router-dom';
// import ItemDetail from './pages/ItemDetail.jsx';
// import ArticleDetail from './pages/ArticleDetail.jsx';


// const App = () => {
//   const [items] = useState([]);

//   return (
//     <Router>
//       <div>
//         <Nav1 />
//         <NavContent items={items} />
//       </div>
//     </Router>
//   );
// };

// const NavContent = ({ items }) => {
//   return (
//     <div>

//       <div className="content-container">

//         <div className="main-content-container">
//           <main className="main-content">
//             <Routes>
              
//                   <Route path="/home" element={<Home />} />
//               <Route path="*" element={<Navigate to="/home" replace />} />
//               <Route path="/:type" element={<ItemDetail />} />
//               {/* <Route path="/article/:id" element={<ArticleDetail />} /> */}
//               <Route path="/:type/:id" element={<ArticleDetail />} /> 
              
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App ;

import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // استيراد createBrowserRouter و RouterProvider
import Nav1 from './components/Nav1';
import Footer from './components/Footer';
import './styles/App.css';
import './styles/dark_mode.css';
import Home from './pages/Home.jsx';
import { Navigate } from 'react-router-dom';
import ItemDetail from './pages/ItemDetail.jsx';
import ArticleDetail from './pages/ArticleDetail.jsx';

// تعريف المسارات

const router = createBrowserRouter(
  [
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:type",
      element: <ItemDetail />,
    },
    {
      path: "/:type/:id",
      element: <ArticleDetail />,
    },
    {
      path: "*",
      element: <Navigate to="/home" replace />,
    },
  ],
  {
    future: {
      v7_startTransition: true,   // تفعيل الميزة
      v7_fetcherPersist: true,     // تفعيل الميزة
      v7_normalizeFormMethod: true, // تفعيل الميزة
      v7_partialHydration: true,   // تفعيل الميزة
      v7_skipActionErrorRevalidation: true, // تفعيل الميزة
      
      v7_relativeSplatPath: true,      // تفعيل الميزة لتغيير سلوك المسارات النسبية
      
    },
  }
);


const App = () => {
  const [items] = useState([]);

  return (
    <RouterProvider router={router} /> 
  );
};

export default App;
