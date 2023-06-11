import { Spinner } from "~/components/ui/spinner";
import { AppLayout } from "../components/ui/layout";
import { usePopulateUserCategories } from "~/hooks/usePopulateUserCategories";
import { useTabStore } from "~/store/zustand";
import Accounts from "~/components/ui/accounts";
import { DashboardHome } from "~/components/ui/home";

const Dashboard = () => {
  const { isLoading } = usePopulateUserCategories();
  const { selectedTab } = useTabStore();

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
