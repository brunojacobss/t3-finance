import SideBar from "./sidebar";

type Props = {
  children?: React.ReactNode;
};

export const AppLayout = (props: Props) => (
  <div className="flex h-full w-full bg-background transition-all">
    <SideBar />
    <div className="h-full w-full overflow-hidden">
      <div className="h-screen">{props.children}</div>
    </div>
  </div>
);
