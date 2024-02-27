import Sections from "./Sections";
import Edit from "./Edit";

function Toolbar() {
  return (
    <div className="row">
      <div className="nav nav-tabs d-flex flex-column col-2">
        <button
          data-bs-toggle="tab"
          data-bs-target="#sections-panel"
          className="nav-link btn"
        >
          Sections
        </button>
        <button
          data-bs-toggle="tab"
          data-bs-target="#edit-panel"
          className="nav-link btn"
        >
          Edit
        </button>
      </div>
      <div className="col tab-content">
        <div id="sections-panel" className="tab-pane">
          <Sections />
        </div>
        <div id="edit-panel" className="tab-pane">
          <Edit />
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
