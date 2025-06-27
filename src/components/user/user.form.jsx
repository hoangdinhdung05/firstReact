import Input from "antd/es/input/Input";
import { Button, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";
import { Modal } from "antd";

const UserForm = (props) => {

    const { loadUser } = props;

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [phone, setPhone] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);

    const handleSubmitBtn = async () => {
        try {
            const response = await createUserAPI(fullName, email, password, phone);
            if (response.data) {
                notification.success({
                    message: "User created successfully!",
                    description: "User created successfully!",
                });
                await loadUser();
                console.log("User created successfully:", response.data);
            }
            resetCloseModal();
        } catch (error) {
            console.error("Error creating user:", error);
            notification.error({
                message: "Failed to create user",
                description: error?.response?.data?.message || "Something went wrong",
            });
        }
    }  
    
    const resetCloseModal = () => {
        setModalOpen(false);
        setFullName("");
        setEmail("");
        setPassWord("");
        setPhone("");
    }
    
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h3>Table users</h3>
                    <Button type="primary" onClick={() => setModalOpen(true)}>Create User</Button>
                </div>
            </div>
            <Modal
                title="Create new user"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={() => handleSubmitBtn()}
                onCancel={() => resetCloseModal()}
                maskClosable={false}
                okText="Create"
            >
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
            </Modal>
        </div>
    );
};

export default UserForm;
