import { useTabStore } from "~/store/zustand";
import SideBar from "./sidebar";
import capitalize from "~/helpers/capitalize";

type Props = {
  children?: React.ReactNode;
};

export const AppLayout = (props: Props) => {
  const { selectedTab } = useTabStore();
  return (
    <div className="flex h-screen overflow-hidden bg-background transition-all">
      <SideBar />
      <div className="flex w-full flex-col">
        <h1 className="p-12 font-bold sm:text-4xl">
          {capitalize(selectedTab)}
        </h1>
        <div className="h-full overflow-auto bg-[#F6F6F6] p-12 dark:bg-slate-800">
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
};
