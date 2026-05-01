"use client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Image from "next/image";
import googleIcon from "@/app/assets/google.png";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignInPage = () => {
    const redirectingPath = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries())
        console.log(userData)
        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
        })
        console.log({ data, error })

        if (data) {
            alert("Successfully Sign In");
            redirectingPath.push("/");
        }
        if (error) {
            alert(error.message);
        }

    };

    const signInGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data);
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
                {/* Header */}
                <div className="mb-6 text-center space-y-1">
                    <h2 className="text-2xl font-semibold">Welcome Back</h2>
                    <p className="text-sm text-gray-500">
                        Login to your account
                    </p>
                </div>

                {/* Form */}
                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Must contain uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Must contain a number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description className="text-xs">
                            At least 8 characters
                        </Description>
                        <FieldError />
                    </TextField>

                    <Button type="submit" className="w-full mt-2">
                        <Check />
                        Sign In
                    </Button>
                </Form>

                {/* Divider */}
                <div className="flex items-center gap-2 my-5">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-xs text-gray-400">OR</span>
                    <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Google Button */}
                <Button
                    onClick={signInGoogle}
                    className="w-full flex items-center justify-center gap-2 border"
                    variant="secondary"
                >
                    <Image src={googleIcon} width={18} height={18} alt="google" />
                    Continue with Google
                </Button>
            </div>
        </div>
    );
};

export default SignInPage;