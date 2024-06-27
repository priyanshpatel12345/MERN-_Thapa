import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

function Logout() {
  const { LogoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    LogoutUser();
    console.log("Logged out")
  }, []);
  return navigate("/login");
}

export default Logout;
