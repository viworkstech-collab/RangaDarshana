import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  KeyRound,
  LockKeyhole,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    // Check password
    if (!password) {
      setError("Please enter your new password.");
      return;
    }

    // Minimum password length
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Check confirm password
    if (!confirmPassword) {
      setError("Please confirm your new password.");
      return;
    }

    // Check passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!token) {
      setError("Invalid or missing password reset link.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${API_URL}/api/auth/reset-password/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to reset password."
        );
      }

      setMessage(
        data.message || "Password reset successfully."
      );

      setPassword("");
      setConfirmPassword("");

      // Go back to admin login after successful reset
      setTimeout(() => {
        navigate("/admin/login");
      }, 2000);
    } catch (error) {
      setError(
        error.message || "Unable to reset password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f1e6] px-4">
      <div className="w-full max-w-md rounded-2xl border border-[#eadfce] bg-white p-8 shadow-[0_12px_35px_rgba(76,55,32,0.12)]">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#e3b66b] bg-[#fff7e6]">
            <LockKeyhole
              size={28}
              strokeWidth={1.7}
              className="text-[#a34732]"
            />
          </div>

          <h1 className="font-serif text-3xl font-bold text-[#18213b]">
            Reset Password
          </h1>

          <p className="mt-2 text-sm leading-6 text-[#7b6250]">
            Enter your new password below.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* New Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-[#30384e]"
            >
              New Password
            </label>

            <div className="relative">
              <KeyRound
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a34732]"
              />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                autoComplete="new-password"
                className="w-full rounded-xl border border-[#ded3c3] bg-white py-3 pl-11 pr-12 text-sm text-[#30384e] outline-none transition focus:border-[#d98b19] focus:ring-2 focus:ring-[#d98b19]/20"
              />

              {/* Show / Hide Password */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7b6250] transition hover:text-[#a34732]"
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-semibold text-[#30384e]"
            >
              Confirm Password
            </label>

            <div className="relative">
              <KeyRound
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a34732]"
              />

              <input
                id="confirmPassword"
                type={
                  showConfirmPassword ? "text" : "password"
                }
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                placeholder="Confirm new password"
                autoComplete="new-password"
                className="w-full rounded-xl border border-[#ded3c3] bg-white py-3 pl-11 pr-12 text-sm text-[#30384e] outline-none transition focus:border-[#d98b19] focus:ring-2 focus:ring-[#d98b19]/20"
              />

              {/* Show / Hide Confirm Password */}
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7b6250] transition hover:text-[#a34732]"
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Success Message */}
          {message && (
            <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm leading-5 text-green-700">
              {message}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-600">
              {error}
            </div>
          )}

          {/* Reset Button */}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#e97900] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#c96300] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
          >
            <LockKeyhole size={18} />

            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-6 text-center">
          <Link
            to="/admin/login"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#a34732] transition hover:text-[#7f3424] hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;