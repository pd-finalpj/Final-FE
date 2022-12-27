import React, { useState } from "react";
import axios from "../../../../node_modules/axios/index";
import "../../style/css/Image.css";
const AddImage = (props) => {
  const token = localStorage.getItem("access_token");
  const [showImages, setShowImages] = useState([]);
  const [imageFileUrl, setImageFileUrl] = useState([]);

  // 이미지 상대경로 저장
  const handleAddImages = (e) => {
    const formData = new FormData();

    const imageLists = e.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    formData.append('file', e.target.files[0]);
    setShowImages(imageUrlLists);
    
    axios({
      method: "post",
      url: "http://3.34.237.17:8080/image-file",
      headers: {
        Token: `${token}`,
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    })
    .then((res) => {
      console.log(res)
      console.log(res.data.imageFileUrlList);
      setImageFileUrl(res.data.imageFileUrlList);
      console.log(imageFileUrl);
    });
    
    props.getImageFile(imageFileUrl);
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
