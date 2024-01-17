import { useEffect, useState } from "react";
import { AdminService } from "../../../services/AdminService";

export default function EvaluationPopup({
  targetInfo,
  openEvaluationPopup,
  setRefresh,
  onClose,
}) {
  const [evalText, setEvalText] = useState(targetInfo.expertEvaluation);

  const Evaluation = async () => {
    try {
      const res = await AdminService.updateEvaluation(
        {
          expertEvaluation: evalText,
        },
        targetInfo.evaluationId
      );
      setRefresh(new Date());
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div
      className="relative z-[100]"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-3xl xl:max-w-5xl">
            <div className="bg-gray-200 w-full h-auto px-4 pt-5 pb-8 sm:p-6">
              {/* Content */}
              <div className="flex flex-row h-full">
                <div className={"w-40 h-full flex flex-col gap-3"}>
                  <div
                    className={"w-full flex justify-center items-center pb-4"}
                  >
                    <img
                      src={targetInfo?.bookCoverImageUrl}
                      className={"h-[168px] w-[105px] rounded-lg object-fill"}
                    />
                  </div>
                  <div className={"pl-4"}>
                    <p>걸린 시간 {targetInfo.totalTime}초</p>
                    <p className={"text-gray-400"}>
                      또래평균 {targetInfo.averageTime}분
                    </p>
                  </div>
                  <div className={"pl-4"}>
                    <p>속독률 {targetInfo.speedreadingRate}%</p>
                    <p className={"text-gray-400"}>
                      또래평균 {targetInfo.speedreadingRate}%
                    </p>
                  </div>
                  <div className={"pl-4"}>
                    <p>오독률 {targetInfo.absoluteScore}%</p>
                    <p className={"text-gray-400"}>
                      또래평균 {targetInfo.averageAbsoluteScore}%
                    </p>
                  </div>
                </div>
                <div className={"flex-col h-full w-full px-4"}>
                  <div
                    className={"w-full h-16 flex justify-center items-center"}
                  >
                    음성 재생 UI
                  </div>
                  <div className={"w-full h-full grid grid-cols-2 gap-4"}>
                    <div className={"flex flex-col gap-8"}>
                      <div className={"flex flex-col gap-4"}>
                        <h1 className={"text-main-color font-bold"}>
                          1. 속도평가
                        </h1>
                        <div>
                          <p>
                            길동이는 {targetInfo.totalTime}초 동안 이 책을
                            읽었어요!
                          </p>
                          <p>
                            길동이가 속한 9세 아동은 평균{" "}
                            {targetInfo.averageTime}분 동안 이 책을 읽었습니다.
                          </p>
                          <p>
                            또래 아동보다{" "}
                            {targetInfo.time > targetInfo.averagetime
                              ? "빠르게 읽는"
                              : "느리게 읽는"}{" "}
                            아동입니다.
                          </p>
                        </div>
                      </div>
                      <div className={"flex flex-col gap-4"}>
                        <h1 className={"text-main-color font-bold"}>
                          2. 정확도 평가
                        </h1>
                        <div>
                          <p>
                            길동이의 오독률은 {targetInfo.absoluteScore}%
                            입니다!
                          </p>
                          {/*<p>책을 ‘중하’ 정도로 정확하게 읽었습니다.</p>*/}
                          <p>
                            길동이는 또래 아동보다 정확도가{" "}
                            {targetInfo.absoluteScore >
                            targetInfo.averageAbsoluteScore
                              ? "낮은 편"
                              : "높은 편"}{" "}
                            입니다.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={" h-full flex flex-col gap-4"}>
                      <h1 className={"font-bold text-main-color"}>
                        3. 전문가 평가
                      </h1>
                      <div
                        className={
                          "h-full w-full bg-white flex flex-col rounded-xl p-4 border border-gray-200 shadow-xl"
                        }
                      >
                        <textarea
                          className={"w-full h-full resize-none"}
                          value={evalText}
                          onChange={(e) => setEvalText(e.target.value)}
                          placeholder={"여기에 입력하세요."}
                        />
                        <div className={"w-full flex flex-row-reverse pt-2"}>
                          <button
                            className={
                              "text-white bg-gray-500 px-4 py-1 rounded-lg"
                            }
                            onClick={Evaluation}
                          >
                            {targetInfo.expertEvaluation ? "수정" : "저장"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 px-4 py-6 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="hover:text-gray-500 transition delay-50 duration-100 mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-gray-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => onClose()}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
