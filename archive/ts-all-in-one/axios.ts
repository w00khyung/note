import axios, { AxiosError, AxiosResponse } from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

(async () => {
  try {
    const response = await axios.get<Post>(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
})();

throw new Error('에러메시지');
