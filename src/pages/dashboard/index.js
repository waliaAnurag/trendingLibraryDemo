import React, { useEffect } from 'react'
import Head from 'next/head';
import styles from "../../styles/dashboard.module.css"
import pageStyles from "../../styles/page.module.css"
import ListItems from '@/component/listItems';
import { useRouter } from 'next/router';
import { connectDataBase, getAllDocuments } from '@/helpers/db-utils';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

function Dashboard(props) {

    const { booksData } = props;
    const router = useRouter();
    function redirectHandler(e, bookId) {
        e.preventDefault();
        router.push(`/dashboard/${bookId}`);
    }


    function redirectToInfoGrapics(e) {
        e.preventDefault();
        router.push(`/infographics`)
    }
    function SignOutHandler(){
        
       
        signOut({ redirect: false }).then(() => {
            router.push("/"); // Redirect to the dashboard page after signing out
        });
        
    }
    return (
        

        <div className={styles.dashboardHolder}>
            <Head>
                <title>Trending Books</title>
            </Head>
            <header>
                <div className={`${styles.headerContainer}`}><Link className={styles.alignselfCenter} href={"/"}> <button type='button' className={`${pageStyles.btn} ${styles.btnCustomStyles} ${styles.navigationLinkStyles}`}> Home</button></Link><center><h1>Trending Books Library</h1></center> <button type='button' className={`${pageStyles.btn} ${styles.alignselfCenter} ${styles.btnCustomStyles} ${styles.navigationLinkStyles}`} onClick={SignOutHandler}> Logout</button></div>
            </header>

            <main className={styles.mainContentSectionStyles}>
                <center>
                    <div className={styles.contentHolder}>
                        {booksData.map((item, index) => { return <ListItems key={index} bookInformation={item} redirect={redirectHandler} /> })}

                    </div>
                </center>
            </main>
            <footer>
                <button type='button' className={`${pageStyles.btn} ${styles.navigationLinkInfographics} ${styles.btnCustomStyles}`} onClick={redirectToInfoGrapics}>Next js infographics</button>
            </footer>

        </div>

    )
}

export default Dashboard

export async function getStaticProps() {

    let response;
    let client;
    try {

        client = await connectDataBase();
        response = await getAllDocuments(client, "bookList", { _id: -1 });

        client.close();
    } catch (err) {
        return { notFound: true };
    }


    let booksList = [...response[0].books];
    try {
        if (booksList && booksList.length === 0) {
            return { notFound: true };
        }
        return {
            props: {
                booksData: booksList
            },
            revalidate: 5
        }
    } catch (err) {
        console.log(err)
        return { notFound: true }

    }



}
