
import { notification } from 'antd';
const [api] = notification.useNotification();
export const openNotification = (message,description) => {
    api.open({
      message: message,
      description:
        description,
      duration: 0,
    });
  };