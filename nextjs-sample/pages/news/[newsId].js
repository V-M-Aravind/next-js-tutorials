import { useRouter } from 'next/dist/client/router';

const DynamicPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  console.log(newsId);
  return (
    <div>
      <h2>Dynamic Page</h2>
      <p>{newsId}</p>
    </div>
  );
};

export default DynamicPage;
