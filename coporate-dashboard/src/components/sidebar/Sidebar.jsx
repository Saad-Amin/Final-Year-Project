import React, { useEffect, useState } from "react";
import "./sidebar.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logoWhite-withoutbg.png";
import sidebarNav from "../../configs/sidebarNav";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import LogoutModal from "../logoutModal/LogoutModal";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNav.findIndex((item) => item.section === curPath);

    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  const closeSidebar = () => {
    document.querySelector(".main__content").style.transform =
      "scale(1) translateX(0)";
    setTimeout(() => {
      document.body.classList.remove("sidebar-open");
      document.querySelector(".main__content").style = "";
    }, 500);
  };

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    //remove token from local storage
    localStorage.removeItem("usersdatatoken");
    //redirect to login
    window.location.href = "/";
    setShowModal(false);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="" style={{ width: "120px", height: "120px" }} />
        <div className="sidebar-close" onClick={closeSidebar}>
          <AiOutlineClose size={30} style={{ color: "#ff265a" }} />
        </div>
      </div>
      <div className="sidebar__menu">
        {sidebarNav.map((nav, index) => (
          <Link
            to={nav.link}
            key={`nav-${index}`}
            className={`sidebar__menu__item ${
              activeIndex === index && "active"
            }`}
            onClick={closeSidebar}
          >
            <div className="sidebar__menu__item__icon">{nav.icon}</div>
            <div className="sidebar__menu__item__txt">{nav.text}</div>
          </Link>
        ))}
        <div className="sidebar__menu__item" onClick={handleShowModal}>
          <div className="sidebar__menu__item__icon">
            <AiOutlineLogout size={25} />
          </div>
          <div className="sidebar__menu__item__txt">Logout</div>
        </div>

        <LogoutModal
          showModal={showModal}
          handleClose={handleCloseModal}
          handleLogout={handleLogout}
        />
      </div>
    </div>
  );
};

export default Sidebar;
