"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Input, Label, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UpdateProfilePage = () => {
    const router = useRouter();
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [preview, setPreview] = useState(user?.image || "");

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        await authClient.updateUser({
            name: userData.name,
            image: userData.image,
        });
        router.push("/profile")
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <Surface className="w-full max-w-md p-6 rounded-2xl shadow-lg space-y-6">

                <div className="flex flex-col items-center gap-3">
                    <Avatar >
                        <Avatar.Image className="w-20" src={user?.image} />
                        <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                    </Avatar>
                    <p className="text-sm text-gray-500">Preview</p>
                </div>

                <form onSubmit={onSubmit} className="space-y-4">

                    <TextField name="name">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                    </TextField>

                    <TextField name="image" type="url">
                        <Label>Profile Image URL</Label>
                        <Input
                            placeholder="Enter image URL"
                            onChange={(e) => setPreview(e.target.value)}
                        />
                    </TextField>

                    <Button type="submit" className="w-full">
                        Save Changes
                    </Button>

                </form>

            </Surface>
        </div>
    );
};

export default UpdateProfilePage;