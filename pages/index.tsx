import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { NextPage } from 'next';

import style from '../src/scss/style.module.scss';

const IndexPage: NextPage = () => {
  console.info(style);
  return (
    <>
      <div className={style.red}>Test Div</div>
      <Layout title='Home | Next.js + TypeScript Example'>
        <h1>Hello Next.js 👋</h1>
        <p>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </p>
      </Layout>
    </>
  );
};

export default IndexPage;
