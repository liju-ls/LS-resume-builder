import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="m-5">Welcome</h1>
      <Link className="btn btn-secondary" to="/create-resume">
        Add new Resume
      </Link>
    </div>
  );
}

export default Body;
