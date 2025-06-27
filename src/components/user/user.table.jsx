import React from 'react'
import { Table } from 'antd';


const UserTable = (props) => {

    const { dataSource: users } = props;

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

    return (
        <Table columns={columns} dataSource={users} rowKey="_id" />
    );
};

export default UserTable;
