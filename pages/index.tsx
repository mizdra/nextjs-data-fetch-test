import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import {sleep, getEnvironmentName} from '@/lib/util';

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  console.log('Home component is rendered by ' + getEnvironmentName())
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <div>This page name is {props.data}</div>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/sub">Sub</Link></li>
        </ul>
      </main>
    </>
  )
}

export const getServerSideProps = (async () => {
  console.log('Home\'s getServerSideProps is called by ' + getEnvironmentName())
  await sleep(3 * 1000);
  return {
    props: {
      data: 'Home',
    },
  }
}) satisfies GetServerSideProps
