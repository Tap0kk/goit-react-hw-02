import s from './Notification.module.css';

const Notification = ({ message }) => <p className={s.text}>{message}</p>;

export default Notification;
