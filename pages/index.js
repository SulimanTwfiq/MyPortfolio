import Head from "next/head"
import SocialMediaAccounts from "../components/SocialMediaAccounts"
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>سليمان توفيق</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src={`Programming-rafiki.svg`} width="350" alt="developer" style={{ margin: "42px 0px" }} />
        <SocialMediaAccounts />
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }
        main {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          flex-direction: column;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
