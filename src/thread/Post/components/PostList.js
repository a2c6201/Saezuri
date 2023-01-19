import { Grid, Typography } from "@mui/material";
import PostCard from "./PostCard";

const PostList = ({ postObj }) => {
  if (!postObj.id)
    return <Typography>このスレッドには投稿がありません</Typography>;
  return (
    <>
      <Grid container spacing={3} direction="column" alignItems="center">
        <Typography sx={{ mt: 3 }}>投稿一覧</Typography>
        {postObj.posts.map((post) => (
          <Grid item xs={8} key={post.id}>
            <PostCard post={post.post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PostList;
