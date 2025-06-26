import Input from "antd/es/input/Input";
import { Button, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [phone, setPhone] = useState("");

    const handleClickBtn = async () => {

        if (!fullName || !email || !password || !phone) {
            notification.error({
                message: "Error",
                description: "Please fill in all fields",
                placement: "topRight",
                duration: 4
            });
            return;
        }

        try {
            const response = await createUserAPI(fullName, email, password, phone);

            if (response.data) {
                notification.success({
                    message: "User created successfully!",
                    description: "User created successfully!",
                });
                console.log("User created successfully:", response.data);
            }

            // Reset form
            setFullName("");
            setEmail("");
            setPassWord("");
            setPhone("");
        } catch (error) {
            console.error("Error creating user:", error);
            notification.error({
                message: "Failed to create user",
                description: error?.response?.data?.message || "Something went wrong",
            });
        }
    };
    
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>FullName: </span>
                    <Input value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div>
                    <span>Email: </span>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <span>Password: </span>
                    <Input.Password value={password} onChange={(e) => setPassWord(e.target.value)} />
                </div>
                <div>
                    <span>Phone: </span>
                    <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <Button type="primary" onClick={handleClickBtn}>Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
