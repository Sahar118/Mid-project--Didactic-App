import React from 'react'
import { Spin } from 'antd';

export const Spinner = () => {
    return (
        <div className="spinner-parent">
            <Spin size='large' />
        </div>
    )
}
