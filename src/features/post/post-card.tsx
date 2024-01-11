import s from './post.modules.css';

export const PostCard = () => {
  return (
    <div className={s.postCard}>
      <div className={s.header}>
        <div className={s.headerLeft}>
          <span>
            {' '}
            <b>Личный опыт</b>
          </span>
          <div className={s.authorInfo}>
            <span>Юлия</span>
          </div>

          <span> 4 часа</span>
        </div>

        <div className={s.headerRight}>
          <button className={s.moreOptionButton}>...</button>
        </div>
      </div>
      Post card
    </div>
  );
};
