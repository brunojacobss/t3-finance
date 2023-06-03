import type { PropsWithChildren } from "react";
import { SideBar } from "./sidebar";

export const AppLayout = (props: PropsWithChildren) => (
  <div className="flex h-screen items-center justify-center bg-background transition-all">
    <SideBar />
    <div className="ml-[18%]">{props.children}</div>
  </div>
);
