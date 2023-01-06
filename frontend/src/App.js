import "./App.css";
import Intensity from "./pages/intensity";

function App() {
  return (
    <>
      <Intensity start={0} limit={10} width={600} height={400} />
    </>
  );
}

export default App;
