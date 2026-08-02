import React from "react";
import { cn } from "../../lib/utils";

export default function LoginForn() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div
        className={cn(
          "w-full max-w-md rounded-xl p-8",
          "bg-white dark:bg-neutral-900",
          "shadow-xl",
        )}
      >
        <h2 className="text-3xl font-bold text-center">
          Sign in to your account
        </h2>

        <p className="mt-2 text-center text-neutral-500">
          Welcome back! Please enter your details.
        </p>

        <div className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="
            w-full rounded-lg border
            px-4 py-3
            outline-none
            focus:ring-2
            "
          />

          <input
            type="password"
            placeholder="Password"
            className="
            w-full rounded-lg border
            px-4 py-3
            outline-none
            focus:ring-2
            "
          />

          <button
            className="
            w-full rounded-lg
            bg-black
            py-3
            text-white
            hover:opacity-90
            "
          >
            Sign in
          </button>
        </div>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-neutral-300" />

          <span>OR</span>

          <div className="h-px flex-1 bg-neutral-300" />
        </div>

        <button
          className="
          w-full rounded-lg
          border
          py-3
          "
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
