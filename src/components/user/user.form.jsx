import Input from "antd/es/input/Input";
import { Button } from "antd";
import { useState } from "react";
import axios from "axios";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [phone, setPhone] = useState("");

    const handleClickBtn = async () => {
        if (!fullName || !email || !password || !phone) {
            alert("Please fill in all fields!");
            return;
        }

        const URL_BACKEND = "http://localhost:8080/api/v1/user";
        const data = { fullName, email, password, phone };

        try {
            const response = await axios.post(URL_BACKEND, data);
            console.log("User created successfully:", response.data);
            // Reset form
            setFullName("");
            setEmail("");
            setPassWord("");
            setPhone("");
        } catch (error) {
            console.error("Error creating user:", error);
        }

        console.log("Submitted data:", data);
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
