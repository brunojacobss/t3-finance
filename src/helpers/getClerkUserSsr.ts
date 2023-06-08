import { clerkClient } from "@clerk/nextjs";
import { type GetServerSidePropsContext } from "next";
import { buildClerkProps, getAuth } from "@clerk/nextjs/server";

export const getClerkUserSsr = async (ctx: GetServerSidePropsContext) => {
  const { req } = ctx;
  const { userId } = getAuth(req);
  const user = userId ? await clerkClient.users.getUser(userId) : undefined;

  return {
    props: {
      ...buildClerkProps(ctx.req, { user }),
    },
  };
};
