import Dashboard from "../components/Dashboard";
import { Session, getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto md:flex px-2 gap-4 py-4">
      <Dashboard />
      <div className="container flex w-full">{children}</div>
    </section>
  );
}
