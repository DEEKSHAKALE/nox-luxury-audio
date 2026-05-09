export default function Loader() {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-[0.4em] text-white">
            NOX
          </h1>
  
          <div className="mt-6 h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-full animate-pulse bg-white" />
          </div>
        </div>
      </div>
    );
  }