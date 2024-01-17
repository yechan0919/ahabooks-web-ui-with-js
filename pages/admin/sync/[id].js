import React, { useEffect, useRef, useState } from "react";
import HeadTitle from "../../../components/common/HeadTitle";
import { useRouter } from "next/router";
import axios from "axios";
import BlueButton from "../../../components/common/button/BlueButton";

const SyncComponent = () => {
  const [highlightedWordIndex, setHighlightedWordIndex] = useState(-1);
  const [content, setContent] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [narrationFileUrl, setNarrationFileUrl] = useState("");
  const [bookId, setBookId] = useState("");
  const audioRef = useRef(null);
  const timeoutsRef = useRef([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    // Replace 'inputValue' with the actual value you want to pass to the API
    const inputValue = id;
    if (id) {
      axios
        .get(`/api/books/${inputValue}`)
        .then((res) => {
          if (res.data.data) {
            setNarrationFileUrl(res.data.data.narrationFileUrl);
            setBookId(inputValue);
            return axios.get(`/api/books/${inputValue}/read`);
          } else {
            alert("Error occurred (axios)");
          }
        })
        .then((res) => {
          if (res.data.data) {
            setContent(res.data.data);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  const playAudio = () => {
    setHighlightedWordIndex(-1);
    setIsPlaying(true);
    audioRef.current.play();

    const newTimeouts = content.map((item, index) => {
      return setTimeout(() => {
        if (isPlaying) {
          setHighlightedWordIndex(index);
        }
      }, item.start_time * 1000);
    });

    timeoutsRef.current = newTimeouts;
  };

  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setHighlightedWordIndex(-1);
    setIsPlaying(false);

    timeoutsRef.current.forEach((timeout) => {
      clearTimeout(timeout);
    });
    timeoutsRef.current = [];
  };

  // const handleTimeUpdate = () => {
  //   if (audioRef.current && content && content.length > 0) {
  //     const currentTime = audioRef.current.currentTime;

  //     for (let i = 0; i < content.length; i++) {
  //       const item = content[i];

  //       if (currentTime >= item.start_time && currentTime < item.start_time + item.duration) {
  //         setHighlightedWordIndex(i);
  //         break;
  //       } else if (highlightedWordIndex === i) {
  //         setHighlightedWordIndex(-1);
  //       }
  //     }
  //   }
  // };
  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const currentWordIndex = content.findIndex(
      (word) =>
        word.start_time <= currentTime &&
        word.start_time + word.duration > currentTime
    );
    setHighlightedWordIndex(currentWordIndex);
  };

  const handleWordClick = (index) => {
    setSelectedWord(content[index]);
    setSelectedIndex(index);
    setIsModalOpen(true);
    setHighlightedWordIndex(index);
    audioRef.current.currentTime = content[index].start_time;
    audioRef.current.play();
    const timeout = setTimeout(() => {
      audioRef.current.pause();
      setHighlightedWordIndex(-1);
    }, content[index].duration * 1000);
    timeoutsRef.current.push(timeout);
  };

  const handleModalClose = () => {
    setSelectedWord(null);
    setSelectedIndex(0);
    setIsModalOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedWord = {
      wordIndex: selectedWord.wordIndex,
      word: selectedWord.word,
      start_time: Number(formData.get("start_time")),
      duration: Number(formData.get("duration")),
      pageNum: selectedWord.pageNum,
    };
    const updatedData = content.map((word) =>
      word.wordIndex === selectedWord.wordIndex ? updatedWord : word
    );
    axios
      .put(`/api/books/${bookId}/content`, updatedData)
      .then((res) => {
        console.log("axios: ", res);
        handleModalClose();
        axios
          .get(`/api/books/${bookId}/read`)
          .then((res) => {
            setContent(res.data.data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (content.length > 0 && highlightedWordIndex === content.length - 1) {
      const lastWord = content[content.length - 1];
      const timeout = setTimeout(() => {
        setHighlightedWordIndex(-1);
        setIsPlaying(false);
      }, lastWord.start_time + lastWord.duration - audioRef.current.currentTime);
      timeoutsRef.current.push(timeout);
    }
  }, [highlightedWordIndex, content]);

  return (
    <div className="main-container">
      <HeadTitle title={"아책 어드민 | 싱크 조정"} />
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <div className="col">
              <h4 className="page-title">싱크 조정</h4>
              <ol className="breadcrumb">아책 / 싱크 조정</ol>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col py-[1rem]">
          <div className="card">
            <div className="card-header">
              <div className="row items-center ">
                <div className="col">
                  <h4 className="card-title">
                    <b>싱크 조정하기</b>
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive browser_users px-2">
                {/* 싱크 관리 컨텐츠 */}
                <div className="App">
                  <div className={"flex flex-row justify-between"}>
                    <BlueButton
                      onClick={() => {
                        router.push("/admin/sync");
                      }}
                      content={"뒤로가기"}
                    />

                    <div className={"flex flex-row gap-4"}>
                      <BlueButton onClick={playAudio} content={"시작"} />
                      <BlueButton onClick={stopAudio} content={"정지"} />
                    </div>
                  </div>

                  <hr className={"my-4"}></hr>
                  <p>싱크를 수정하고 싶은 단어를 클릭하여 수정해주세요.</p>
                  <p>
                    <span className={"font-bold text-red-500"}>시작 시간</span>
                    은 음성 파일 내 시작 부분,{" "}
                    <span className={"font-bold text-red-500"}>재생시간</span>은
                    해당 단어의 재생 길이입니다.
                  </p>
                  <hr className={"my-4"}></hr>

                  <p className={"text-lg leading-10"}>
                    {content.map((item, index) =>
                      item.duration === 0 ? (
                        <span
                          key={item.wordIndex}
                          className={"text-red-500"}
                          onClick={() => handleWordClick(index)}
                        >
                          {item.word} {item.word.includes(".") ? <br /> : <></>}
                        </span>
                      ) : (
                        <span
                          key={item.wordIndex}
                          className={
                            index === highlightedWordIndex ? "highlighted" : ""
                          }
                          onClick={() => handleWordClick(index)}
                        >
                          {item.word} {item.word.includes(".") ? <br /> : <></>}
                        </span>
                      )
                    )}
                  </p>
                  {selectedWord && isModalOpen && (
                    <div
                      className="modal-overlay"
                      onClick={() => setIsModalOpen(false)}
                    >
                      <div
                        className="modal border"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <h2 className={"font-bold text-center mb-4"}>
                          {selectedWord.word}
                        </h2>
                        <label className={"text-lg mb-4"}>
                          시작 시간 (가이드) :
                          <input
                            type="text"
                            name="start_time"
                            readOnly={true}
                            className={
                              "ml-2 border-b-2 border-black-500 px-2 py-1"
                            }
                            defaultValue={(
                              content[selectedIndex - 1].start_time +
                              content[selectedIndex - 1].duration +
                              0.1
                            ).toFixed(1)}
                            pattern="\d+(\.\d+)?"
                          />
                        </label>
                        <form onSubmit={handleFormSubmit}>
                          <label className={"text-lg mb-4"}>
                            시작 시간 :
                            <input
                              type="text"
                              name="start_time"
                              className={
                                "ml-2 border-b-2 border-black-500 px-2 py-1"
                              }
                              defaultValue={selectedWord.start_time}
                              pattern="\d+(\.\d+)?"
                            />
                          </label>
                          <br />
                          <label className={"text-lg mb-4"}>
                            재생 시간 :
                            <input
                              type="text"
                              name="duration"
                              className={
                                "ml-2 border-b-2 border-black-500 px-2 py-1"
                              }
                              defaultValue={selectedWord.duration}
                              pattern="\d+(\.\d+)?"
                            />
                          </label>
                          <br />

                          <div className={"flex flex-row gap-4 mt-4"}>
                            <button
                              className={
                                "px-4 py-2 text-sm rounded-md bg-[rgba(23,97,253,0.1)] text-[#1761fd] hover:text-white hover:bg-blue-500 transition delay-50 duration-100"
                              }
                              type="submit"
                            >
                              Save
                            </button>
                            <button
                              className="px-4 py-2 text-sm rounded-md bg-[rgba(23,97,253,0.1)] text-[#1761fd] hover:text-white hover:bg-blue-500 transition delay-50 duration-100 "
                              type="button"
                              onClick={handleModalClose}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                  <audio
                    ref={audioRef}
                    src={narrationFileUrl}
                    onTimeUpdate={handleTimeUpdate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyncComponent;
