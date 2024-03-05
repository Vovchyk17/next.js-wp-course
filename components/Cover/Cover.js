import Image from "next/image";

export const Cover = ({ children, background }) => {
  return (
    <div className="h-screen text-white bg-slate-800 relative min-h-[500px] flex justify-center items-center">
      <Image
        alt="Cover"
        src={background}
        fill
        priority
        className="mix-blend-soft-light object-cover"
      />
      <div className="m-w-5xl z-10">{children}</div>
    </div>
  );
};
