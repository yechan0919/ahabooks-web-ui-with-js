import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HeadTitle from "../../../../components/common/HeadTitle";
import UpdateBookLayout from "../../../../components/admin/layout/UpdateBookLayout";
import UpdateInfo from "../../../../components/admin/book/UpdateInfo";
import { BookService } from "../../../../services/BookService";

const Index = () => {
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    if (id) getBookInfo();
  }, [id]);

  const [info, setInfo] = useState({});

  const [file, setFile] = useState({
    coverImageFile: "",
    bookFile: "",
    narrationFile: "",
  });

  const getBookInfo = async () => {
    try {
      const { data } = await BookService.getBookDetail(id);
      setInfo({
        name: data.name,
        id: data.id,
        version: data.version,
        stepId: data.step,
        status: data.status,
        type: data.type,
        field: data.field,
        free: data.free,
        auth: data.auth,
        description: data.description,
        coverImageUrl: data.coverImageUrl,
        bookFileUrl: data.bookFileUrl,
        narrationFileUrl: data.narrationFileUrl,
      });
    } catch (e) {}
  };

  return (
    <UpdateBookLayout info={info}>
      <UpdateInfo info={info} file={file} setFile={setFile} />
    </UpdateBookLayout>
  );
};

export default Index;
