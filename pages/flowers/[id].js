import Layout from '../../components/layout'
import { getAllFlowerIds, getFlowerData } from '../../lib/flowers'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../components/layout.module.css'



export default function Flower({ flowerData }) {
  return (
    <Layout>
      <Head>
        <title>{flowerData.title}</title>
      </Head>     
      <article>
      <img
              src={`/images/${flowerData.title.toLowerCase()}.jpeg`}
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={flowerData.title}
            />
        <h1 className={utilStyles.headingXl}>{flowerData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: flowerData.contentHtml }} />
      </article>
    </Layout>
  )
}


export async function getStaticProps({ params }) {
  const flowerData = await getFlowerData(params.id)
  return {
    props: {
      flowerData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllFlowerIds()
  return {
    paths,
    fallback: false
  }
}
