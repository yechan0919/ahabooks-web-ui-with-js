import HeadTitle from "../../../components/common/HeadTitle";
import BlueButton from "../../../components/common/button/BlueButton";
import { useEffect, useRef, useState } from "react";
import FileUpload from "../../../components/admin/file/FileUpload";
import OutlineBlueButton from "../../../components/common/button/OutlineBlueButton";
import GrayButton from "../../../components/common/button/GrayButton";
import UploadLayout from "../../../components/admin/layout/UploadLayout";
import produce from "immer";
import usePreventLeave from "hooks/usePreventLeave";
import { Router } from "next/router";

export default function Info() {
  const { pass, setPass } = usePreventLeave();

  useEffect(() => {}, [pass]);
  const [info, setInfo] = useState({
    title: "",
    type: 0,
    writer: "",
    intro: "",
    step: 0,
    file1: "",
    file2: "",
    file3: "",
  });
  const [validation, setValidation] = useState({
    title: true, // 도서 제목
    type: true, // 도서 타입
    writer: true, // 도서 저자
    intro: true, // 도서 소개
    step: true, // 도서 단계
    file1: true, // 표지 사진
    file2: true, // 원고 파일
    file3: true, // 나레이션 파일
  });
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [file3, setFile3] = useState("");

  const titleRef = useRef();
  const typeRef = useRef();
  const writerRef = useRef();
  const introRef = useRef();
  const stepRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    setValidation(
      produce(validation, (draft) => {
        draft.title = info.title === "" ? true : false;
        draft.type = info.type === 0 ? true : false;
        draft.writer = info.writer === "" ? true : false;
        draft.intro = info.intro === "" ? true : false;
        draft.step = info.step === 0 ? true : false;
        draft.file1 = info.file1 === "" ? true : false;
        draft.file2 = info.file2 === "" ? true : false;
        draft.file3 = info.file3 === "" ? true : false;
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
        draft[type] = Number(e.target.value);
      })
    );
  };

  const goNext = () => {
    if (info.title === "") {
      titleRef.current.focus();
    } else if (info.type === 0) {
      typeRef.current.focus();
    } else if (info.writer === "") {
      writerRef.current.focus();
    } else if (info.intro === "") {
      introRef.current.focus();
    } else if (info.step === 0) {
      stepRef.current.focus();
    } else if (info.file1 === "" || info.file2 === "" || info.file3 === "") {
      focusRef.current.focus();
    } else {
      alert("complete!");
    }
  };

  return (
    <>
      <div className={"w-full grid grid-cols-1 lg:grid-cols-2 gap-x-4 mb-12"}>
        <div className="mb-4 flex flex-col gap-3">
          <p>도서 제목</p>
          <input
            ref={titleRef}
            type={"text"}
            className={"form-control"}
            placeholder={"도서 제목을 입력하세요"}
            onChange={(e) => onChange(e, "title")}
          />
          {validation.title && (
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
            <option value={0} selected={info.type === 0} className="">
              도서 타입을 선택하세요.
            </option>
            <option value={1} selected={info.type === 1}>
              본편
            </option>
            <option value={2} selected={info.type === 2}>
              쉬운 말
            </option>
          </select>
          {validation.type && (
            <span className={"text-validation"}>도서 타입을 입력해주세요.</span>
          )}
        </div>
        <div className="mb-4 flex flex-col gap-3">
          <p>도서 저자</p>
          <input
            ref={writerRef}
            type={"text"}
            className={"form-control"}
            placeholder="저자를 입력하세요."
            onChange={(e) => onChange(e, "writer")}
          />
          {validation.writer && (
            <span className={"text-validation"}>도서 저자를 입력해주세요.</span>
          )}
        </div>
        <div className="mb-4 flex flex-col gap-3">
          <p>도서 소개</p>
          <input
            ref={introRef}
            type={"text"}
            className={"form-control"}
            placeholder="책에 대한 소개를 입력하세요."
            onChange={(e) => onChange(e, "intro")}
          />
          {validation.intro && (
            <span className={"text-validation"}>도서 소개를 입력해주세요.</span>
          )}
        </div>
        <div className="mb-4 flex flex-col gap-3">
          <p>추천 단계</p>
          <select
            ref={stepRef}
            className="form-select"
            aria-label="Default select example"
            value={info.step}
            onChange={(e) => onSelect(e, "step")}
          >
            <option value={0} selected={info.step === 0} className="">
              원하는 단계를 선택하세요
            </option>
            <option value={1} selected={info.step === 1}>
              아책 1
            </option>
            <option value={2} selected={info.step === 2}>
              아책 2
            </option>
            <option value={3} selected={info.step === 3}>
              아책 3
            </option>
            <option value={4} selected={info.step === 4}>
              아책 4
            </option>
            <option value={5} selected={info.step === 5}>
              아책 5
            </option>
            <option value={6} selected={info.step === 6}>
              아책 6
            </option>
          </select>
          {validation.step && (
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
            validation={validation.file1}
            number="1"
            file={file1}
            setFile={setFile1}
          />
          <FileUpload
            content={"원고 파일"}
            validation={validation.file2}
            number="2"
            file={file2}
            setFile={setFile2}
          />
          <FileUpload
            content={"나레이션 파일"}
            validation={validation.file3}
            number="3"
            file={file3}
            setFile={setFile3}
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
