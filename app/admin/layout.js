import Sidebar from "@/src/adminComponents/Sidebar";

export const metadata = {
  title: "Biology Admin | Dashboard",
  description: "Administrative dashboard for the Biology-comics platform.",
};

export default function AdminLayout({ children }) {
  return (
    <div className="flex bg-[#121212] min-h-screen text-white font-sans">
      <Sidebar />
      <main className="flex-1 ml-[260px] p-8">
        <header className="flex justify-between items-center mb-10 pb-6 border-b border-[#333]">
          <div>
            <h2 className="text-3xl font-bold text-white">Administration</h2>
            <p className="text-gray-400 text-sm mt-1">Manage your platform and view performance.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-[--yellowColor] flex items-center justify-center text-black font-bold">
              AD
            </div>
            <span className="text-sm font-medium">Platform Admin</span>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
