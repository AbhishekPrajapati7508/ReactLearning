import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
function App() {
  return (
    <>
      <Navbar title ="TextUtils" aboutText="AboutTextUtils"/>
      <div className="container">
        <h1></h1>
      <TextForm heading ="Enter text to analyze"></TextForm>
      </div>
    </>
  );
}
export default App;
