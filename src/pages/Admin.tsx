import { useEffect, useState } from "react";
import { ref, onValue, remove, update } from "firebase/database";
import { db, auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [agreements, setAgreements] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "unread" | "read" | "agreements" | "settings"
  >("dashboard");

  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    // AUTH CHECK
    const unsubAuth = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) navigate("/admin-login");
      else setUser(currentUser);
    });

    // CONTACT MESSAGES
    const contactRef = ref(db, "contacts");
    const unsubDb = onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formatted = Object.entries(data).map(([id, value]: any) => ({
          id,
          ...value,
        }));
        setMessages(formatted);
      } else setMessages([]);
    });

    // AGREEMENTS FETCH
    const agrRef = ref(db, "agreements");
    const unsubAgr = onValue(agrRef, (snap) => {
      const data = snap.val();
      if (data) {
        const formatted = Object.entries(data).map(([id, value]: any) => ({
          id,
          ...value,
        }));
        setAgreements(formatted);
      } else setAgreements([]);
    });

    return () => {
      unsubAuth();
      unsubDb();
      unsubAgr();
    };
  }, [navigate]);

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("admin-auth");
    navigate("/");
  };

  // Delete message
  const deleteMessage = async (id: string) => {
    await remove(ref(db, `contacts/${id}`));
  };

  // Mark message as read
  const markAsRead = async (id: string) => {
    await update(ref(db, `contacts/${id}`), {
      read: true,
      readAt: new Date().toISOString(),
    });
  };

  // Delete agreement
  const deleteAgreement = async (id: string) => {
    await remove(ref(db, `agreements/${id}`));
  };

  const unreadMessages = messages.filter((msg) => !msg.read);
  const readMessages = messages.filter((msg) => msg.read);

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          {user && (
            <p className="text-white/60 text-sm mt-1">
              Logged in as:{" "}
              <span className="text-purple-400">{user.email}</span>
            </p>
          )}
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-medium"
        >
          Logout
        </button>
      </div>

      {/* TABS */}
      <div className="flex gap-4 mb-8 flex-wrap">
        {["dashboard", "unread", "read", "agreements", "settings"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 py-2 rounded capitalize ${
              activeTab === tab ? "bg-purple-600" : "bg-black/40"
            }`}
          >
            {tab === "unread"
              ? `Unread Messages (${unreadMessages.length})`
              : tab === "read"
              ? `Read Messages (${readMessages.length})`
              : tab === "agreements"
              ? `Agreements (${agreements.length})`
              : tab}
          </button>
        ))}
      </div>

      {/* DASHBOARD */}
      {activeTab === "dashboard" && (
        <div className="bg-purple-950/20 p-6 rounded-lg border border-purple-500/20">
          <h2 className="text-2xl font-bold mb-4">Dashboard Stats</h2>
          <p>Total Messages: {messages.length}</p>
          <p>Unread: {unreadMessages.length}</p>
          <p>Read: {readMessages.length}</p>
          <p>Total Agreements: {agreements.length}</p>
        </div>
      )}

      {/* UNREAD MESSAGES */}
      {activeTab === "unread" && (
        <div className="grid gap-6">
          {unreadMessages.map((msg) => (
            <div
              key={msg.id}
              className="bg-purple-950/20 p-6 rounded-lg border border-purple-500/20"
            >
              <p><b>Name:</b> {msg.name}</p>
              <p><b>Email:</b> {msg.email}</p>
              <p><b>Phone:</b> {msg.phone}</p>
              <p><b>Message:</b> {msg.message}</p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => markAsRead(msg.id)}
                  className="bg-green-600 px-4 py-2 rounded"
                >
                  Mark as Read
                </button>

                <button
                  onClick={() => deleteMessage(msg.id)}
                  className="bg-red-600 px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* READ MESSAGES */}
      {activeTab === "read" && (
        <div className="grid gap-6">
          {readMessages.map((msg) => (
            <div
              key={msg.id}
              className="bg-black/50 p-6 rounded-lg border border-purple-500/10"
            >
              <p><b>Name:</b> {msg.name}</p>
              <p><b>Email:</b> {msg.email}</p>
              <p><b>Phone:</b> {msg.phone}</p>
              <p><b>Message:</b> {msg.message}</p>

              <button
                onClick={() => deleteMessage(msg.id)}
                className="bg-red-600 px-4 py-2 rounded mt-4"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* AGREEMENTS TAB */}
      {activeTab === "agreements" && (
        <div className="grid gap-6">
          {agreements.map((agr) => (
            <div
              key={agr.id}
              className="bg-purple-950/20 p-6 rounded-lg border border-purple-500/20"
            >
              <p><b>Name:</b> {agr.fullName}</p>
              <p><b>Email:</b> {agr.email}</p>
              <p><b>Phone:</b> {agr.phone}</p>
              <p><b>Start:</b> {agr.startDate}</p>
              <p><b>Plan:</b> {agr.planName}</p>
              <p><b>Amount:</b> ₹{agr.amount}</p>
              <p><b>Status:</b> {agr.reminder28Sent ? "Completed" : "Active"}</p>

              <div className="flex gap-3 mt-4">
                <a
                  href={agr.agreementUrl}
                  target="_blank"
                  className="bg-blue-600 px-4 py-2 rounded"
                >
                  View Document
                </a>

                <button
                  onClick={() => deleteAgreement(agr.id)}
                  className="bg-red-600 px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SETTINGS */}
      {activeTab === "settings" && (
        <div className="bg-purple-950/20 p-6 rounded-lg border border-purple-500/20">
          <h2 className="text-2xl font-bold mb-2">Settings</h2>
          <p>Future admin settings go here.</p>
        </div>
      )}
    </div>
  );
};

export default Admin;
