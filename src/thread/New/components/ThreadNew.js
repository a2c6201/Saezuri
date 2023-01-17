import { Grid, TextField } from "@mui/material";
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

  // onchangeを使ってuseState

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={6}>
          <TextField {...register("title", { required: true })} />
          {errors.title && <span>タイトルを入力してください</span>}
        </Grid>
        <Grid item xs={6}>
          <button type="submit">スレッド作成</button>
        </Grid>
      </form>
    </Grid>
  );
};

export default ThreadNew;
