import s from './app.module.css';
import { PostCard } from './features/post';
import './global.css';



const postData = {
  section: 'Technology',
  authorName: 'John Doe',
  authorAvatar: 'path-to-avatar.jpg',
  publicationDate: 'January 15, 2023',
  title: 'Lorem Ipsum Dolor Sit Amet',
  coverImage: 'path-to-cover-image.jpg',
  views: 1234,
  likes: 56,
  comments: 23,
  bookmarks: 10,
};

const postData2 = {
  section: 'Games',
  authorName: 'John Doe',
  authorAvatar: 'path-to-avatar.jpg',
  publicationDate: 'January 15, 2023',
  title: 'Lorem Ipsum Dolor Sit Amet',
  coverImage: 'path-to-cover-image.jpg',
  views: 1234,
  likes: 56,
  comments: 23,
  bookmarks: 10,
};

const arrData = [postData, postData2]


export const App = () => {


  return (
    <div style={{ padding: '24px' }}>
      <h1>Hello</h1>

      <PostCard

       {...postData}
      />
      <PostCard

        {...postData2}
      />


      {arrData.map((data, index) => <PostCard key={index} {...data} />)}


    </div>
  );



};

