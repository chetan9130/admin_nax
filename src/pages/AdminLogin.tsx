import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

const ADMIN_EMAIL = "admin@naxshatra.com"; // 🔐 change this
const ADMIN_PASSWORD = "123456";            // 🔐 change this

const AdminLogin = () => {
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email !== ADMIN_EMAIL) {
      alert("Unauthorized email ❌");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("admin-auth", "true");
      navigate("/admin");
    } catch (err) {
      alert("Wrong email or password ❌");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-purple-950/20 p-6 rounded-lg w-full max-w-sm border border-purple-500/20">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          Admin Login
        </h2>

        <input
          type="email"
          value={email}
          placeholder="Admin Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-black/50 border border-purple-500/30 text-white"
        />

        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded bg-black/50 border border-purple-500/30 text-white"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded text-white font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
