import PropagateLoader from "react-spinners/PropagateLoader";

export default function Loading({ loading }: { loading: boolean }) {
    
  if (loading) {
    return (
      <div className="absolute top-0 w-[100vw] h-[100vh] bg-white/60 flex items-center justify-center">
        <PropagateLoader color="rgb(2 132 199)" />
      </div>
    );
  } else {
    return null;
  }
}
