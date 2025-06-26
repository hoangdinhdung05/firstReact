import UserTable from "../components/user/user.table"
import UserFrom from "../components/user/user.from"

const UsersPage = () => {
    return (
        <div style={{padding: "20px 0"}}>
            <h1>Users Page</h1>
            <UserFrom />
            <UserTable />
        </div>
    )
}

export default UsersPage