import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {sleep} from '@/lib/sleep';

export default function Sub(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
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
  await sleep(3 * 1000);
  return {
    props: {
      data: 'Sub',
    },
  }
}) satisfies GetServerSideProps
