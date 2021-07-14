import Link from 'next/link';
import { Fragment } from 'react';

const NewsPage = () => {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href="/news/batata">First list item</Link>
                </li>
                <li>Second list item</li>
            </ul>
        </Fragment>
    );
};

export default NewsPage;
