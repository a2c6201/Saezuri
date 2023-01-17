import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import getGlobalStyles from "../../style/GlobalStyles";

const styles = getGlobalStyles();

const ThreadCard = ({ thread }) => {
  return (
    <Card variant="outlined" sx={styles.card}>
      <CardActionArea href={`/thread/${thread.id}`}>
        <CardContent>
          <Typography noWrap>{thread.title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ThreadCard;
