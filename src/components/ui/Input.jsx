function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full h-12 rounded-lg border border-slate-200 px-4 outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-100 ${className}`}
    />
  );
}

export default Input;