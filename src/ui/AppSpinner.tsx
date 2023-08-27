import { MoonLoader, PropagateLoader } from "react-spinners";
import brandLogo from "@/assets/brand/logo_icon.svg";

interface AppSpinnerProps {
  loading: boolean;
}

export function AppSpinner({ loading }: AppSpinnerProps) {
  return (
    <div
      className={`${
        loading ? "" : "hidden"
      } absolute top-0 bottom-0 left-0 right-0 z-20 flex flex-col justify-center items-center gap-4 bg-[rgba(255,255,255,.9)]`}
    >
      <img src={brandLogo} width={70} className="animate-loop-opacity" />
      <PropagateLoader
        color="#633CFF"
        loading={true}
        speedMultiplier={0.8}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export function AppLoader({ loading }: AppSpinnerProps) {
  return (
    <MoonLoader
      color="#633CFF"
      loading={loading}
      speedMultiplier={0.8}
      size={15}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
