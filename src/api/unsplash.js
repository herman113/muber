import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID ab42ac0bbd4b163903df5c6741f5a48f717b437f5e8d31529c572d7e8c831f4c'
  }
});


// const searchUsers = (firstName) => {

// }