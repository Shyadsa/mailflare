import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth/cookies";
import { getEnv } from "@/lib/cloudflare";

export const dynamic = "force-dynamic";

// Private installation: no public landing page or "Create account" call to action.
// Signed-in users go to their inbox; everyone else to /login, which itself sends a
// fresh install that has no admin yet to /setup.
export default async function HomePage() {
	const sessionUser = await getCurrentUser(getEnv()).catch(() => null);
	redirect(sessionUser ? "/inbox" : "/login");
}
