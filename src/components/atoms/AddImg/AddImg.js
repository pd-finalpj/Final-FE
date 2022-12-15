import React, { useState } from "react";
import { Button } from "reactstrap";
import styles from "./Image.module.scss";
const AddImg = () => {
  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id: number) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  return (
    <div className={styles.addPicture}>
      <label
        htmlFor="input-file"
        className={styles.addButton}
        onChange={handleAddImages}
      >
        <input
          type="file"
          id="input-file"
          multiple
          className={styles.addButton}
          placeholder="사진추가"
        />
      </label>
      <div className={styles.imagefloat}>
        {showImages.map((image, id) => (
          <div className={styles.imageContainer} key={id}>
            <img src={image} alt={`${image}-${id}`} />
            <Button
              className={styles.del}
              onClick={() => handleDeleteImage(id)}
            >
              삭제
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AddImg;
