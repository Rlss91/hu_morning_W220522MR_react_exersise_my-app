import { useSelector } from "react-redux";

const NavBarComponent = () => {
  const username = useSelector((state) => state.username.username);
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MySITE
        </a>
        <a>{username}</a>
      </div>
    </nav>
  );
};

export default NavBarComponent;
