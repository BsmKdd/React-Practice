import { useRouter } from 'next/router';

const DetailPage = () => {
    const router = useRouter();

    const newsId = router.query.newsId;

    return <h1>Something Important!</h1>;
};

export default DetailPage;