import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async() => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
      <Link to="/">
        <h1 className="uppercase text-red-600 font-bold cursor-pointer text-5xl">
          netflix
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/profile">
            <button className="capitalize pr-4">profile</button>
          </Link>
            <button onClick={handleLogout} className="capitalize bg-red-600 px-6 py-2 rounded">
              log out
            </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="capitalize pr-4">login</button>
          </Link>
          <Link to="/signup">
            <button className="capitalize bg-red-600 px-6 py-2 rounded">
              sighn up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
