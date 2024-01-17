import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    loginCheck();
  }, []);
  const loginCheck = async () => {
    console.log("loginCheck");
  };

  return <div>asdfas</div>;
};

export default Index;
