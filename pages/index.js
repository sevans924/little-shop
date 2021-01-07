import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedFlowersData } from '../lib/flowers'
import Link from 'next/link'
import styles from '../components/layout.module.css'
import Button from '../components/Button'
export async function getStaticProps() {
  const allFlowerData = getSortedFlowersData()
  return {
    props: {
      allFlowerData
    }
  }
}


export default function Home ({ allFlowerData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to the little shop</p>
      </section>
       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Our Flowers</h2>
        <ul className={utilStyles.list}>
          {allFlowerData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
               <img
              src={`/images/${title.toLowerCase()}.jpeg`}
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={title}
            />
            <Link href={`/flowers/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <Button/>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}