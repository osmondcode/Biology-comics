import "./globals.css";
import { AppProvider } from "./context/AppContext";

export const metadata = {
  title: "Biology Web",
  description: "Biology comics and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
