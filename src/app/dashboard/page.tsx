import { auth, currentUser } from "@clerk/nextjs";
import { DashboardNav } from "./DashboardNav";
import Hero from "../hero/page";
import Header from "@/components/header";
import Footer from "@/components/Footer";

export default async function DashboardPage() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }

  return (
    <>
      {/* <DashboardNav /> */}
      <Hero />

    </>
  );
}
