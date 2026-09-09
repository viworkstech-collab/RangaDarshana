import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, LockKeyhole, Mail, Send } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!email.trim()) {
      setError("Please enter your admin email.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to process password reset request."
        );
      }

      setMessage(
        data.message ||
          "If an account exists with this email, a password reset link has been sent."
      );
      setEmail("");
    } catch (error) {
      setError(
        error.message || "Unable to process password reset request."
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
            Forgot Password?
          </h1>

          <p className="mt-2 text-sm leading-6 text-[#7b6250]">
            Enter your admin email address and we will send you a password
            reset link.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-[#30384e]"
            >
              Admin Email
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a34732]"
              />

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin email"
                autoComplete="email"
                className="w-full rounded-xl border border-[#ded3c3] bg-white py-3 pl-11 pr-4 text-sm text-[#30384e] outline-none transition focus:border-[#d98b19] focus:ring-2 focus:ring-[#d98b19]/20"
              />
            </div>
          </div>

          {/* Success message */}
          {message && (
            <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm leading-5 text-green-700">
              {message}
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#e97900] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#c96300] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={18} />

            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {/* Back to login */}
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

export default ForgotPassword;