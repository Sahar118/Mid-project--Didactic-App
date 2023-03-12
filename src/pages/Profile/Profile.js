import React from 'react'
import { Tabs } from 'antd'
import Appointments from './Appointments'

const Profile = () => {
    return (
        <div>
            <Tabs>
                <Tabs.TabPane tab='פרופיל' key='1'>
                </Tabs.TabPane>

                <Tabs.TabPane tab='קביעת אבחון' key='2'>
                    <Appointments />
                </Tabs.TabPane>

                <Tabs.TabPane tab="המאובחנים שלי" key='3'>
                </Tabs.TabPane>


                <Tabs.TabPane tab="אבחונים דידקטיים" key='4'>
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

export default Profile