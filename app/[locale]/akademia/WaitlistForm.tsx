"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type Props = {
  labelText: string;
  buttonText: string;
  successText: string;
  errorText: string;
};

export function WaitlistForm({
  labelText,
  buttonText,
  successText,
  errorText,
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle",
  );

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("loading");
        // PLACEHOLDER: подключить Resend / Supabase / любую очередь.
        // Пока просто эмулируем успешную отправку.
        await new Promise((r) => setTimeout(r, 600));
        setStatus("ok");
        setEmail("");
      }}
      className="flex flex-col gap-4"
    >
      <label className="mono text-xs uppercase tracking-wider">
        {labelText}
      </label>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="h-14 border-b border-frime-ink bg-transparent text-2xl placeholder:opacity-40 focus:outline-none md:text-3xl"
      />
      <Button
        type="submit"
        variant="ink"
        size="lg"
        className="self-start"
        disabled={status === "loading"}
      >
        {status === "loading" ? "..." : buttonText}
      </Button>
      {status === "ok" ? (
        <p className="mono text-xs">{successText}</p>
      ) : null}
      {status === "err" ? (
        <p className="mono text-xs">{errorText}</p>
      ) : null}
    </form>
  );
}
