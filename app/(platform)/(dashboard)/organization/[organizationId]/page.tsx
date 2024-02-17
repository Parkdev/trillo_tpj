import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const OrganizationIdPage = () => {
  const { userId, orgId } = auth();
  return (
    <div>
      <OrganizationSwitcher />
    </div>
  );
};

export default OrganizationIdPage;
