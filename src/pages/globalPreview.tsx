import PreviewCard from "@/components/preview/PreviewCard";
import PreviewHeader from "@/components/preview/PreviewHeader";
import { useParams } from "react-router";

function GlobalPreview() {
  const { username } = useParams();
  console.log("username", username);

  return (
    <main className="relative w-screen h-screen max-h-screen md:bg-grey-light">
      <span className="hidden md:block bg-purple absolute top-0 w-full h-96 z-0 rounded-b-3xl"></span>
      <div className="md:p-6 z-10 relative flex flex-col gap-8 md:gap-24">
        <PreviewHeader />
        <PreviewCard />
      </div>
    </main>
  );
}

export default GlobalPreview;
