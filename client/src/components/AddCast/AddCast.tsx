import React, { useRef, useState } from "react";
import "./addCast.css";
import { FiUploadCloud } from "react-icons/fi";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

interface Prop {
  onAddActor: (actor: {
    username: string;
    image: File;
    imageUrl: string;
  }) => void;
  onClose: () => void;
}

interface Actor {
  username: string;
  image: File;
  imageUrl: string;
}

const AddCast = ({ onAddActor, onClose }: Prop) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [actorName, setActorName] = useState("");
  const [actorImage, setActorImage] = useState<File | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(selectedFile);
      setImageUrl(imageUrl);
      setActorImage(selectedFile);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (actorName && actorImage) {
      onAddActor({ username: actorName, image: actorImage, imageUrl: "" });
    }
  };

  return (
    <div
      className="position-fixed overflow-y-auto text-center"
      style={{ inset: 0, zIndex: 30 }}
    >
      <div className="min-vh-100 px-3">
        <div
          className="position-fixed bg-black opacity-50 duration-300"
          style={{ inset: 0 }}
          aria-hidden="true"
          onClick={onClose}
        ></div>
        <span
          className="align-middle vh-100"
          style={{ display: "inline-block" }}
          aria-hidden="true"
        ></span>
        <div
          className="position-relative sm:w-4/5 md:w-3/5 lg:w-2/5 w-100 align-middle h-100 overflow-y-auto bg-main text-white border rounded-2 opacity-100 scale-100"
          style={{ display: "inline-block", padding: "2.5rem" }}
        >
          <h2 className="text-3xl fw-bold">Thêm diễn viên</h2>
          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column gap-4 text-start mt-4"
          >
            {/* Cast Name */}
            <div className="w-100">
              <div className="text-sm w-100">
                <label htmlFor="name" className="text-border fw-semibold">
                  Tên diễn viên
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jeremy Renner"
                  className="w-100 text-sm mt-2 bg-main border rounded text-light"
                  style={{ padding: "1.25rem" }}
                  value={actorName}
                  onChange={(e) => setActorName(e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex flex-column gap-2">
              <p className="text-border fw-semibold text-sm">Ảnh diễn viên</p>
              <div className="w-100 text-center d-flex align-items-center justify-content-center flex-column gap-4">
                <div
                  className="px-4 w-100 mx-0 rounded-md border-dashed"
                  style={{
                    paddingTop: "2rem",
                    paddingBottom: "2rem",
                    cursor: "pointer",
                  }}
                  onClick={handleButtonClick}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="d-none"
                    onChange={handleFileChange}
                  />
                  <span className="mx-auto d-flex align-items-center justify-content-center flex-column text-subMain text-3xl">
                    <FiUploadCloud />
                  </span>
                  <p className="text-sm mb-0 mt-2">
                    Kéo hình ảnh của bạn vào đây
                  </p>
                  <em className="text-xs text-border">
                    Chỉ các tệp .jpg và .png mới được chấp nhận
                  </em>
                </div>
              </div>
              <div
                className="p-2 bg-main border rounded mt-1"
                style={{
                  height: "8rem",
                  width: "8rem",
                }}
              >
                <img
                  src={
                    imageUrl ||
                    "https://netflixo-ten.vercel.app/images/user.png"
                  }
                  alt=""
                  className="w-100 h-100 object-fit-cover rounded"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-subMain w-100 d-flex flex-row align-items-center justify-content-center gap-4 fw-medium text-light rounded py-3"
            >
              <FaCloudUploadAlt />
              Thêm
            </button>
          </form>
        </div>
        <div
          className="position-absolute"
          style={{ right: "1.5rem", top: "1.5rem" }}
        >
          <button
            className="d-flex flex-column text-base text-subMain bg-white rounded-circle align-items-center justify-content-center"
            style={{ width: "40px", height: "40px" }}
            onClick={onClose}
          >
            <IoMdClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCast;
