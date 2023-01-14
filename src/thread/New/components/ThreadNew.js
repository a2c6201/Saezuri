import { Grid, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ThreadNew = () => {
  const navigate = useNavigate();

  // useStateを使って値を保持
  const [title, setTitle] = useState({
    title: "",
  });

  // 登録処理
  const CreateThread = async () => {
    await axios.post(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      title
    );
    navigate(-1);
  };

  // 入力内容をset
  const titleChangeHandler = (event) => {
    setTitle({ ...title, title: event.target.value });
    console.log(event.target.value);
  };

  return (
    // TODO バリデーショん
    <Grid>
      <TextField label="タイトル" type="text" onChange={titleChangeHandler} />
      <Grid>
        <button onClick={CreateThread}>作成</button>
      </Grid>
    </Grid>
  );
};

export default ThreadNew;
