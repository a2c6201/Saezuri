import { Grid } from "@mui/material";
import useSWR from "swr";
import fetcher from "../../../core/libs/featcher";
import ThreadCard from "./ThreadCard";

const ThreadList = () => {
  const { data: threads, error } = useSWR(
    `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!error && !threads) return <div>Loading ...</div>;

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ mb: 3 }}
        direction="column"
        alignItems="center"
      >
        {threads.map((thread, index) => (
          <Grid item xs={8} key={index}>
            <ThreadCard thread={thread} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ThreadList;
