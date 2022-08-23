import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo/Reservia.svg";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ModalAction } from "../../store/modalSlice/modalSlice";
import { createPortal } from "react-dom";
import { UserAction } from "../../store/userSlice/userSlice";
import ModalLayout from "../../components/ui/header/modal/ModalLayout";
import Profil from "../../components/ui/header/profil/Profil";

const Header = () => {
  const dispatch = useDispatch();
  const [dimension, setDimension] = useState(getWindowDimensions());
  const [show, setShow] = useState(false);
  const showLogin = useSelector((state) => state.modal.login);
  const showSubscribe = useSelector((state) => state.modal.subscribe);
  const layout = useSelector((state) => state.isLayoutBig.layout);
  const user = useSelector((state) => state.user);
  const isCartFull = useSelector((state) => state.cart.isCartFull);

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width,
    };
  }
  useEffect(() => {
    function handleResize() {
      setDimension(getWindowDimensions());
    }

    if (dimension.width <= 768) {
      setShow(true);
    } else if (dimension.width >= 769) {
      setShow(false);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dimension.width]);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, async (actualUser) => {
      if (actualUser) {
        const userInfo = {
          id: actualUser.uid,
          email: actualUser.providerData[0].email,
        };

        const docRef = doc(db, "user", userInfo.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();

          dispatch(
            UserAction.setUserLoggedIn({
              id: userInfo.id,
              email: userInfo.email,
              prenom: userData.firstname,
              nom: userData.lastname,
              reservation: userData.reservation,
            })
          );
        } else {
          console.log("No such document!");
        }
      }
    });
  }, []);

  return (
    <Fragment>
      <Container>
        <Layout style={{ width: `${layout ? "70%" : "90%"}` }}>
          <Logo>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </Logo>
          <Menu
            style={
              user.isCertifiedConnected
                ? { display: "flex", alignItems: "center", columnGap: "1.5rem" }
                : null
            }
          >
            <ul className="parent-list">
              <li
                className="responsive list"
                style={
                  user.isCertifiedConnected
                    ? { alignItems: "center" }
                    : { alignItems: "flex-end" }
                }
              >
                <Link to="/accommodation">
                  <span>Hébergements</span>
                </Link>
              </li>
              <li
                className="responsive list"
                style={
                  user.isCertifiedConnected
                    ? { alignItems: "center" }
                    : { alignItems: "flex-end" }
                }
              >
                <Link to="/activities">
                  <span>Activités</span>
                </Link>
              </li>

              {!user.isCertifiedConnected && (
                <Fragment>
                  <li
                    className="list"
                    style={
                      user.isCertifiedConnected
                        ? { alignItems: "center" }
                        : { alignItems: "flex-end" }
                    }
                  >
                    <span
                      onClick={() => dispatch(ModalAction.openLoginModal())}
                    >
                      Se connecter
                    </span>
                  </li>
                  <li
                    className="list"
                    style={
                      user.isCertifiedConnected
                        ? { alignItems: "center" }
                        : { alignItems: "flex-end" }
                    }
                  >
                    <span
                      onClick={() => dispatch(ModalAction.openSubscribeModal())}
                    >
                      S'inscrire
                    </span>
                  </li>
                </Fragment>
              )}
            </ul>
            {user.isCertifiedConnected && <Profil />}
          </Menu>
        </Layout>
      </Container>
      {show && (
        <MobileMenu>
          <ul>
            <li className="responsive">
              <Link to="/accommodation">Hébergements</Link>
            </li>
            <li className="responsive">
              <Link to="/activities">Activités</Link>
            </li>
          </ul>
        </MobileMenu>
      )}
      {showSubscribe &&
        createPortal(
          <ModalLayout
            type="subscribe"
            closeModal={() => dispatch(ModalAction.closeSubscribeModal())}
          />,
          document.getElementById("layout")
        )}
      {showLogin &&
        createPortal(
          <ModalLayout
            type="login"
            closeModal={() => dispatch(ModalAction.closeLoginModal())}
          />,
          document.getElementById("layout")
        )}
    </Fragment>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: center;
`;

const Layout = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1380px) {
    width: 90% !important;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: center;

    img {
      width: 80px;
    }
  }
`;

const Menu = styled.div`
  .parent-list {
    list-style: none;
    display: flex;
    height: 100%;
    align-items: flex-end;
    gap: 1.5rem;

    .list {
      height: 100%;
      display: flex;
      padding: 0 0.5rem;
      transition: 0.1s ease-in-out;

      &:hover {
        border-top: 1px solid rgb(0, 101, 252);

        span {
          color: rgb(0, 101, 252);

          @media (max-width: 780px) {
            color: rgb(0, 0, 0);
          }
        }
      }

      span {
        font-size: 0.9rem;
        font-weight: 300;
        color: rgb(0, 0, 0);
      }

      &:last-child {
        span {
          color: rgb(0, 101, 252);
        }
      }
    }
  }

  @media (max-width: 768px) {
    .responsive {
      display: none !important;
    }

    .parent-list {
      gap: 1rem;
      .list {
        padding: 0;
        align-items: center !important;
      }
    }
  }
`;

const MobileMenu = styled.div`
  display: none;
  margin-top: 1rem;

  ul {
    flex: 1;
    display: flex;

    li {
      list-style: none;
      width: 50%;
      text-align: center;
      padding-bottom: 0.6rem;
      border-bottom: 4px solid rgb(242, 242, 242);
      color: rgb(0, 0, 0);
      font-weight: 300;
      font-size: 0.9rem;
      transition: 0.25s;

      &:hover {
        border-color: rgb(0, 101, 252);
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Header;
