"use client";
import React, { useState, useEffect } from "react";
import { 
  MdOutlineLibraryBooks, 
  MdOutlineShoppingCart, 
  MdAttachMoney, 
  MdPeopleOutline,
  MdOutlineSettings
} from "react-icons/md";
import frappe from "@/src/services/frappe";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    revenue: 0,
    customers: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      try {
        const { data: comics } = await frappe.get_list("Comic Book");
        const { data: orders } = await frappe.get_list("Order");
        
        const totalRevenue = orders.reduce((acc, order) => acc + (order.total || 0), 0);
        
        setStats({
          products: comics.length,
          orders: orders.length,
          revenue: totalRevenue,
          customers: 156 // Mocked constant
        });
      } catch (err) {
        console.error("Failed to fetch stats", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const statCards = [
    { title: "Total Products", value: stats.products, icon: <MdOutlineLibraryBooks />, color: "bg-blue-500/10 text-blue-500" },
    { title: "Orders Received", value: stats.orders, icon: <MdOutlineShoppingCart />, color: "bg-green-500/10 text-green-500" },
    { title: "Total Revenue", value: `$${stats.revenue.toLocaleString()}`, icon: <MdAttachMoney />, color: "bg-[--yellowColor] text-black font-bold" },
    { title: "Active Customers", value: stats.customers, icon: <MdPeopleOutline />, color: "bg-purple-500/10 text-purple-500" },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, idx) => (
          <div key={idx} className="bg-[#1a1a1a] border border-[#333] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className={`p-2.5 rounded-xl text-2xl ${card.color}`}>
                {card.icon}
              </span>
              <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">Stats</span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium">{card.title}</h3>
            <p className="text-2xl font-bold mt-1 text-white">
              {loading ? "..." : card.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* RECENT ACTIVITY MOCK */}
        <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            Recent Orders
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-[#333] bg-[#222]">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-gray-700 rounded-lg flex items-center justify-center font-bold">#</div>
                  <div>
                    <p className="font-semibold text-sm text-white">Order #ORD-202{i+1}</p>
                    <p className="text-xs text-gray-500 mt-1">2 mins ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm text-[--yellowColor]">$1,200</p>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 uppercase font-bold tracking-tight">Success</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-6 rounded-2xl bg-[#222] border border-[#333] hover:border-[--yellowColor] transition-all group">
              <div className="mb-4 text-2xl group-hover:text-[--yellowColor] transition-colors"><MdOutlineLibraryBooks /></div>
              <p className="font-semibold text-sm">Add New Product</p>
            </button>
            <button className="p-6 rounded-2xl bg-[#222] border border-[#333] hover:border-[--yellowColor] transition-all group">
              <div className="mb-4 text-2xl group-hover:text-[--yellowColor] transition-colors"><MdOutlineShoppingCart /></div>
              <p className="font-semibold text-sm">Review Orders</p>
            </button>
            <button className="p-6 rounded-2xl bg-[#222] border border-[#333] hover:border-[--yellowColor] transition-all group">
              <div className="mb-4 text-2xl group-hover:text-[--yellowColor] transition-colors"><MdPeopleOutline /></div>
              <p className="font-semibold text-sm">Manage Users</p>
            </button>
            <button className="p-6 rounded-2xl bg-[#222] border border-[#333] hover:border-[--yellowColor] transition-all group">
              <div className="mb-4 text-2xl group-hover:text-[--yellowColor] transition-colors"><MdOutlineSettings /></div>
              <p className="font-semibold text-sm">Edit Site Policy</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
