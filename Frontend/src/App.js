
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import AdminDashboard from './AdminPanel/AdminDashboard'; // Import other components for admin panel
import AdminPanel from './AdminPanel/AdminPanel';
import AdminAuthentication from './AdminPanel/AdminAuthentication';
import PrivateComponent from './AdminPanel/PrivateComponent';
import AddCategory from './AdminPanel/AddCategory';
import ManageCategories from './AdminPanel/ManageCategories';
import AddBrand from './AdminPanel/AddBrand';
import ManageBrands from './AdminPanel/ManageBrands';
import AddProduct from './AdminPanel/AddProduct';
import AdminProductsShoesize from './AdminPanel/AdminProductsShoesize';
import AdminProductColor from './AdminPanel/AdminProductColor';
import ManageProducts from './AdminPanel/ManageProducts';
import LandingPage from './Components/LandingPage/LandingPage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adminpanel" element={<AdminPanel/>}>
          <Route index element={<AdminAuthentication />} /> {/* This renders on /adminpanel */}
          <Route element={<PrivateComponent />}>

          <Route path="/adminpanel/dashboard" element={<AdminDashboard />} /> {/* Other admin routes */}
          <Route path="/adminpanel/AddCategory" element={<AddCategory />} /> {/* Add route for adding category */}
          <Route path="/adminpanel/ManageCategories" element={<ManageCategories />} /> {/* Add route for adding category */}
          <Route path="/adminpanel/AddBrands" element={<AddBrand />} /> {/* Add route for adding category */}
          <Route path="/adminpanel/ManageBrands" element={<ManageBrands />} /> {/* Add route for adding category */}
          <Route path="/adminpanel/AddProduct" element={<AddProduct />} /> {/* Add route for adding category */}
          <Route path="/adminpanel/AdminProductsShoesize" element={<AdminProductsShoesize />} /> {/* Add route for adding category */}
          <Route path="/adminpanel/AdminProducts/ProductColor" element={<AdminProductColor />} /> {/* Add route for adding category */}
          <Route path="/adminpanel/AdminProducts/AllProductsDetails" element={<ManageProducts />} /> {/* Add route for adding category */}

          </Route>


          {/* Add more admin routes here */}
        </Route>
        <Route path="/" element={<LandingPage />} /> {/* Add route for adding category */}

      </Routes>
    </BrowserRouter>
  );
};

export default App;
