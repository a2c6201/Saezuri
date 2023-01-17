import { Grid, TextField } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

const PostForm = ({ threadId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    await axios.post(
      `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${threadId}/posts`,
      data
    );
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      sx={{ mt: 3 }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={8}>
          <TextField {...register("post", { required: true })} />
          {errors.post && <span>入力してください</span>}
          {isSubmitSuccessful && (
            <Navigate to={`/thread/${threadId}`} replace={true} />
          )}
        </Grid>
        <Grid item xs={6} sx={{ mt: 3 }}>
          <button type="submit">投稿</button>
        </Grid>
      </form>
    </Grid>
  );
};

export default PostForm;
