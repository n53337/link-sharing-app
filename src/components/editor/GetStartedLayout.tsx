import getStartedImg from "@/assets/images/add_new.svg";

function GetStartedLayout() {
  return (
    <div className="px-4 py-10 bg-grey-light rounded-lg flex flex-col justify-center items-center gap-8 md:h-full ">
      <img src={getStartedImg} className="w-5/12" />
      <h2 className="font-bold text-grey text-2xl">Let’s get you started</h2>
      <p className="text-grey-50 text-center md:px-8">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
}

export default GetStartedLayout;
