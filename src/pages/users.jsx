import UserTable from "../components/user/user.table"
import UserForm from "../components/user/user.form"
import { useEffect, useState } from 'react';
import { fetchUserAPI } from "../services/api.service"

const UsersPage = () => {

    const [users, setUsers] = useState([]);

        const loadUser = async () => {
        console.log("loadUser");
        try {
            const res = await fetchUserAPI();
            setUsers(res.data); // cập nhật state sẽ làm render lại, nhưng không lặp nữa vì chỉ gọi 1 lần trong useEffect
            console.log("loadUser end", res);
        } catch (err) {
            console.error("loadUser error", err);
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <div style={{padding: "20px 0"}}>
            {/* <h1>Table User</h1> */}
            <UserForm loadUser={loadUser} />
            <UserTable dataSource={users} />
        </div>
    )
}

export default UsersPage