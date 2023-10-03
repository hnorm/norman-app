import dynamic from 'next/dynamic';
import { FC, memo } from 'react';

import Page from '../components/Layout/Page';
import { homePageMeta } from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const Home: FC = memo(() => {
    const { title, description } = homePageMeta;
    return (
        <Page description={description} title={title}>
            <Header />

        </Page>
    );
});

export default Home;
