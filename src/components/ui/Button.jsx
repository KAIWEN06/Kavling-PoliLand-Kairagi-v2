import clsx from "clsx";

function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  onClick,
}) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none";

const variants = {

primary:
"bg-gradient-to-r from-blue-900 to-blue-700 text-white hover:-translate-y-1 hover:shadow-xl",

secondary:
"bg-gradient-to-r from-green-700 to-green-500 text-white hover:-translate-y-1 hover:shadow-xl",

accent:
"bg-gradient-to-r from-amber-600 to-yellow-500 text-white hover:-translate-y-1 hover:shadow-xl",

outline:
"border border-white text-white hover:bg-white hover:text-black",

ghost:
"text-white hover:bg-white/10"

};

  const sizes = {
    sm: "px-3 py-2 text-sm",

    md: "px-5 py-3 text-base",

    lg: "px-7 py-4 text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        base,
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;