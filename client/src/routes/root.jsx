import { useEffect } from "react";
import { useMedia } from "../stores/mediaStore";
import Header from "../components/Header";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Search from "../components/Search";
import MediaPlayer from "../components/MediaPlayer";
import SideBar from "../components/SideBar";
import useGlobal from "../hooks/useGlobal";
import PlanList from "../components/PlanList";

export default function Root() {
  const {playing, isPlaying} = useMedia();
  const { pathname } = useLocation();
  const data = useLoaderData();
  const { isSidebarOpen, setIsSidebarOpen } = useGlobal();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative">
      <Header />
      <Search />
      <div className="">
        <SideBar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
      </div>

      <PlanList />

      <Outlet context={data} />
      
      {playing ? <MediaPlayer audioSource={playing} /> : null}
    </div>
  );
}
