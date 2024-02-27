import Toolbar from "../components/Toolbar";
import ResumePreview from "../components/ResumePreview";

function CreateResume() {
  return (
    <div className="row">
      <div className="col">
        <Toolbar />
      </div>
      <div className="col">
        <ResumePreview />
      </div>
    </div>
  );
}

export default CreateResume;
