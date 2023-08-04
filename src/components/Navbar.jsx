import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <header className="navbar bg-base-300 lg:justify-center justify-around h-24">
        <h1 className="text-xl">
          <Link to="/">let's Discuss</Link>
        </h1>
        <nav className="navbar-end hidden lg:flex lg:justify-end">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <Link to="/">Threads</Link>
            </li>
            <li>
              <Link to="/leaderboards">LeaderBoards</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        {/* dropdown button */}
        <details className="dropdown">
          <summary tabIndex={0} className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </summary>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <Link to="/">Threads</Link>
            </li>
            <li>
              <Link to="/leaderboards">LeaderBoards</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </details>
      </header>
    </>
  );
}
