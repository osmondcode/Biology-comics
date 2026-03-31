"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  MdSpaceDashboard, 
  MdOutlineLibraryBooks, 
  MdOutlineShoppingCart, 
  MdOutlineSettings, 
  MdLogout,
  MdOutlineMessage,
  MdOutlinePeople
} from "react-icons/md";

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", icon: <MdSpaceDashboard />, href: "/admin" },
    { name: "Products", icon: <MdOutlineLibraryBooks />, href: "/admin/products" },
    { name: "Inquiries", icon: <MdOutlineMessage />, href: "/admin/inquiries" },
    { name: "Subscribers", icon: <MdOutlinePeople />, href: "/admin/subscribers" },
    { name: "Orders", icon: <MdOutlineShoppingCart />, href: "/admin/orders" },
    { name: "Settings", icon: <MdOutlineSettings />, href: "/admin/settings" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-[260px] bg-[#1a1a1a] border-r border-[#333] flex flex-col p-6 z-50">
      <div className="mb-10">
        <h1 className="text-2xl font-bold italic text-white flex items-center gap-2">
          Biology <span className="text-[12px] bg-[--yellowColor] text-black px-2 py-0.5 rounded not-italic">Admin</span>
        </h1>
      </div>

      <nav className="flex-1 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.name} 
              href={link.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? "bg-[--yellowColor] text-black font-semibold" 
                  : "text-gray-400 hover:bg-[#2a2a2a] hover:text-white"
              }`}
            >
              <span className="text-[22px]">{link.icon}</span>
              <span className="text-[16px]">{link.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-[#333]">
        <button className="w-full flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-red-400 rounded-lg hover:bg-red-400/10 transition-all duration-200">
          <MdLogout className="text-[22px]" />
          <span className="text-[16px]">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
