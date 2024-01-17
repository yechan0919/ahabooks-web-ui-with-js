import BlueButton from "../../common/button/BlueButton";
import { useEffect, useRef, useState } from "react";
import { FileUtils } from "../../../utils/fileUtils";
import produce from "immer";

export default function FileUpload({
  content,
  number,
  validation,
  type,
  file,
  setFile,
}) {
  const [isDrag, setIsDrag] = useState(false);
  const [target, setTarget] = useState("");
  const [currentFile, setCurrentFile] = useState(file[type]);
  const [imageFile, setImageFile] = useState(false);
  const acceptImageFiles = [
    "image/png",
    "image/jpeg",
    "image/gif",
    "image/jpg",
  ];

  useEffect(() => {
    if (currentFile !== "") getThumbnail(currentFile);
  }, []);

  useEffect(() => {
    const imageFile = document.getElementById("imageFile");

    imageFile.addEventListener("ondrop", () => fileDrag());

    return () => {
      imageFile.removeEventListener("ondrop", () => fileDrag());
    };
  });

  const changeFile = async (e) => {
    await setFile(
      produce(file, (draft) => {
        draft[type] = e.target.files[0];
      })
    );
    await setCurrentFile(e.target.files[0]);
  };

  const openFile = () => {
    const fileClass = document.getElementById(type);
    fileClass.click();
  };

  const clearFile = () => {
    setFile(
      produce(file, (draft) => {
        draft[type] = "";
      })
    );
    setCurrentFile("");
    setImageFile(false);
  };

  const handleChangeFile = (e) => {
    changeFile(e);
    if (content === "표지 사진") getThumbnail(e.target.files[0]);
  };

  const getThumbnail = async (file) => {
    const res = await getBase64(file);
    setImageFile(res);
  };

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const fileDrag = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-60 w-full md:w-auto">
      <div
        className={
          "w-full md:w-96 h-48 rounded-2xl p-2 " +
          (currentFile === ""
            ? "border border-gray-300"
            : "border-2 border-blue-100")
        }
      >
        <div
          className={
            "border border-gray-400 w-full h-full rounded-2xl  flex flex-col gap-4 transition delay-50 duration-100 mb-4 " +
            (isDrag ? "bg-gray-100 " : "bg-white ") +
            (currentFile === "" ? "border-dashed " : "border-none ")
          }
          id="imageFile"
          onDragOver={(e) => {
            if (currentFile === "") {
              e.preventDefault();
              setIsDrag(true);
            }
          }}
          onDragLeave={() => setIsDrag(false)}
          onMouseOut={() => setIsDrag(false)}
          onDrop={(e) => {
            if (currentFile === "") {
              setIsDrag(false);
              if (acceptImageFiles.includes(e.dataTransfer.files[0].type)) {
                fileDrag(e);
              }
            }
          }}
        >
          {currentFile === "" ? (
            <>
              <div
                className={
                  "flex w-full h-1/2 justify-end items-center flex-col"
                }
              >
                <h4 className="hidden md:block">파일을 여기로 끌어다 놓거나</h4>
                <h4 className="block md:hidden">파일을 드래그하거나</h4>
                <p className="text-muted">'불러오기'버튼을 사용하세요.</p>
              </div>
              <div className={"flex w-full justify-center "}>
                <BlueButton content={"불러오기 +"} onClick={() => openFile()} />
              </div>
              <input
                type={"file"}
                name={"file"}
                id={type}
                onChange={(e) => handleChangeFile(e)}
                hidden
              />
            </>
          ) : (
            <div
              className={
                "w-full h-full flex flex-col items-center justify-center gap-2 relative"
              }
            >
              <div
                className={"absolute top-0 right-0 cursor-pointer"}
                onClick={() => clearFile()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              {content === "표지 사진" ? (
                <div id={"image_container" + number} className="w-full h-full">
                  <img
                    src={imageFile}
                    className={"object-contain h-full w-full"}
                  />
                </div>
              ) : (
                <>
                  <div className={"w-full flex justify-center items-center"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <h4 className="">
                      {/*{currentFile.name ? currentFile.name : "undefined"}*/}
                    </h4>
                    <p className="text-muted">
                      {/*{FileUtils.getFileDate(currentFile)} /{" "}*/}
                      {FileUtils.getFileSize(currentFile)}MB
                    </p>
                    <p className="text-muted">
                      {currentFile?.name ? currentFile.name : ""}
                    </p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        <div className={"text-center"}>
          <h4 className="text-muted">{content}</h4>
        </div>
      </div>
      {currentFile === "" && (
        <span className={"text-validation"}>{content}을 가져와주세요.</span>
      )}
    </div>
  );
}
