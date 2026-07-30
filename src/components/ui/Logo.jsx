import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="h-10 w-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
        RD
      </div>

      <div>
      <h1 className="text-2xl font-bold text-gray-900">
        Rangadarshana
      </h1>
      <p className="text-xs text-gray-500">
        Preserving Karnataka's Theatre Heritage
      </p>
      </div>
    </Link>
  );
}

export default Logo;