import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { TaskProvider } from "./context/taskContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Task Manager - Next.js, Context y useReducer",
  description: "Aplicación para aprender Context API, useReducer y Types",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TaskProvider>
          {children}
        </TaskProvider>
      </body>
    </html>
  );
}
