import React, { useEffect } from 'react'
import Image from 'next/image'
import coverImage from '../asset/homeScreenPlantImage.jpg'
import styles from "../styles/page.module.css";
import { useRouter } from 'next/router';
import Head from 'next/head';
import dashboardStyles from "../styles/dashboard.module.css"

function LandingPage() {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    router.push('/auth/signup');
  }

  function handleClickAppLayout(e) {
    e.preventDefault();
    router.push('/app-router-demo')
  }


  return (


    <div
      style={{
        // use relative position for the parent div
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Head>
        <title>Trending Books Library</title>
      </Head>
      <Image
        src={coverImage}
        fill={true}
        priority={true}
        alt={"Background Image"}
      />
      <div style={{
        position: 'absolute',
        top: "20%",
        left: "20%",

      }}>
        <span style={{ fontSize: "25px" }}> Trending Books Library</span>
        <div style={{ marginTop: "30px", fontSize: "15px", color: "#309d74" }}>
          Find all trending books and download before they appear on store
        </div>
      </div>
      <div className={styles.overLayText}>
        <span style={{ color: "#309d74" }}> Curious to know more about us ? Never mind lets explore!</span>
        <div style={{ paddingTop: "20px" }}>

          <button type='button' className={`${styles.btn} ${styles.newBtnStyles} ${dashboardStyles.btnCustomStyles}`} onClick={handleClick}> Click to explore !</button>

          <button type='button' className={`${styles.btn} ${styles.newBtnStyles} ${dashboardStyles.btnCustomStyles} ${dashboardStyles.marginLeft}`} onClick={handleClickAppLayout}> Explore App Router</button>
        </div>
      </div>
    </div>



  )
}

export default LandingPage
