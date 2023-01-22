import { Button, Grid, TextField, Typography } from "@mui/material";
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
    // ここでuseSWRを使ってもいいかも（GET）
    // 全体がレンダリングされるとパフォーマンスとしても、、ユーザーもびっくり
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
          {errors.post && <Typography>1文字以上入力してください</Typography>}
        </Grid>
        <Grid item xs={6} sx={{ mt: 3 }}>
          <Button type="submit">投稿</Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default PostForm;
