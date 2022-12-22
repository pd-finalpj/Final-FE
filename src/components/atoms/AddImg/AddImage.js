import React, { useState } from "react";
const AddImage = () => {
  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const handleAddImages = (e) => {
    const imageLists = e.target.files;
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
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  return (
    <div className="addPicture">
      <label
        htmlFor="input-file"
        className="addButton"
        onChange={handleAddImages}
      >
        <input
          type="file"
          id="input-file"
          multiple
          className="addButton"
          placeholder="사진추가"
        />
      </label>
      <div className="imagefloat">
        {showImages.map((image, id) => (
          <div className="imageContainer" key={id}>
            <img src={image} alt={`${image}-${id}`} />
            <button className="del" onClick={() => handleDeleteImage(id)}>
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export { AddImage };
