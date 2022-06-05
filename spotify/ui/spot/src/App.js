import "./App.css";
import Form from "./Form";
import Logo from "./Logo";
import Cardrender from "./Cardrender";
import Liked from "./Liked";
import Playlist from "./playlist";
import Suggested from "./Suggested";

function App() {
  return (
    <div>
      <Logo />
      <Form />
      <div className="grid grid-cols-8">
        <div className="col-span-7">
          <Cardrender />
        </div>
        <div>
          <Liked />
          <Playlist />
          <Suggested />
        </div>
      </div>
    </div>
  );
}

export default App;
