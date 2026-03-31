import os

root_dir = r"c:\Users\osmon\Documents\Biology-comics\src\mainComponents"

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(".jsx"):
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            if not content.startswith('"use client"') and not content.startswith("'use client'"):
                print(f"Adding 'use client' to {file_path}")
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write('"use client";\n' + content)
