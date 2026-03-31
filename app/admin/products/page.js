"use client";
import React, { useState, useEffect } from "react";
import { 
  MdAdd, 
  MdEdit, 
  MdDelete, 
  MdSearch,
  MdFilterList
} from "react-icons/md";
import frappe from "@/src/services/frappe";
import OptimizedImage from "@/src/mainComponents/OptimizedImage";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await frappe.get_list("Comic Book");
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      setLoading(true);
      try {
        await frappe.db_delete("Comic Book", name);
        await fetchProducts();
      } catch (err) {
        alert("Failed to delete product");
      } finally {
        setLoading(false);
      }
    }
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.studio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* TOOLBAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl py-2.5 pl-11 pr-4 focus:ring-1 focus:ring-[--yellowColor] focus:border-[--yellowColor] outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#333] hover:bg-[#222] transition-colors text-sm font-medium">
            <MdFilterList className="text-xl" />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[--yellowColor] text-black hover:brightness-110 transition-colors text-sm font-bold">
            <MdAdd className="text-xl" />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {/* PRODUCTS TABLE */}
      <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#121212] border-b border-[#333]">
              <tr>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Product</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Studio</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Price</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Created</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#333]">
              {loading ? (
                Array(4).fill(0).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan="5" className="px-6 py-10 bg-[#1a1a1a]">
                      <div className="h-4 bg-gray-800 rounded w-full"></div>
                    </td>
                  </tr>
                ))
              ) : filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-20 text-center text-gray-500 italic">
                    No products found.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product, idx) => (
                  <tr key={idx} className="hover:bg-[#222] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-10 relative bg-gray-800 rounded overflow-hidden flex-shrink-0">
                          <OptimizedImage src={product.imageUrl} alt={product.name} fill={true} />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-white capitalize">{product.name}</p>
                          <p className="text-xs text-gray-500 truncate w-32 translate-y-0.5">#{product.name.replace(/\s+/g, '-').toLowerCase()}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-300 capitalize">{product.studio}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-[--yellowColor]">${product.price.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-gray-500">{new Date(product.creation).toLocaleDateString()}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 rounded-lg bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white transition-all">
                          <MdEdit />
                        </button>
                        <button 
                          onClick={() => handleDelete(product.name)}
                          className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* PAGINATION MOCK */}
        <div className="px-6 py-4 bg-[#121212] flex items-center justify-between border-t border-[#333]">
          <p className="text-xs text-gray-500">Showing {filteredProducts.length} results</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-lg border border-[#333] text-xs disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded-lg border border-[#333] text-xs disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
