import Button from "@/ui/Button";

function App() {
  return (
    <div className="m-12">
      <p>Buttons</p>
      <br />
      <Button variant="primary" children="submit" />
      <br />
      <br />
      <Button variant="secondary" children="click" />
      <br />
      <br />
      <Button variant="primary" disabled children="hey" />
      <br />
      <br />
      <Button variant="secondary" disabled children="click me" />
    </div>
  );
}

export default App;
