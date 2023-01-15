import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../../../core/libs/featcher";

const PostList = () => {
  const { id } = useParams();
  const { data: data, error } = useSWR(
    `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts`,
    fetcher
  );

  if (error) return <Typography>faild to load</Typography>;
  if (!error && !data) return <Typography>Loading</Typography>;
  return (
    <>
      <Grid container spacing={3} direction="column" alignItems="center">
        {console.log(data)}
        <Typography>投稿一覧</Typography>
        {data.posts.map((post) => (
          <Grid item xs={8} key={post.id}>
            <Typography>{post.id}</Typography>
            {console.log(post.post)}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PostList;
