"use client";
import React, { useState, useEffect } from "react";
import { 
  MdOutlineEmail, 
  MdHistory, 
  MdOutlineSearch,
  MdDeleteOutline,
} from "react-icons/md";
import frappe from "@/src/services/frappe";

const ManageSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchSubscribers = async () => {
    setLoading(true);
    try {
      const { data } = await frappe.get_list("Subscriber");
      setSubscribers(data);
    } catch (err) {
      console.error("Error fetching subscribers", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const handleDelete = async (name) => {
    if (window.confirm("Are you sure you want to remove this subscriber?")) {
      try {
        await frappe.db_delete("Subscriber", name);
        await fetchSubscribers();
      } catch (err) {
        alert("Failed to delete subscriber");
      }
    }
  };

  const filteredSubscribers = subscribers.filter(sub => 
    sub.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* SEARCH TOOLBAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <MdOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
          <input 
            type="text" 
            placeholder="Search subscribers by email..." 
            className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl py-2.5 pl-11 pr-4 focus:ring-1 focus:ring-[--yellowColor] focus:border-[--yellowColor] outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-400 font-bold uppercase tracking-widest">
          <span>{filteredSubscribers.length} Subscribers Total</span>
        </div>
      </div>

      {/* SUBSCRIBERS LIST / TABLE */}
      <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#121212] border-b border-[#333]">
              <tr>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Status</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Join Date</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#333]">
              {loading ? (
                Array(3).fill(0).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan="4" className="px-6 py-12"><div className="h-4 bg-gray-800 rounded w-full"></div></td>
                  </tr>
                ))
              ) : filteredSubscribers.length === 0 ? (
                <tr><td colSpan="4" className="px-6 py-20 text-center text-gray-500 italic">No subscribers found.</td></tr>
              ) : (
                filteredSubscribers.map((sub, idx) => (
                  <tr key={idx} className="hover:bg-[#222] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <MdOutlineEmail className="text-[--yellowColor] text-xl" />
                        <span className="font-bold text-sm text-white">{sub.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight bg-green-500/10 text-green-500">
                        {sub.status || "Subscribed"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <MdHistory className="text-sm" />
                        <span>{new Date(sub.creation).toLocaleDateString()}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => handleDelete(sub.name)}
                          className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                          title="Delete"
                        >
                          <MdDeleteOutline />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageSubscribers;
