import React, { useEffect, useContext, useState } from "react";
import Logo from "../images/aerolab-logo.svg";
import coin from "../images/coin.svg";
import { Link } from "react-router-dom";
import { pathData, fetchData } from "../resources/defaulValues";
import { AppContext } from "../containers/User";
import Modal from "../resources/modal.js";
import Points from "./Points";

const NavBar = () => {
  const {
    user: { name },
    setUser,
  } = useContext(AppContext);

  useEffect(() => {
    fetchData({ data: pathData.load_user }).then((res) => setUser(res));
  }, [setUser]);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="nav-bar">
      <ul className="links">
      <div className="logo">
      <Link className="link" to="/reward-store-morales-andrea/">
        <img src={Logo} alt="Products" /> Products
        </Link>
      </div>
      </ul>
      <div className="profileData">
      <Link className="link" to="/reward-store-morales-andrea/profile">
      <p className="username"><i className="fa fa-user"aria-hidden="true"> </i>  |{name}
        </p>
      </Link>
      

      <ProfileCard setShowModal={setShowModal} showModal={showModal} /> 
      
      {showModal && (
        <Modal>
          <div className="modal-container">
            <div className="modal">
              <button
                className="modal-close"
                onClick={() => setShowModal(!showModal)}>
                  <i class="fa fa-times-circle" aria-hidden="true"></i>
              </button>
              <div className="modal-profile">
                <Points />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
    </div>
  );
};

export const ProfileCard = ({ setShowModal, showModal}) => {
  const {
    user: { points },
    setUser,
  } = useContext(AppContext);

  useEffect(() => {
    fetchData({ data: pathData.load_user }).then((res) => setUser(res));
  }, [setUser]);

  return(
    <button className="profileData" onClick={() => setShowModal(!showModal)}>
        <div className="points">
          <p>{points}</p>
          <img src={coin} alt="coin" />
        </div>
      </button>
  )
}

export default NavBar;
