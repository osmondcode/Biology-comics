import { promises as fs } from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'db.json');

async function readDB() {
  try {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      // If file doesn't exist, return empty structure (though we just created it)
      return { "Comic Book": [], "Order": [], "Inquiry": [], "Subscriber": [] };
    }
    throw error;
  }
}

async function writeDB(data) {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { action, doctype, name, doc } = body;
    
    // Slight artificial delay to simulate real network/DB timing
    await new Promise(r => setTimeout(r, 400));
    
    const db = await readDB();
    
    if (!db[doctype]) {
      db[doctype] = [];
    }

    switch (action) {
      case 'get_list':
        return Response.json({ data: db[doctype] });

      case 'get_doc':
        const foundDoc = db[doctype].find(d => d.name === name);
        return Response.json({ data: foundDoc || null });

      case 'db_insert':
        // Custom Logic: Prevent duplicate subscribers
        if (doctype === 'Subscriber') {
          const emailExists = db[doctype].some(sub => sub.email.toLowerCase() === doc.email.toLowerCase());
          if (emailExists) {
            return Response.json(
              { error: "ALREADY_SUBSCRIBED", message: "This email is already subscribed." }, 
              { status: 409 } // 409 Conflict
            );
          }
        }
        
        db[doctype].unshift(doc); // Add to the top
        await writeDB(db);
        return Response.json({ data: doc });

      case 'db_update':
        const updateIndex = db[doctype].findIndex(d => d.name === name);
        if (updateIndex !== -1) {
          db[doctype][updateIndex] = { ...db[doctype][updateIndex], ...doc };
          await writeDB(db);
          return Response.json({ data: db[doctype][updateIndex] });
        }
        return Response.json({ error: "Not Found" }, { status: 404 });

      case 'db_delete':
        const deleteIndex = db[doctype].findIndex(d => d.name === name);
        if (deleteIndex !== -1) {
          db[doctype].splice(deleteIndex, 1);
          await writeDB(db);
          return Response.json({ message: "ok" });
        }
        return Response.json({ error: "Not Found" }, { status: 404 });

      default:
        return Response.json({ error: "Invalid action" }, { status: 400 });
    }

  } catch (error) {
    console.error("Mock DB API Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
