import Head from 'next/head'

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <style jsx global>{`
        // minimal css reset
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        p,
        ul {
          margin: 0.5em 0;
        }
        li {
          margin-left: 1.5em;
        }
      `}</style>

      {children}
    </>
  )
}
