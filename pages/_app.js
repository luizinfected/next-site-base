import '../styles/globals.css'
import '../styles/style-base.css'
import Footer from '../src/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import database from '../geral.json'


export default function MyApp({ Component, pageProps }) {

  return (
    <>
      {
        database.infos.map((info) => (
            <>
            <Component {...pageProps} info={info} key={info.name} />
              <Footer info={info} key={info.name} />
            </>
        )
        )
      }
    </>
  )
}


