// "use client";
// import { authClient } from "@/lib/auth-client";
// import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
// import { BiEdit, BiUser } from "react-icons/bi";

// export function UpdateUser() {
//     const onSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget);
//         const userData = Object.fromEntries(formData.entries())
//         console.log(userData)

//         await authClient.updateUser({
//             image: userData.image,
//             name: userData.name,
//         })
//     };

//     return (
//         <Modal>
//             <Button variant="secondary"><BiEdit /> Update Profile</Button>
//             <Modal.Backdrop>
//                 <Modal.Container placement="auto">
//                     <Modal.Dialog className="sm:max-w-md">
//                         <Modal.CloseTrigger />
//                         <Modal.Header>
//                             <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
//                                 <BiUser className="size-5" />
//                             </Modal.Icon>
//                             <Modal.Heading>Update User</Modal.Heading>
//                         </Modal.Header>
//                         <Modal.Body className="p-6">
//                             <Surface variant="default">
//                                 <form className="flex flex-col gap-4" onSubmit={onSubmit} >
//                                     <TextField className="w-full" name="name" type="text">
//                                         <Label>Name</Label>
//                                         <Input placeholder="Enter your name" />
//                                     </TextField>
//                                     <TextField className="w-full" name="image" type="url">
//                                         <Label>Profile</Label>
//                                         <Input placeholder="Enter your new profile" />
//                                     </TextField>
//                                     <Modal.Footer>
//                                         <Button slot="close" variant="secondary">
//                                             Cancel
//                                         </Button>
//                                         <Button type="submit" slot="close">Save</Button>
//                                     </Modal.Footer>
//                                 </form>
//                             </Surface>
//                         </Modal.Body>

//                     </Modal.Dialog>
//                 </Modal.Container>
//             </Modal.Backdrop>
//         </Modal>
//     );
// }