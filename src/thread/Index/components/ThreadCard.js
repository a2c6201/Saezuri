import { Card, CardContent, Typography } from "@mui/material";

const ThreadCard = ({ title }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography>{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default ThreadCard;
