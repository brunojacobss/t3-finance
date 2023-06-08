import type { ClerkSsrUserProps } from "~/shared/clerkSsrUser";

export const getClerkUserFromProps = (props: ClerkSsrUserProps) =>
  props.__clerk_ssr_state.user;
