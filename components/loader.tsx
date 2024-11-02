import Image from "next/image";
import imageAsset from "../app/public/icon.png";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="logo" fill src={imageAsset} />
      </div>
      <p className="text-sm text-muted-foreground">Stem is thinking...</p>
    </div>
  );
};

export default Loader;
