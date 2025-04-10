import { useParams, Link } from 'react-router-dom';
import styles from './index.module.scss';
import { useGetUserByIDQuery } from '@/entities/user/api';
import { HSeparator } from '@/shared/ui/HSeparator';
import { UserAvatar } from '@/entities/user/ui/UserAvatar';
import { useMemo } from 'react';

const UserDetails = () => {
  const { id } = useParams();
  const { data: user, isLoading } = useGetUserByIDQuery(Number(id));

  const userAge = useMemo(() => {
    if (!user?.birthDate) return null;
    const today = new Date();
    const dob = new Date(user.birthDate);

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  }, [user?.birthDate]);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '-';
    return new Intl.DateTimeFormat('ru-RU').format(new Date(dateString));
  };

  if (isLoading || !user) return <div>Загрузка...</div>;

  return (
    <div className={styles['page_main-container']}>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/users">
          <button className={styles['back-link']}>
            ← Вернуться к списку пользователей
          </button>
        </Link>
      </div>

      <div className={styles['user_base-info_container']}>
        <UserAvatar avatar={user.avatar} size={200} />
        <div style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', gap: '1rem' }}>
          <h1>{`${user.firstname} ${user.lastname}`}</h1>
          <h2>Возраст: {userAge ?? '-'}</h2>
          <h3>Последняя активность: {formatDate(user.lastActivity)}</h3>
        </div>
      </div>

      <HSeparator />

      <div className={styles['user_detail-info_container']}>
        <h1>Подробная информация</h1>
        <div className={styles['detail-row']}>
          <span>День рождения: </span>
          <span className={styles['detail-value']}>{formatDate(user.birthDate)}</span>
        </div>
        <div className={styles['detail-row']}>
          <span>Компания: </span>
          <span className={styles['detail-value']}>{user.company}</span>
        </div>
        <div className={styles['detail-row']}>
          <span>Почта: </span>
          <span className={styles['detail-value']}>{user.email}</span>
        </div>
        <div className={styles['detail-row']}>
          <span>Дата регистрации: </span>
          <span className={styles['detail-value']}>{formatDate(user.createdAt)}</span>
        </div>
        <div className={styles['detail-row']}>
          <span>Номер телефона: </span>
          <span className={styles['detail-value']}>{user.phoneNumber}</span>
        </div>
      </div>

    </div>
  );
};
export default UserDetails