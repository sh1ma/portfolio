import "./App.scss";
import { CommonHeader } from "@/CommonHeader";
import { About } from "@/About";

function App() {
  return (
    <div className="AppContainer">
      <CommonHeader></CommonHeader>

      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
