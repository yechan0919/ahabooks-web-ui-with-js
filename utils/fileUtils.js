export const FileUtils = {
  /**
   * 파일 최근 수정 시간 가져오기
   */
  getFileDate: (file) => {
    // console.log("file", file);
    // let date = file.lastModifiedDate;
    // return file.lastModifiedDate
    //   ? file.lastModifiedDate.toString().split("2022")[0] + " 2022"
    //   : "undefined";
    return "";
  },
  /**
   * 파일 사이즈 가져오기 (MB 단위)
   */
  getFileSize: (file) => {
    return Math.floor(file?.size ? file.size : 0 / 10485) / 100;
    // return "test size";
  },
};
