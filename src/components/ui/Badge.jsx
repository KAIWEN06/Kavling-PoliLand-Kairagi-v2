import clsx from "clsx";

function Badge({ status }) {
  const colors = {
    tersedia: "bg-green-100 text-green-700",

    booked: "bg-yellow-100 text-yellow-700",

    terjual: "bg-red-100 text-red-700",

    maintenance: "bg-slate-200 text-slate-700",
  };

  return (
    <span
      className={clsx(
        "px-3 py-1 rounded-full text-sm font-medium",
        colors[status]
      )}
    >
      {status}
    </span>
  );
}

export default Badge;