import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { ArrowEmailForward, Link, PhoneAdd } from "iconoir-react";

function App() {
  return (
    <div className="m-12">
      <p>Buttons</p>
      <br />
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <Button variant="primary" children="submit" />
        <Button variant="secondary" children="click" />
        <Button variant="primary" disabled children="hey" />
        <Button variant="secondary" disabled children="click me" />
      </div>
      <p className="my-8">Inputs</p>
      <div className="mt-8 flex gap-4 flex-wrap">
        <Input type="text" placeholder="Text Field Empty" disabled />
        <Input
          type="text"
          placeholder="Text Field Empty"
          icon={<ArrowEmailForward />}
        />
        <Input type="text" placeholder="Text Field Empty" icon={<Link />} />
        <Input
          type="text"
          placeholder="Text Field Empty"
          icon={<Link />}
          error
          errorMessage="Please check again"
        />
        <Input type="text" placeholder="Text Field Empty" error />
      </div>
    </div>
  );
}

export default App;
