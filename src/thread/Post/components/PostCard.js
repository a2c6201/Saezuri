import { Card, CardContent, Typography } from "@mui/material";
import getGlobalStyles from "../../style/GlobalStyles";

const styles = getGlobalStyles();

const PostCard = ({ post }) => {
  return (
    <Card sx={styles.card}>
      <CardContent>
        <Typography>{post}</Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
