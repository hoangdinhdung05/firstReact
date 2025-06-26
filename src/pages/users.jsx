import UserTable from "../components/user/user.table"
import UserForm from "../components/user/user.form"

const UsersPage = () => {
    return (
        <div style={{padding: "20px 0"}}>
            <h1>Users Page</h1>
            <UserForm />
            <UserTable />
        </div>
    )
}

export default UsersPage