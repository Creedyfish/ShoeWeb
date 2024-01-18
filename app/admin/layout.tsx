/**
 * Imports the `Dashboard` component from "../components/Dashboard".
 * This component is used to display the dashboard.
 */
import Dashboard from "../components/Dashboard";

/**
 * Defines the `DashboardLayout` function.
 * This function is a layout component that wraps its children with a dashboard layout.
 *
 * @param {object} props - The props of the function.
 * @param {React.ReactNode} props.children - The children to be wrapped with the dashboard layout.
 *
 * @returns {JSX.Element} The dashboard layout component.
 */
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
