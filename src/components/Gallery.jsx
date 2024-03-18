import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = useContext(PhotoContext);
  const addFav = (id) => {
    const photoLike = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFav: !photo.isFav,
        };
      }
      return photo;
    });
    setPhotos(photoLike);
  };

  return (
    <div className="gallery grid-columns-4 p-3">
      {photos.map((photo, i) => (
        <div
          key={i}
          onClick={() => addFav(photo.id)}
          className="photo"
          style={{
            backgroundImage: `url(${photo.src.large})`,
          }}
        >
          <IconHeart filled={photo.isFav} />
          {""}
          <section>
            <p>{photo.alt}</p>
            <h3>{photo.photographer}</h3>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
