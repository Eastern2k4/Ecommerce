
// export default App
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import Cart from "./pages/Cart.jsx";
// import Category from "./pages/Category.jsx";
// import Home from "./pages/Home.jsx";
// import ProductDetail from "./pages/ProductDetail.jsx";
// import Profile from "./pages/Profile.jsx";
// import SignIn from "./pages/SignIn.jsx";
// import SignUp from "./pages/SignUp.jsx";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <header className="p-4 border-b flex gap-4">
//         <Link to="/">Home</Link>
//         <Link to="/c/smartphone">Smartphone</Link>
//         <Link to="/cart">Cart</Link>
//         <Link to="/profile">Profile</Link>
//       </header>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/c/:slug" element={<Category />} />
//         <Route path="/p/:id" element={<ProductDetail />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/auth/sign-in" element={<SignIn />} />
//         <Route path="/auth/sign-up" element={<SignUp />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />

      {/* Nếu vào root `/` thì chuyển về home luôn */}
      <Route path="/home" element={<Navigate to="/" replace />} />
      {/* fallback 404 để không bị trắng */}
      <Route
        path="*"
        element={<div style={{ padding: 20 }}>404 — Page not found</div>}
      />
    </Routes>
  );
}
