import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../../../core/libs/featcher";
import PostForm from "../components/Form/PostForm";
import PostList from "../components/PostList";

const Post = () => {
  const { id } = useParams();
  const { data: data, error } = useSWR(
    `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts`,
    fetcher
  );

  if (error) return <Typography>faild to load</Typography>;
  if (!error && !data) return <Typography>Loading</Typography>;

  return (
    <>
      <PostList postObj={data} />
      <PostForm threadId={id} />
    </>
  );
};

// {
// "threadId": "string",
// "posts": [
//   {
//     "id": "string",
//     "post": "string"
//   }
// ]
// }

export default Post;
