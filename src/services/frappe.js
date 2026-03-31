// MOCK FRAPPE ERPNEXT SERVICE (Updated to use File-based API)

const apiCall = async (body) => {
  const response = await fetch('/api/mockdb', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  const rawText = await response.text();
  let data;
  try {
    data = JSON.parse(rawText);
  } catch (err) {
    throw new Error(`Invalid JSON response: ${rawText}`);
  }

  if (!response.ok) {
    const error = new Error(data.message || 'API request failed');
    error.status = response.status;
    error.code = data.error;
    throw error;
  }
  
  return data;
};

const frappe = {
  // Mock simple session
  login: async (usr, pwd) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    if (usr === "admin" && pwd === "admin") {
      return { message: "Logged In", full_name: "Platform Admin" };
    }
    throw new Error("Invalid login credentials");
  },

  logout: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { message: "Logged Out" };
  },

  get_list: async (doctype, { fields, filters, order_by, limit_page_length } = {}) => {
    return apiCall({ action: 'get_list', doctype });
  },

  get_doc: async (doctype, name) => {
    return apiCall({ action: 'get_doc', doctype, name });
  },

  db_insert: async (doctype, doc) => {
    return apiCall({ action: 'db_insert', doctype, doc });
  },

  db_update: async (doctype, name, doc) => {
    return apiCall({ action: 'db_update', doctype, name, doc });
  },

  db_delete: async (doctype, name) => {
    return apiCall({ action: 'db_delete', doctype, name });
  }
};

export default frappe;
