import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { UserAction } from "../../../../store/userSlice/userSlice";

const Profil = (props) => {
  const dispatch = useDispatch();
  const prenom = useSelector((state) => state.user.prenom);
  const [show, setShow] = useState(false);
  const reservation = useSelector((state) => state.user.reservation);

  const handleLogout = async () => {
    const actualAuth = getAuth();
    await signOut(actualAuth);
    dispatch(UserAction.userIsDisconnected());
    dispatch(UserAction.setUserLoggedOut());
  };

  return (
    <Container>
      <Btn onClick={() => setShow(!show)}>
        <span>{prenom}</span>
        <GiHamburgerMenu />
      </Btn>
      {show && (
        <Dropdown onMouseLeave={() => setShow(false)}>
          <ul>
            <li>
              <Link to="/mes-reservation">
                Mes réservation <b>({reservation.length})</b>
              </Link>
            </li>
            <li>
              <Link to="/modifier-mes-infos-personnelles">
                Modifier mes informations <br /> personnelles
              </Link>
            </li>
            <li>
              <span onClick={handleLogout}>Se deconnecter</span>
            </li>
          </ul>
        </Dropdown>
      )}
    </Container>
  );
};

const Btn = styled.div`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  border: 1px solid #dddddd;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 3px #ccc;
  }

  span {
    text-transform: capitalize;
    font-size: 0.9rem;
    font-weight: 300;
    padding-bottom: 1px;
  }
`;

const Container = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  z-index: 2000;
  top: 40px;
  right: 0;
  position: absolute;
  background-color: white;
  width: max-content;
  border-radius: 5px;
  box-shadow: 0 2px 16px rgb(0, 0, 0, 12%);
  padding: 1rem 0;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    row-gap: 1rem;
    padding: 0 1rem;

    li {
      a,
      span {
        display: block;
        font-weight: 300;
        transition: 0.3s;

        &:hover {
          color: rgb(0, 101, 252);
        }
      }
    }
  }
`;

export default Profil;
