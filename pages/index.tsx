
// import next.js
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import type { NextPage } from 'next'

// import components
import Container from './components/Container'
import { Button } from './components/Button'

const Home: NextPage = () => {
  return (
    <>

      <Head>
        <title>Circlekind — Tell your story</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Container className='h-screen w-full'>
        <Button variant='solid' color='gray' href="/recruiter" className={undefined}>For recruiters</Button>
        <Button variant='empty' color='gray' href="/applicant" className={undefined}>For applicants</Button>
      </Container>

    </>
  )
}

export default Home
