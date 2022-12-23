import useSWR from "swr";
import fetcher from "../core/libs/featcher";

// 確認したいこと
// useSWRを使うのはどうか、URL直打ちでいいのか、.envファイルに分けるか
const Index = () => {
  const { data: threads, error } = useSWR(
    `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!error && !threads) return <div>Loading ...</div>;

  return (
    <>
      {threads.map((thread, index) => (
        <div key={index}>{thread.title}</div>
      ))}
    </>
  );
};

export default Index;
