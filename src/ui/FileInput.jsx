import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

function FileInput({
  label,
  name,
  value,
  dir = "rtl",
  onChange,
  isRequired,
  className,
}) {
  return (
    <label
      htmlFor="file-upload"
      className={`cursor-pointer border-2 border-primary-900 rounded-lg x-3 py-2 text-primary-900 flex items-center justify-center gap-x-2 ${className}`}
    >
      {label}
      <ArrowUpTrayIcon className="w-5 h-5" />
      <input
        type="file"
        id="file-upload"
        className="sr-only"
        name={name}
        dir={dir}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
export default FileInput;
