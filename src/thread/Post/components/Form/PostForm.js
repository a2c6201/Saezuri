import { Grid, TextField } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const PostForm = ({ threadId }) => {
  const navigate = useNavigate();
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
    window.location.reload(); //　ここの実装は適切か（react router domを使ってやリたかったがあまり情報を見つけられなかった）
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
          <TextField
            multiline
            minRows={3}
            sx={{ display: "flex", minWidth: 360 }}
            {...register("post", { required: true })}
          />
          {errors.post && <span>入力してください</span>}
          {/* {isSubmitSuccessful && (
            <Navigate to={`/thread/${threadId}`} replace={true} />
          )} */}
        </Grid>
        <Grid item xs={6} sx={{ mt: 3 }}>
          <button type="submit">投稿</button>
        </Grid>
      </form>
    </Grid>
  );
};

export default PostForm;
