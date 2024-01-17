import BlueButton from "components/common/button/BlueButton";
import { useEffect, useRef, useState } from "react";
import FileUpload from "components/admin/file/FileUpload";
import produce from "immer";
import usePreventLeave from "hooks/usePreventLeave";

export default function Done({ setStep, info, setInfo, file, setFile }) {
  const goNext = () => {
    alert("저장입니다.");
  };

  const goBefore = () => {
    setStep(1);
  };

  return (
    <>
      <div className={"w-full grid grid-cols-1 lg:grid-cols-2 gap-x-4 mb-12"}>
        <div className="mb-4 flex flex-col gap-3">Sync</div>
      </div>
      <div className={"w-full h-12 flex flex-row-reverse justify-between"}>
        {/*<BlueButton content={"다음"} disabled={false} onClick={goNext} />*/}
        {/*<BlueButton content={"이전"} disabled={false} onClick={goBefore} />*/}
      </div>
    </>
  );
}
