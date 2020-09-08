import Head from "next/head";

//components
import { WhiteBoard } from "components/page_views";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whiteboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WhiteBoard />
    </div>
  );
}
