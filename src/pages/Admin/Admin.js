import { Tabs } from 'antd'
import React from 'react'
import DiagnosticList from './DiagnosticList'
import UsersList from './UsersList'

const Admin = () => {
    return (
        <div className='bg-white p-1'>
            <Tabs>
                <Tabs.TabPane tab="משתמשים" key='1'>
                    <UsersList />
                </Tabs.TabPane>

                <Tabs.TabPane tab="מאבחנים דידקטיים" key='2'>
                    <DiagnosticList />
                </Tabs.TabPane>

            </Tabs>
        </div>
    )
}

export default Admin