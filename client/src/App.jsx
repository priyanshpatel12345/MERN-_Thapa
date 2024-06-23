import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Service from "./Pages/Service";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import "./App.css";
import PageNotFound from "./Pages/PageNotFound";
import Logout from "./Pages/Logout";
import AdminLayout from "./Layouts/Admin-Layout";
import AdminUsers from "./Pages/AdminUsers";
import AdminContact from "./Pages/AdminContact";
import { AdminUpdate } from "./Pages/AdminUpdate";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<AdminUsers />} />
          <Route path="contact" element={<AdminContact />} />
          <Route path="users/:id" element={<AdminUpdate />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
