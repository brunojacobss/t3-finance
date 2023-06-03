import { UserButton, useUser } from "@clerk/nextjs";
import {
  Landmark,
  LayoutGrid,
  List,
  Moon,
  PieChart,
  Settings,
} from "lucide-react";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import ThemeSwitch from "./themeSwitch";

export const SideBar = () => {
  const { user } = useUser();
  const { theme } = useTheme();

  return (
    <div className="dark fixed left-0 top-0 m-0 flex h-screen w-[18%] flex-col bg-background p-8">
      <h1 className="text-3xl text-foreground">t3-finance</h1>
      <p className="mt-12 text-slate-500">MANAGE</p>
      <div className="mt-4 flex  flex-col gap-8 text-foreground">
        <SideBarIconButton icon={<LayoutGrid />} label="Dashboard" />
        <SideBarIconButton icon={<Landmark />} label="Accounts" />
        <SideBarIconButton icon={<List />} label="Transactions" />
        <SideBarIconButton icon={<PieChart />} label="Analytics" />
        <SideBarIconButton icon={<Settings />} label="Settings" />
      </div>

      <p className="mt-12 text-slate-500">PREFERENCES</p>
      <div className="mt-4 flex flex-1 flex-col gap-8 text-foreground">
        <div className="flex items-center gap-4">
          <div className="flex gap-4 p-2">
            <Moon />
            <p className="dark">Dark Mode</p>
            <ThemeSwitch />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 text-foreground">
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "w-14 h-14 border-slate-500 border-2",
            },
            baseTheme: theme === "dark" ? dark : undefined,
            userProfile: {
              baseTheme: theme === "dark" ? dark : undefined,
            },
          }}
          afterSignOutUrl="/"
        />
        <p>{user?.fullName}</p>
      </div>
    </div>
  );
};

type SideBarIconButtonProps = {
  icon: React.ReactNode;
  label?: string;
  onClick?: () => void;
};

const SideBarIconButton = ({ icon, label }: SideBarIconButtonProps) => {
  return (
    <div className="w-50 flex cursor-pointer gap-4 rounded-sm p-2  transition-all hover:rounded-md hover:bg-slate-500">
      {icon}
      <p className="dark">{label}</p>
    </div>
  );
};
