// import Categories from '@/components/MainPage/Categories/Categories';
import Head from 'next/head'
// import { useSelector } from 'react-redux';
// import Blogs from '../components/MainPage/Blogs/Blogs';
// import LandingPage from '../components/MainPage/LandingPage/LandingPage';
import dynamic from 'next/dynamic'

const Blogs = dynamic(() => import('../components/MainPage/Blogs/Blogs'), {
  ssr: false,
})
const LandingPage = dynamic(() => import('../components/MainPage/LandingPage/LandingPage'), {
  ssr: false,
})
const Categories = dynamic(() => import('../components/MainPage/Categories/Categories'), {
  ssr: false,
})

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
      </Head>
      <>
        <LandingPage/>
        <Blogs/>
        <Categories/>
      </>
    </>
  )
}
