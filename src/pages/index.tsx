import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingPage from "./components/LoadingPage";

const MainPage = () => {
  const Login = dynamic(
    () => import("./components/Main").then((res) => res.default),
    {
      ssr: false,
    }
  );

  return (
    <Suspense fallback={<LoadingPage />}>
      <Login />
    </Suspense>
  );
};

export default MainPage;
