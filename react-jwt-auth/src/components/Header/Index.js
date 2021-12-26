import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "../../redux/auth/authSlice";

import urls from "../../urls.json";

export default function Header() {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <ul>
      <li>
        <Link to={urls.home.path}>{urls.home.name}</Link>
      </li>
      <li>
        <Link to={urls.login.path}>{urls.login.name}</Link>
      </li>
      <li>
        <Link to={urls.signup.path}>{urls.signup.name}</Link>
      </li>
      {auth.isAuthenticated ? (
        <li>
          <span
            style={{
              textDecoration: "underline",
              color: "inherit",
              cursor: "pointer",
            }}
            onClick={() => {
              dispatch(logout());
              navigate(urls.login.path);
            }}
          >
            Logout
          </span>
        </li>
      ) : null}
    </ul>
  );
}
