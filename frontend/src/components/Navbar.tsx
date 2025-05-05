import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div>
        <Link to={"/"}>
          Hotel Mahendra
          <span>Jalgaon</span>
        </Link>
      </div>

      <div>
        <ul>
          <li>
            <Link to={"/360-walk=through"}>360 Walk-Through</Link>
          </li>
          <li>
            <Link to={"/rooms"}>Rooms</Link>
          </li>
          <li>
            <Link to={"/restaurant"}>Restaurant</Link>
          </li>
          <li>
            <Link to={"/nearby-places"}>Place nearby</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
