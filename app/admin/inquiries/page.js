"use client";
import React, { useState, useEffect } from "react";
import { 
  MdOutlineMessage, 
  MdCheckCircleOutline, 
  MdHistory, 
  MdOutlineSearch,
  MdDeleteOutline,
  MdAlternateEmail
} from "react-icons/md";
import frappe from "@/src/services/frappe";

const ManageInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const { data } = await frappe.get_list("Inquiry");
      setInquiries(data);
    } catch (err) {
      console.error("Error fetching inquiries", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleStatusUpdate = async (name, status) => {
    try {
      await frappe.db_update("Inquiry", name, { status });
      await fetchInquiries();
    } catch (err) {
      alert("Failed to update status");
    }
  };

  const handleDelete = async (name) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      try {
        await frappe.db_delete("Inquiry", name);
        await fetchInquiries();
      } catch (err) {
        alert("Failed to delete inquiry");
      }
    }
  };

  const filteredInquiries = inquiries.filter(inq => 
    inq.sender.toLowerCase().includes(searchTerm.toLowerCase()) || 
    inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inq.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* SEARCH TOOLBAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <MdOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
          <input 
            type="text" 
            placeholder="Search inquiries by name, email, or content..." 
            className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl py-2.5 pl-11 pr-4 focus:ring-1 focus:ring-[--yellowColor] focus:border-[--yellowColor] outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-400 font-bold uppercase tracking-widest">
          <span>{filteredInquiries.length} Inquiries Total</span>
        </div>
      </div>

      {/* INQUIRIES LIST / TABLE */}
      <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#121212] border-b border-[#333]">
              <tr>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Sender</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Message</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Status</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Received</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#333]">
              {loading ? (
                Array(3).fill(0).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan="5" className="px-6 py-12"><div className="h-4 bg-gray-800 rounded w-full"></div></td>
                  </tr>
                ))
              ) : filteredInquiries.length === 0 ? (
                <tr><td colSpan="5" className="px-6 py-20 text-center text-gray-500 italic">No inquiries found.</td></tr>
              ) : (
                filteredInquiries.map((inq, idx) => (
                  <tr key={idx} className="hover:bg-[#222] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-white">{inq.sender}</span>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                          <MdAlternateEmail className="text-[--yellowColor]" />
                          <span>{inq.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 max-w-[300px]">
                      <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed">
                        {inq.message}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ${
                        inq.status === "Pending" 
                          ? "bg-yellow-500/10 text-yellow-500" 
                          : "bg-green-500/10 text-green-500"
                      }`}>
                        {inq.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <MdHistory className="text-sm" />
                        <span>{new Date(inq.creation).toLocaleDateString()}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        {inq.status === "Pending" ? (
                          <button 
                            onClick={() => handleStatusUpdate(inq.name, "Resolved")}
                            className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-white transition-all tooltip"
                            title="Mark as Resolved"
                          >
                            <MdCheckCircleOutline />
                          </button>
                        ) : (
                          <button 
                            onClick={() => handleStatusUpdate(inq.name, "Pending")}
                            className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-all tooltip"
                            title="Restore to Pending"
                          >
                            <MdHistory />
                          </button>
                        )}
                        <button 
                          onClick={() => handleDelete(inq.name)}
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

export default ManageInquiries;
