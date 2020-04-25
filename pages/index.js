import Head from "next/head"
import SocialMediaAccounts from "../components/SocialMediaAccounts"
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>سليمان توفيق</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <h1>Suliman Twfiq</h1>
        <span style={{ transform: "translateY(-39px)" }}>frontend developer</span>
        <img src={`Programming-rafiki.svg`} width="350" alt="developer" style={{ marginTop: "-30px" }} />
        <SocialMediaAccounts />
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Glegoo", serif;
        }
        main {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
