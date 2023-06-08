import SideBar from "./sidebar";

type Props = {
  children?: React.ReactNode;
};

export const AppLayout = (props: Props) => (
  <div className="flex h-full w-full bg-background transition-all">
    <SideBar />
    <div className="h-full w-full">
      <div className="h-screen overflow-hidden">{props.children}</div>
    </div>
  </div>
);
