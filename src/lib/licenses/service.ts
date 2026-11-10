import type { LicenseEntitlements, LicenseStatus } from "./types";

// This installation is self-hosted for private use: every feature is unlocked and
// nothing is validated against an external license server (Paymug calls removed).
const UNLOCKED_STATUS: LicenseStatus = {
	plan: "team",
	state: "active",
	features: [],
	seatLimit: null,
	instanceId: "self-hosted",
	instanceUrl: null,
	active: true,
	activatedAt: null,
	validatedAt: null,
};

export async function getLicenseStatus(_env: CloudflareEnv): Promise<LicenseStatus> {
	return UNLOCKED_STATUS;
}

export async function getLicenseEntitlements(_env: CloudflareEnv): Promise<LicenseEntitlements> {
	return {
		plan: "team",
		canCustomizeBranding: true,
		canManageAccounts: true,
		canShareMailboxes: true,
		accountSeatLimit: null,
		canForwardEmail: true,
	};
}
