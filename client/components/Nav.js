import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context";
import { useRouter } from "next/router";



const Nav = () => {
const [current, setCurrent] = useState("")
  const [state, setState] = useContext(UserContext);
	useEffect(() => {
		process.browser && setCurrent(window.location.pathname);
	}, [process.browser && window.location.pathname]);
	console.log('console => ', current);
  const router = useRouter();

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
			
  };

  return (
    <nav
      className="nav d-flex justify-content-between"
      style={{ backgroundColor: "lightcoral" }}
    >
      <Link href="/">
        <a className={`nav-link text-light logo ${current === "/" && "active"}`}>Home</a>
      </Link>

      {state !== null ? (
			<>

		<Link href="/user/dashboard">
			<a className={`nav-link text-light ${current === "/user/dashboard" && "active"}`}>
				{state && state.user && state.user.name}
			</a>
		</Link>
		<a onClick={logout} className="nav-link text-light">LogOut</a>
			</>
        
      ) : (

        <>
        <Link href="/login">
        <a className={`nav-link text-light ${current === "/login" && "active"}`}>Login</a>
          </Link>

		<Link href="/register">
			<a className={`nav-link text-light ${current === "/register" && "active"}`}>Register</a>
		</Link>

      </>
      )};



      
    </nav>
  );
};

export default Nav;