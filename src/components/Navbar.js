import { Link } from "react-router-dom";
import "../styles/App.css";

function Navbar({ notifications }) {
  return (
    <nav>
      <h1>React App</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/notifications">Notifications ({notifications.length})</Link></li>
        <li><Link to="/create-post">Create Post</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
