import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PhotoContext = createContext();

const url = "/public/photos.json";

const DataProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new error("No hay Data que mostrar");
      }
      const { photos: photosDB } = response.data;
      setPhotos(photosDB.map((photo) => ({ ...photo, isFav: false })));
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <PhotoContext.Provider
      value={{
        photos,
        setPhotos,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export default DataProvider;
