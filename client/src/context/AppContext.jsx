
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  // Load credits & user info
  const loadCreditsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/credits", { headers: { token } });
      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Generate image
  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/image/generate-image",
        { prompt },
        { headers: { token } }
      );

      if (data.success) {
        loadCreditsData();
        return data.resultImage; // URL
      } else {
        toast.error(data.message);
        loadCreditsData();
        if (data.creditBalance === 0) navigate("/buy");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Gallery API calls
  const fetchGallery = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/image/gallery", { headers: { token } });
      if (data.success) return data.images.map((img) => img.url);
      return [];
    } catch (error) {
      toast.error(error.message);
      return [];
    }
  };

  const deleteImageFromDB = async (url) => {
    try {
      const { data } = await axios.delete(backendUrl + "/api/image/delete-by-url", {
        headers: { token },
        data: { url },
      });
      return data.success;
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  };

  const clearGalleryDB = async () => {
    try {
      await axios.delete(backendUrl + "/api/image/clear/all", { headers: { token } });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

  useEffect(() => {
    if (token) loadCreditsData();
  }, [token]);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    generateImage,
    fetchGallery,
    deleteImageFromDB,
    clearGalleryDB,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
