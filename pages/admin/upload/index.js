import { useEffect, useRef, useState } from "react";
import UploadLayout from "../../../components/admin/layout/UploadLayout";
import produce from "immer";
import usePreventLeave from "hooks/usePreventLeave";
import UploadInfo from "components/admin/upload/UploadInfo";
import Done from "./done";

export default function Index() {
  const [step, setStep] = useState(1);

  const [info, setInfo] = useState({
    name: "",
    version: "",
    type: "",
    auth: "",
    description: "",
    stepId: 0,
    file1: "",
    file2: "",
    file3: "",
    isFree: "",
    field: "",
  });
  const [file, setFile] = useState({
    coverImageFile: "",
    bookFile: "",
    narrationFile: "",
  });

  return (
    <UploadLayout step={step}>
      {step === 1 ? (
        <UploadInfo
          setStep={setStep}
          info={info}
          setInfo={setInfo}
          file={file}
          setFile={setFile}
        />
      ) : (
        <Done
          setStep={setStep}
          info={info}
          setInfo={setInfo}
          file={file}
          setFile={setFile}
        />
      )}
    </UploadLayout>
  );
}
