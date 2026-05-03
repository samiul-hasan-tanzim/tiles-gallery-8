"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Spinner } from "@heroui/react";
import { UpdateUser } from "./UpdateUser";
import Loading from "../loading";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) {
        return (
            Loading()
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-4">
                <Avatar >
                    <Avatar.Image className="w-20" src={user?.image} />
                    <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <div className="text-center space-y-1">
                    <h2 className="text-xl font-semibold">{user?.name}</h2>
                    <p className="text-sm text-muted">{user?.email}</p>
                </div>

                <UpdateUser user={user} />
            </div>
        </div>
    );
};

export default ProfilePage;