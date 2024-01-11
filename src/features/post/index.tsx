import s from './post.module.css';

type PostCardProps = {
  section: string;
  authorName: string;
  authorAvatar: string;
  publicationDate: string;
  title: string;
  coverImage: string;
  views: number;
  likes: number;
  comments: number;
  bookmarks: number;
};

export const PostCard = ({
  section,
  authorName,
  authorAvatar,
  publicationDate,
  title,
  coverImage,
  views,
  likes,
  comments,
  bookmarks,
}: PostCardProps) => {
  return (
    <div className={s.postCard}>
      <div className={s.header}>
        <div className={s.headerLeft}>
          <span>{section}</span>
          <div className={s.authorInfo}>
            <img src={authorAvatar} alt={`${authorName}'s Avatar`} className={s.avatar} />
            <span>{authorName}</span>
          </div>
          <span>{publicationDate}</span>
        </div>
        <div className={s.headerRight}>
          <button className={s.moreOptionsButton}>...</button>
        </div>
      </div>
      <h2>{title}</h2>

      <div className={s.coverImage}>
        <img src={coverImage} alt="Cover" />
      </div>

      <div className={s.stats}>
        <div>Views: {views}</div>

        <div>Likes: {likes}</div>
        <div>Comments: {comments}</div>
        <div>Bookmarks: {bookmarks}</div>
      </div>
    </div>
  );
};
