import { AppLayout } from "../components/ui/layout";
import { usePopulateUserCategories } from "~/hooks/usePopulateUserCategories";

const Dashboard = () => {
  const { isLoading } = usePopulateUserCategories();

  return (
    <AppLayout>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && (
        <h1 className="text-4xl font-bold text-primary sm:text-[4rem]">
          Dashboard
        </h1>
      )}
    </AppLayout>
  );
};

export default Dashboard;
