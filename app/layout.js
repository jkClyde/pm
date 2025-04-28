import "./globals.css";
import { Sidebar } from "@/components/Sidebar";


export const metadata = {
  title: "Project Manager",
  description: "Personal Project and Task Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
       <div className="flex transition-all duration-300 ease-in-out">
        <Sidebar/>
       {children}
       </div>
      </body>
    </html>
  );
}
