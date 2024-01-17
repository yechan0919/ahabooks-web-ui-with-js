import BlueButton from "components/common/button/BlueButton";
import { useEffect, useRef, useState } from "react";
import FileUpload from "components/admin/file/FileUpload";
import produce from "immer";
import usePreventLeave from "hooks/usePreventLeave";
import { CreateBookRequest } from "../../../typings/Book";
import { BookService } from "../../../services/BookService";
import { FileService } from "../../../services/FileService";

export default function UploadInfo({ setStep, info, setInfo, file, setFile }) {
  const { pass, setPass } = usePreventLeave();
  const [loading, setLoading] = useState(false);

  const [validation, setValidation] = useState({
    name: true, // 도서 제목
    type: true, // 도서 타입
    version: true,
    auth: true, // 도서 저자
    description: true, // 도서 소개
    stepId: true, // 도서 단계
    coverImageFile: true, // 표지 사진
    bookFile: true, // 원고 파일
    narrationFile: true, // 나레이션 파일
  });

  const nameRef = useRef();
  const typeRef = useRef();
  const versionRef = useRef();
  const authRef = useRef();
  const descriptionRef = useRef();
  const stepIdRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    setValidation(
      produce(validation, (draft) => {
        draft.name = info.name === "" ? true : false;
        draft.type = info.type === "" ? true : false;
        draft.version = info.version === "" ? true : false;
        draft.auth = info.auth === "" ? true : false;
        draft.description = info.description === "" ? true : false;
        draft.stepId = info.stepId === 0 ? true : false;
        draft.coverImageFile = info.coverImageFile === "" ? true : false;
        draft.bookFile = info.bookFile === "" ? true : false;
        draft.narrationFile = info.narrationFile === "" ? true : false;
        draft.isFree = info.isFree === "" ? true : false;
        draft.field = info.field === "" ? true : false;
      })
    );
  }, [info]);

  const onChange = (e, type) => {
    setInfo(
      produce(info, (draft) => {
        draft[type] = e.target.value;
      })
    );
  };

  const onSelect = (e, type) => {
    setInfo(
      produce(info, (draft) => {
        draft[type] = e.target.value;
      })
    );
  };

  const goNext = async () => {
    if (info.name === "") {
      alert("도서 제목을 입력해주세요");
      nameRef.current.focus();
    } else if (info.type === 0) {
      alert("도서 타입을 선택해주세요.");
      typeRef.current.focus();
    } else if (info.version === 0) {
      alert("도서 버전을 선택해주세요.");
      versionRef.current.focus();
    } else if (info.isFree === "") {
      alert("무료 여부를 선택하세요.");
    } else if (info.field === "") {
      alert("분야를 선택해주세요.");
    } else if (info.auth === "") {
      alert("도서 저자를 입력해주세요.");
      authRef.current.focus();
    } else if (info.description === "") {
      alert("도서 소개를 입력해주세요.");
      descriptionRef.current.focus();
    } else if (info.stepId === 0) {
      alert("추천 단계를 선택해주세요.");
      stepIdRef.current.focus();
      // } else if (info.coverImageFile === "" || info.bookFile === "" || info.narrationFile === "") {
    } else if (file.coverImageFile === "") {
      alert("도서의 표지 사진을 선택해주세요.");
      focusRef.current.focus();
    } else if (file.bookFile === "") {
      alert("도서의 원고 파일을 선택해주세요.");
      focusRef.current.focus();
    } else if (file.narrationFile === "") {
      alert("도서의 음성 파일을 선택해주세요.");
      focusRef.current.focus();
    } else {
      setLoading(true);
      const coverImageData = new FormData();
      coverImageData.append("file", file.coverImageFile);
      const coverImageRes = await FileService.uploadFile(coverImageData);

      const bookData = new FormData();
      bookData.append("file", file.bookFile);
      const bookRes = await FileService.uploadFile(bookData);

      const narrationData = new FormData();
      narrationData.append("file", file.narrationFile);
      const narrationRes = await FileService.uploadFile(narrationData);

      const createBookRequest = new CreateBookRequest();
      createBookRequest.auth = info.auth;
      createBookRequest.name = info.name;
      createBookRequest.coverImageUrl = coverImageRes.data
        ? coverImageRes.data
        : "";
      createBookRequest.bookFileUrl = bookRes.data ? bookRes.data : "";
      createBookRequest.narrationFileUrl = narrationRes.data
        ? narrationRes.data
        : "";
      createBookRequest.description = info.description;
      createBookRequest.stepId = Number(info.stepId);
      createBookRequest.version = info.version;
      createBookRequest.type = info.type;
      createBookRequest.free = info.isFree === "free" ? true : false;
      createBookRequest.field = info.field;
      const res = await BookService.createBook(createBookRequest);

      resetInfo();
      setLoading(false);
      setStep(2);
    }
  };

  const resetInfo = () => {
    setInfo({
      name: "",
      type: "",
      auth: "",
      description: "",
      stepId: 0,
      coverImageFile: "",
      bookFile: "",
      narrationFile: "",
    });
    setFile({
      coverImageFile: "",
      bookFile: "",
      narrationFile: "",
    });
  };

  return (
    <>
      {loading && (
        <div
          className={
            "fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-[100] flex justify-center items-center"
          }
        >
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div className={"w-full grid grid-cols-1 lg:grid-cols-2 gap-x-4 mb-12"}>
        <div className="mb-4 flex flex-col gap-3">
          <p>도서 제목</p>
          <input
            ref={nameRef}
            type={"text"}
            className={"form-control"}
            placeholder={"도서 제목을 입력하세요"}
            value={info.name}
            onChange={(e) => onChange(e, "name")}
          />
          {validation.name && (
            <span className={"text-validation"}>도서 제목을 입력해주세요.</span>
          )}
        </div>
        <div className="mb-4 flex flex-col gap-3">
          <p>도서 타입</p>
          <select
            ref={typeRef}
            className="form-select"
            aria-label="Default select example"
            value={info.type}
            onChange={(e) => onSelect(e, "type")}
          >
            <option value={""} selected={info.type === ""} className="">
              도서 타입을 선택하세요.
            </option>
            <option value={"EVALUATION"} selected={info.type === "EVALUATION"}>
              평가용
            </option>
            <option value={"GENERAL"} selected={info.type === "GENERAL"}>
              일반
            </option>
            {/*<option value={"DIFFICULT"} selected={info.type === "DIFFICULT"}>*/}
            {/*  어려운 말*/}
            {/*</option>*/}
          </select>
          {validation.type && (
            <span className={"text-validation"}>도서 타입을 입력해주세요.</span>
          )}
        </div>
        <div className="mb-4 flex flex-col gap-3">
          <p>도서 버전</p>
          <select
            ref={versionRef}
            className="form-select"
            aria-label="Default select example"
            value={info.version}
            onChange={(e) => onSelect(e, "version")}
          >
            <option value={""} selected={info.version === ""} className="">
              도서 버전을 선택하세요.
            </option>
            <option value={"EASY"} selected={info.version === "EASY"}>
              쉬운 말
            </option>
            <option value={"ORIGINAL"} selected={info.version === "ORIGINAL"}>
              본편
            </option>
            {/*<option value={"DIFFICULT"} selected={info.type === "DIFFICULT"}>*/}
            {/*  어려운 말*/}
            {/*</option>*/}
          </select>
          {validation.version && (
            <span className={"text-validation"}>도서 버전을 입력해주세요.</span>
          )}
        </div>
        <div className="mb-4 flex flex-col gap-3">
          <p>무료 여부</p>
          <select
            ref={typeRef}
            className="form-select"
            aria-label="Default select example"
            value={info.isFree}
            onChange={(e) => onSelect(e, "isFree")}
          >
            <option value={""} selected={info.isFree === ""} className="">
              무료 여부를 선택하세요.
            </option>
            <option value={"free"} selected={info.isFree === "free"}>
              무료
            </option>
            <option value={"not_free"} selected={info.isFree === "not_free"}>
              유료
            </option>
          </select>
          {validation.isFree && (
            <span className={"text-validation"}>무료 여부를 입력해주세요.</span>
          )}
        </div>
        <div className="mb-4 flex flex-col gap-3">
          <p>분야</p>
          <select
            ref={typeRef}
            className="form-select"
            aria-label="Default select example"
            value={info.field}
            onChange={(e) => onSelect(e, "field")}
          >
            <option value={""} selected={info.field === ""} className="">
              분야를 선택하세요.
            </option>
            <option value={"LITERATURE"} selected={info.field === "LITERATURE"}>
              문학
            </option>
            <option
              value={"NON_LITERATURE"}
              selected={info.field === "NON_LITERATURE"}
            >
              비문학
            </option>
          </select>
          {validation.field && (
            <span className={"text-validation"}>분야를 입력해주세요.</span>
          )}
        </div>

        <div className="mb-4 flex flex-col gap-3">
          <p>도서 저자</p>
          <input
            ref={authRef}
            type={"text"}
            className={"form-control"}
            placeholder="저자를 입력하세요."
            value={info.auth}
            onChange={(e) => onChange(e, "auth")}
          />
          {validation.auth && (
            <span className={"text-validation"}>도서 저자를 입력해주세요.</span>
          )}
        </div>
        <div className="mb-4 flex flex-col gap-3">
          <p>도서 소개</p>
          <input
            ref={descriptionRef}
            type={"text"}
            className={"form-control"}
            placeholder="책에 대한 소개를 입력하세요."
            value={info.description}
            onChange={(e) => onChange(e, "description")}
          />
          {validation.description && (
            <span className={"text-validation"}>도서 소개를 입력해주세요.</span>
          )}
        </div>
        <div className="mb-4 flex flex-col gap-3">
          <p>추천 단계</p>
          <select
            ref={stepIdRef}
            className="form-select"
            aria-label="Default select example"
            value={info.stepId}
            onChange={(e) => onSelect(e, "stepId")}
          >
            <option value={0} selected={info.stepId === 0} className="">
              원하는 단계를 선택하세요
            </option>
            <option value={1} selected={info.stepId === 1}>
              아책 1
            </option>
            <option value={2} selected={info.stepId === 2}>
              아책 2
            </option>
            <option value={3} selected={info.stepId === 3}>
              아책 3
            </option>
            <option value={4} selected={info.stepId === 4}>
              아책 4
            </option>
            <option value={5} selected={info.stepId === 5}>
              아책 5
            </option>
            <option value={6} selected={info.stepId === 6}>
              아책 6
            </option>
          </select>
          {validation.stepId && (
            <span className={"text-validation"}>단계를 선택해주세요.</span>
          )}
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-center">
        <div className="w-auto h-auto  flex-wrap flex gap-x-8  justify-center">
          {/* File Upload Component */}
          <input type="text" ref={focusRef} hidden />
          <FileUpload
            content={"표지 사진"}
            validation={validation.coverImageFile}
            type="coverImageFile"
            number="1"
            file={file}
            setFile={setFile}
          />
          {/* 원고 파일 */}
          <FileUpload
            content={"원고 파일"}
            validation={validation.bookFile}
            type="bookFile"
            number="2"
            file={file}
            setFile={setFile}
          />

          {/* 나레이션 파일 */}
          <FileUpload
            content={"나레이션 파일"}
            validation={validation.narrationFile}
            type="narrationFile"
            number="3"
            file={file}
            setFile={setFile}
          />
        </div>

        {/*    Input Block*/}
      </div>
      <div className={"w-full h-12 flex flex-row-reverse justify-between"}>
        <BlueButton content={"다음"} disabled={false} onClick={goNext} />
      </div>
    </>
  );
}
