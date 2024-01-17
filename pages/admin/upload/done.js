import UploadLayout from "../../../components/admin/layout/UploadLayout";
import FileUpload from "../../../components/admin/file/FileUpload";
import BlueButton from "../../../components/common/button/BlueButton";
import { useRouter } from "next/router";

export default function Done() {
  const router = useRouter();
  const goPage = () => {
    router.push("/admin/book");
  };
  return (
    <div className={"w-full grid grid-cols-1 lg:grid-cols-2 gap-x-4  gap-y-16"}>
      <div className={"w-full text-center"}>저장되었습니다.</div>

      <BlueButton content="목록으로 돌아가기" onClick={goPage} />
    </div>
  );
}
