import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompleteChallenges } from '../components/CompletedChallenges';
import { Auth } from '../components/Auth';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { useContext } from 'react';


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {

  return (
        <Auth />

      
        // <ChallengesProvider 
        //   level={props.level}
        //   currentExperience={props.currentExperience}
        //   challengesCompleted={props.challengesCompleted}
        // >
        //   <div className={styles.container}>
        //     <Head>
        //       <title>Início | Shake.it</title>
        //     </Head>
            
        //     <ExperienceBar />

        //     <CountdownProvider>
        //       <section>
        //         <div>
        //           <Profile />
        //           <CompleteChallenges />
        //           <Countdown />
        //         </div>
        //         <div>
        //           <ChallengeBox />
        //         </div>
        //       </section>
        //     </CountdownProvider>
        //   </div>
        // </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}