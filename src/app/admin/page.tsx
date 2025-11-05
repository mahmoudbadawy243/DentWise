import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import AdminDashboardClient from "./AdminDashboardClient"

async function AdminPage() {
  
  const user = await currentUser()
  
  // if user not logged in
  if (!user) redirect("/")
  
  const adminEmail = process.env.ADMIN_EMAIL
  const userEmail = user.emailAddresses[0]?.emailAddress

  // if user not admin
  if (userEmail !== adminEmail) redirect("/dashboard")
  
  // "AdminDashboardClient" where client server parts will run in it like navbar and some UI
  return <AdminDashboardClient />
}

export default AdminPage
