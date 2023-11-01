import { IconLoader2 } from "@tabler/icons-react";
import { type NextPage } from "next";
import { useState } from "react";
import AppWrapper from "~/components/AppWrapper";
import { api } from "~/utils/api";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

const AdminLogin: NextPage = () => {
  const router = useRouter();
  const loginMutation = api.auth.login.useMutation({
    onSuccess(data, variables, context) {
      setCookie("auth-token", data.token, {
        maxAge: 23 * 60 * 60, // 23 hours
      });
      void router.replace("/admin/dashboard");
    },
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AppWrapper className="mx-auto max-w-4xl px-2 pt-12 sm:px-0">
      <h1 className="w-full py-2 text-center text-5xl font-bold">
        Admin Login
      </h1>
      <form
        className="mt-6"
        onSubmit={(e) => {
          e.preventDefault();
          loginMutation.mutate({ email, password });
        }}
      >
        <div className="flex w-full flex-col gap-3">
          {loginMutation.error && (
            <div className="flex w-full gap-3">
              <div className="flex-1 rounded-lg bg-destructive bg-opacity-50 p-2 px-4 py-4 text-white">
                {loginMutation.error.message}
              </div>
            </div>
          )}
          <input
            name="email"
            type="email"
            id="email"
            className="w-full rounded-lg bg-black bg-opacity-50 p-2 px-4 py-4 text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            placeholder="Email *"
            maxLength={60}
            required
            disabled={loginMutation.isLoading}
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <input
            name="password"
            id="password"
            type="password"
            className="w-full rounded-lg bg-black bg-opacity-50 p-2 px-4 py-4 text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            placeholder="Password *"
            maxLength={50}
            required
            disabled={loginMutation.isLoading}
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button
            disabled={loginMutation.isLoading}
            type="submit"
            className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-black bg-opacity-50 p-2 px-4 py-3 text-lg font-semibold text-white hover:bg-opacity-70 focus:outline-none disabled:pointer-events-none"
          >
            {loginMutation.isLoading ? (
              <IconLoader2 className="h-6 w-6 animate-spin" />
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>
    </AppWrapper>
  );
};

export default AdminLogin;
