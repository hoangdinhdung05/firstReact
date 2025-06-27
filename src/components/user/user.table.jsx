import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { fetchUserAPI } from '../../services/api.service';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Name',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        }
    ];

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
        <Table columns={columns} dataSource={users} rowKey="_id" />
    );
};

export default UserTable;
