import { Grid } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ThreadNew = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axios.post(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      data
    );
    navigate(-1);
  };

  return (
    <Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input label="タイトル" {...register("title", { required: true })} />
        {errors.title && <span>タイトルを入力してください</span>}
        <Grid>
          <button type="submit">スレッド作成</button>
        </Grid>
      </form>
    </Grid>
  );
};

export default ThreadNew;
