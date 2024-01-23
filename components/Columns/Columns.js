export const Columns = ({ stackOnMobile, children }) => {
  return (
    <div className="my-10">
      <div
        className={`max-w-5xl mx-auto ${
          stackOnMobile ? "block md:flex" : "flex"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
