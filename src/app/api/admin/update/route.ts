import { NextResponse } from "next/server";

// Version checks and the GitHub update workflow are disabled in this installation:
// it never contacts GitHub. Updates are pulled from upstream manually.
// (Database migrations live at /api/admin/migrations and are unaffected.)
function disabled() {
	return NextResponse.json({ error: "Automatic update checks are disabled in this installation" }, { status: 404 });
}

export const GET = disabled;
export const POST = disabled;
