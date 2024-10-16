import Link from "next/link";
import "../globals.css";

export const metadata = {
  title: "Admin",
  description: "admin page",
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full">
      <body className="flex flex-col h-full w-full">
        <div className="flex flex-1">
          <div className="flex flex-col h-full bg-black p-[10px] space-y-[10px]">
            <Link href={"/admin/blogs"} className="text-white">Blogs</Link>
            <Link href={"/admin/courses"} className="text-white">Courses</Link>
            <Link href={"/admin/profile"} className="text-white">Profile</Link>
          </div>
          <div className="flex flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
