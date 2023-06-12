import { useTabStore } from "~/store/zustand";
import SideBar from "./sidebar";
import capitalize from "~/helpers/capitalize";

type Props = {
  children?: React.ReactNode;
};

export const AppLayout = (props: Props) => {
  const { selectedTab } = useTabStore();

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background transition-all sm:flex-row">
      <button className="z-90 fixed bottom-10 right-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-4xl text-secondary drop-shadow-lg transition-all hover:bg-primary/90">
        &#43;
      </button>
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
