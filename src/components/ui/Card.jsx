import clsx from "clsx";

function Card({ children, className = "" }) {
  return (
    <div
      className={clsx(
        "bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;