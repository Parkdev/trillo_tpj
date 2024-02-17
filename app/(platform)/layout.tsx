import { ClerkProvider } from "@clerk/nextjs";

import { koKR } from "@clerk/localizations";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider localization={koKR}>{children}</ClerkProvider>;
};

export default PlatformLayout;
