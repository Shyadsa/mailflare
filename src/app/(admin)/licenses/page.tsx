import { redirect } from "next/navigation";

// Licensing is disabled in this installation; every feature is already unlocked.
export default function LicensesPage() {
	redirect("/admin");
}
