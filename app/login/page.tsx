import LoginForm from "../components/LoginForm";
import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession(options);
  if (session) {
    redirect("/");
  }
  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <LoginForm />
    </div>
  );
}

export default page;
