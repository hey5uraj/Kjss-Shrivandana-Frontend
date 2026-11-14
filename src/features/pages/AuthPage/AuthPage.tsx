"use client";

import { FormEvent, useId, useState } from "react";

type Mode = "login" | "signup";

const serif = "font-[family-name:var(--font-marcellus)]";

/* ---------- Logo ---------- */
function Logo() {
    return (
        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" aria-hidden="true">
            <circle cx="39" cy="39" r="37.5" stroke="#B9782E" strokeWidth="1.5" />
            <circle cx="39" cy="39" r="26" stroke="#B9782E" strokeWidth="1.5" />
            <ellipse cx="39" cy="39" rx="22" ry="10" stroke="#B9782E" strokeWidth="1.5" />
            <ellipse cx="39" cy="39" rx="10" ry="22" stroke="#B9782E" strokeWidth="1.5" />
            <rect x="31" y="31" width="16" height="16" rx="2" fill="#D4452B" />
        </svg>
    );
}

/* ---------- Field ---------- */
type FieldProps = {
    label: string;
    type?: string;
    name: string;
    autoComplete?: string;
    required?: boolean;
    inputMode?: "text" | "email" | "tel" | "numeric";
};

function Field({ label, type = "text", name, autoComplete, required = true, inputMode }: FieldProps) {
    const id = useId();
    return (
        <div className="space-y-1.5">
            <label htmlFor={id} className="block text-[13px] font-medium text-[#efe6ff]">
                {label}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                required={required}
                inputMode={inputMode}
                autoComplete={autoComplete}
                className="h-[42px] w-full rounded-xl border border-[#352853] bg-[#251a3b] px-3.5 text-sm text-white
                   outline-none transition placeholder:text-[#7b6a9c]
                   focus:border-[#f5b942] focus:ring-2 focus:ring-[#f5b942]/25"
            />
        </div>
    );
}

/* ---------- Main ---------- */
export default function AuthPage() {
    const [mode, setMode] = useState<Mode>("login");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const isLogin = mode === "login";

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);
        const data = Object.fromEntries(new FormData(e.currentTarget));

        if (!isLogin && data.password !== data.confirmPassword) {
            setError("Passwords do not match. Enter the same password in both fields.");
            return;
        }

        try {
            setLoading(true);
            // TODO: replace with your API call
            // await fetch(isLogin ? "/api/auth/login" : "/api/auth/register", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify(data),
            // });
            console.log(mode, data);
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="grid min-h-screen grid-cols-1 md:grid-cols-2">
            {/* Left – brand panel */}
            <section className="flex flex-col items-center justify-top bg-[#2b1a4a] px-8 py-10 text-center md:sticky md:top-0 md:h-screen md:py-30">
                <Logo />
                <h1 className={`${serif} mt-7 text-[34px] leading-tight text-[#fbeee4] md:text-[40px]`}>
                    Welcome to Shrivandana
                </h1>
                <p className="mt-5 max-w-[260px] text-[14px] leading-relaxed text-[#d4c6ee]">
                    Book pujas, offer chadhava and keep your daily prayers in one place.
                </p>
            </section>
            {/* Right – form panel */}
            <section className="flex items-top justify-center bg-[#1b1229] px-6 py-12">
                <div className="w-full max-w-[328px]">
                    {/* Tabs */}
                    <div
                        role="tablist"
                        aria-label="Authentication"
                        className="grid grid-cols-2 rounded-full border border-[#352853] bg-[#221736]"
                    >
                        {(["login", "signup"] as Mode[]).map((m) => {
                            const active = mode === m;
                            return (
                                <button
                                    key={m}
                                    role="tab"
                                    type="button"
                                    aria-selected={active}
                                    onClick={() => {
                                        setMode(m);
                                        setError(null);
                                    }}
                                    className={`h-[42px] rounded-full text-[13px] font-bold  transition-colors focus-visible:outline-none 
                    focus-visible:ring-2 focus-visible:ring-[#f5b942]/60 ${active ? "bg-[#2b1a4a] text-[#f5b942]" : "text-[#b7a8d3] hover:text-white"
                                        }`}
                                >
                                    {m === "login" ? "Login" : "Sign up"}
                                </button>
                            );
                        })}
                    </div>

                    <h2 className={`${serif} mt-6 text-[28px] leading-tight text-[#fbeee4]`}>
                        {isLogin ? "Login to continue" : "Create your account"}
                    </h2>

                    <form onSubmit={onSubmit} className="mt-5 space-y-4" noValidate={false}>
                        {!isLogin && <Field label="Full name" name="name" autoComplete="name" />}

                        <Field
                            label={isLogin ? "Email or mobile" : "Email"}
                            name="identifier"
                            type={isLogin ? "text" : "email"}
                            autoComplete={isLogin ? "username" : "email"}
                        />

                        {!isLogin && (
                            <Field label="Mobile number" name="mobile" type="tel" inputMode="tel" autoComplete="tel" />
                        )}

                        <Field
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete={isLogin ? "current-password" : "new-password"}
                        />

                        {!isLogin && (
                            <Field
                                label="Confirm password"
                                name="confirmPassword"
                                type="password"
                                autoComplete="new-password"
                            />
                        )}

                        {error && (
                            <p role="alert" className="text-[13px] text-[#ff7a64]">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="!mt-8 h-[42px] w-full rounded-full bg-[#2b1a4a] text-sm font-bold text-white transition cursor-pointer
                         hover:bg-[#3a2461] focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-[#f5b942]/60 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "Please wait…" : isLogin ? "Login" : "Create account"}
                        </button>
                    </form>

                    {isLogin && (
                        <div className="mt-5 text-center">
                            <a href="/forgot-password" className="text-[13px] font-medium text-[#e0432d] hover:underline">
                                Forgot password?
                            </a>
                        </div>
                    )}

                    <p className="mt-5 text-center text-[13px] text-[#a998c8]">
                        Secure payments · Hindi &amp; English
                    </p>
                </div>
            </section>
        </main>
    );
}