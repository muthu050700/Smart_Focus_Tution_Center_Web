"use client";

import { Input } from "@/components/ui/input"
import { LogIn } from "lucide-react";
import React, { useState } from "react";
import { validateLoginEmailAndPassword } from "../validation/loginValidation"
import { toast } from "sonner";
import { useForm } from "react-hook-form";

type LoginFormInput = {
    email: string,
    password: string
}

const LoginForm = () => {
    // const [loginDetails, setLoginDetails] = useState({
    //     email: "",
    //     password: ""
    // });

    // const handleLoginFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = e.target.value;
    //     const name = e.target.name;

    //     setLoginDetails((prev) => ({
    //         ...prev,
    //         [name]: value
    //     }));
    // }

    // const handleLoginSubmit = (email: string, password: string) => {
    //     debugger
    //     const isEmailAndPasswordValid = validateLoginEmailAndPassword(email, password);

    //     if (!isEmailAndPasswordValid) toast.error("Email or Password is not Valid.", { position: "top-right" })

    // }

    const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginFormInput>({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (data: LoginFormInput) => {
        console.log(data);
        reset();
    }

    return (
        <form className="flex flex-row justify-center items-center w-full min-h-screen bg-stone-100 px-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full max-w-sm bg-white rounded-2xl border border-stone-200 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] px-8 pt-16 pb-10">
                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 -top-24">
                        <div className="bg-amber-400 w-20 h-20 rounded-full flex justify-center items-center shadow-[0_6px_16px_rgba(217,158,25,0.35)]">
                            <LogIn size={30} strokeWidth={2} className="text-stone-900" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-1 mb-8">
                    <h1 className="text-xl font-semibold text-stone-900 tracking-tight">
                        Sign in with email
                    </h1>
                    <p className="text-sm text-stone-500">
                        Enter your details to continue
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-stone-700">
                            Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Email is not valid."
                                }
                            })

                            }
                            placeholder="you@example.com"
                            className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                        />


                        {errors.email && (
                            <p style={{ color: "red" }}>{errors.email.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="password" className="text-sm font-medium text-stone-700">
                            Password
                        </label>
                        <Input
                            placeholder="••••••••"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Password cannot exceed 20 characters"
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message: "Password is not valid."
                                }
                            })
                            }
                            className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                        />


                        {errors.password && (
                            <p style={{ color: "red" }}>{errors.password.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="mt-2 w-full rounded-lg bg-stone-900 text-white text-sm font-medium py-2.5 transition-colors hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-900/30 focus:ring-offset-2"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </form>
    )
}

export default LoginForm;