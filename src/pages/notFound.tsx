import notFoundImage from "@/assets/images/404.gif";
import Button from "@/ui/Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    document.title = "Ooops!!!";
  }, []);
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-10">
      <img src={notFoundImage} width={350} />
      <Link to="/">
        <Button variant="secondary">Go Home</Button>
      </Link>
    </main>
  );
}

export default NotFound;
