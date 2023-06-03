import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "../api/root";
import SuperJSON from "superjson";

export const generateSsgHelper = () => {
  return createServerSideHelpers({
    router: appRouter,
    ctx: { userId: null },
    transformer: SuperJSON,
  });
};
