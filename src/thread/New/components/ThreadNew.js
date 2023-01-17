import { Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form"; //usestate
import { useNavigate } from "react-router-dom";

const ThreadNew = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axios.post(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      data
    );
    navigate("/");
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Typography sx={{ my: 3 }}>スレッド作成</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={6}>
          <TextField
            sx={{ minWidth: 360 }}
            {...register("title", { required: true })}
          />
          <Grid>
            {errors.title && (
              <Typography>タイトルを入力してください</Typography>
            )}
          </Grid>
        </Grid>
        <Grid item xs={6} sx={{ mt: 3 }}>
          <button type="submit">スレッド作成</button>
        </Grid>
      </form>
    </Grid>
  );
};

export default ThreadNew;
