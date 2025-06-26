import Input from "antd/es/input/Input";
import { Button } from "antd";

const UserFrom = () => {
    return (
        <div className="user-from" style={{margin: "20px 0"}}>
            <div style={{display: "flex", gap: "15px", flexDirection: "column"}}>
                <div>
                    <span>FullName: </span>
                    <Input />
                </div>
                <div>
                    <span>Email: </span>
                    <Input />
                </div>
                <div>
                    <span>Password: </span>
                    <Input.Password />
                </div>
                <div>
                    <span>Phone: </span>
                    <Input />
                </div>
                <div>
                    <Button type="primary">Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default UserFrom