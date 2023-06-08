import type { User } from "@clerk/nextjs/dist/types/server";

export type ClerkSsrUserProps = {
  __clerk_ssr_state: {
    user: User;
    userId: string;
  };
};
