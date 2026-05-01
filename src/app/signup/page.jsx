"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
    const redirectingPath = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries())
        console.log(userData)

        const { data, error } = await authClient.signUp.email({
            name: `${userData.first_name} ${userData.last_name}`,
            email: userData.email,
            password: userData.password,
            profile: userData.image
        })
        console.log(data, error)

        if (data) {
            alert("Successfully Sign In");
            redirectingPath.push("/profile");
        }
        if (error) {
            alert(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Form
                onSubmit={onSubmit}
                className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4"
            >
                <h2 className="text-2xl font-semibold text-center mb-2">
                    Create Account
                </h2>

                <div className="flex gap-5">
                    <TextField
                        isRequired
                        name="first_name"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>First Name</Label>
                        <Input placeholder="Enter Your Name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="last_name"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Last Name</Label>
                        <Input placeholder="Enter Your Name" />
                        <FieldError />
                    </TextField>
                </div>

                <TextField isRequired name="image">
                    <Label>Profile URL</Label>
                    <Input placeholder="Enter your profile image URL" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
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
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError />
                </TextField>

                <div className="flex gap-2 mt-2">
                    <Button type="submit" className="w-full">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary" className="w-full">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default SignUpPage;