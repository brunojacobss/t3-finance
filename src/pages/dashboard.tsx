import { Spinner } from "~/components/ui/spinner";
import { AppLayout } from "../components/ui/layout";
import { usePopulateUserCategories } from "~/hooks/usePopulateUserCategories";
import { useTabStore } from "~/store/zustand";
import Accounts from "~/components/ui/accounts";
import { DashboardHome } from "~/components/ui/home";
import { useUser } from "@clerk/nextjs";
import { env } from "~/env.mjs";

const Dashboard = () => {
  const { isLoading } = usePopulateUserCategories();
  const { selectedTab } = useTabStore();
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner size={16} />
      </div>
    );
  }

  if (user?.id !== env.NEXT_PUBLIC_ALLOWED_USER) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-lg">Sorry, you don&apos;t have access yet</h1>
      </div>
    );
  }

  return (
    <AppLayout>
      {isLoading && (
        <div className="flex h-screen w-full items-center justify-center">
          <Spinner size={16} />
        </div>
      )}
      {!isLoading && (
        <div>
          {selectedTab === "dashboard" && <DashboardHome />}
          {selectedTab === "accounts" && <Accounts />}
        </div>
      )}
    </AppLayout>
  );
};

export default Dashboard;
