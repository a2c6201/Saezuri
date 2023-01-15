import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { getStyles } from "./style";

const styles = getStyles();

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
