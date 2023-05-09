import React from 'react'
import { notification } from 'antd';

export default function Notification() {



    const [api,contextHolder] = notification.useNotification();
    const openNotification = (message,description) => {
      api.open({
        message: 'Notification Title',
        description:
          'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
        duration: 0,
      });
    };
  return (
    <div>
        {contextHolder }
    </div>
  )
}
