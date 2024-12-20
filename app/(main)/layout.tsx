"use client";
import { ReactNode, FC, memo } from "react";
import { usePathname } from "next/navigation";
import Header from "../components/header";
import NavBar from "../components/navbar";
// import { useSelector } from "react-redux";
// import Cookies from "js-cookie";
import CookieConsent from "react-cookie-consent";
import Dashboard from "../(main)/dashboard/page";
import CreateAds from "../(main)/createAds/page";
import Billing from "../(main)/billing/page";
import Settings from "../(main)/settings/page";

// Define the type for component props
interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const MemorizedNav = memo(NavBar);
  const MemorizedHeader = memo(Header);

  //   const myCookie = Cookies.get("excktn");
  const path = usePathname();

  //   // State selectors with proper typings
  //   const loading = useSelector((state: any) => state.createPostSlice.isLoading);
  //   const comid = useSelector((state: any) => state.createPostSlice.comid);
  //   const progress = useSelector((state: any) => state.createPostSlice.progress);
  //   const isLoading = useSelector((state: any) => state.userData.isLoading);

  //   console.log(comid, "comid");

  return (
    <>
      <div
      // style={{ width: `${progress}%` }}
      // className={`${
      //   loading ? "z-50 fixed top-0 right-0 left-0 h-1 bg-black" : "hidden -z-20"
      // }`}
      ></div>
      <CookieConsent
        buttonText="I understand"
        cookieName="excktn"
        // cookieValue={myCookie}
        location="bottom"
        style={{ background: "#2B373B", fontSize: "14px" }}
        buttonStyle={{
          color: "#4e503b",
          fontSize: "13px",
          borderRadius: "7px",
        }}
        expires={500}
      >
        We use cookies to improve your experience and analyze site traffic. By
        clicking "I understand" you agree to our Cookie Policy.
      </CookieConsent>
      <div className="bg-white dark:bg-[#6daaff] font-nunito duration-75 h-screen w-screen relative flex pn:max-sm:flex-col">
        <div className="w-[20%] pn:max-smh-[60px] min-w-[130px] bg-green-300 pn:max-sm:h-[60px] border-t pn:max-sm:w-full pn:max-sm:fixed pn:max-sm:bottom-0">
          <MemorizedNav />
        </div>
        <div className="sm:hidden flex h-[50px] absolute top-0 w-full justify-center items-center bg-red-700">
          <MemorizedHeader />
        </div>
        <div className="w-full h-[100vh] bg-slate-500 pn:max-sm:h-auto pn:max-sm:overflow-y-auto  no-scrollbar">
          <div>
            <div className="pn:max-sm:hidden flex  h-[60px] justify-center items-center bg-red-700">
              <MemorizedHeader />
            </div>
            <div className="w-full h-[calc(100vh-60px)] bg-white">
              {children}
              {/* <Dashboard /> */}
              {/* <CreateAds />
              <Billing />
              <Settings /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
