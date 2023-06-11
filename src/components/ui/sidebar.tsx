import { UserButton, useUser } from "@clerk/nextjs";
import {
  Landmark,
  LayoutGrid,
  List,
  type LucideIcon,
  Moon,
  PieChart,
  Settings,
} from "lucide-react";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import ThemeSwitch from "./themeSwitch";
import { useTabStore } from "~/store/zustand";
import { useEffect, useState } from "react";
import { primaryDarkModeGreen } from "~/shared/consts";

const SideBar = () => {
  const { theme } = useTheme();
  const { user } = useUser();
  const { selectedTab, changeTab } = useTabStore();

  const onClick = (newValue: SideBarIconButtonId) => {
    changeTab(newValue);
  };

  return (
    <div className="flex h-screen min-w-max flex-col bg-background p-8">
      <h1 className="text-3xl text-foreground">t3-finance</h1>
      <p className="mt-12 text-slate-500">MANAGE</p>
      <div className="mt-4 flex  flex-col gap-8 text-foreground">
        <SideBarIconButton
          id="dashboard"
          selected={selectedTab === "dashboard"}
          onClick={onClick}
          label="Dashboard"
        />
        <SideBarIconButton
          id="accounts"
          selected={selectedTab === "accounts"}
          onClick={onClick}
          label="Accounts"
        />
        <SideBarIconButton
          id="transactions"
          selected={selectedTab === "transactions"}
          onClick={onClick}
          label="Transactions"
        />
        <SideBarIconButton
          id="analytics"
          selected={selectedTab === "analytics"}
          onClick={onClick}
          label="Analytics"
        />
        <SideBarIconButton
          id="settings"
          selected={selectedTab === "settings"}
          onClick={onClick}
          label="Settings"
        />
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

type SideBarIconButtonId =
  | "dashboard"
  | "accounts"
  | "transactions"
  | "analytics"
  | "settings";
type SideBarIconButtonProps = {
  id: SideBarIconButtonId;
  selected?: boolean;
  label?: string;
  onClick: (newValue: SideBarIconButtonId) => void;
};

const iconMap: Record<SideBarIconButtonId, LucideIcon> = {
  dashboard: LayoutGrid,
  accounts: Landmark,
  transactions: List,
  analytics: PieChart,
  settings: Settings,
};

const SideBarIconButton = ({
  id,
  label,
  onClick,
  selected,
}: SideBarIconButtonProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const selectedBackground = selected ? "bg-slate-300 dark:bg-slate-500" : "";
  const selectedIconColor = selected
    ? primaryDarkModeGreen
    : theme === "dark"
    ? "#E1E7EF"
    : "black";
  const Icon = iconMap[id];
  return (
    <div
      id={id}
      onClick={() => onClick(id)}
      className={`${selectedBackground} w-50 flex cursor-pointer gap-4 rounded-sm p-2  transition-all hover:rounded-md hover:bg-slate-300 dark:hover:bg-slate-500`}
    >
      <Icon color={selectedIconColor} />
      <p className={`${selected ? "font-semibold" : ""}`}>{label}</p>
    </div>
  );
};

export default SideBar;
