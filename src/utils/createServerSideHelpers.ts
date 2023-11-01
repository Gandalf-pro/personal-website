import { createServerSideHelpers } from "@trpc/react-query/server";
import superjson from "superjson";
import { type AppRouter } from "~/server/api/root";

import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { getBaseUrl } from "./api";

const proxyClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
  transformer: superjson,
});

export const helpers = createServerSideHelpers({
  client: proxyClient,
});
