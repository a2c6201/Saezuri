import { Card, CardContent, Typography } from "@mui/material";
import { getStyles } from "./style";

const styles = getStyles();

const ThreadCard = ({ title }) => {
  return (
    <Card variant="outlined" sx={styles.card}>
      <CardContent>
        <Typography noWrap>{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default ThreadCard;
