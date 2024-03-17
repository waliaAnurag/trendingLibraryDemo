import Image from "next/image"
import AuthForm from "../../component/authentication/auth-form"
import coverImage from '@/asset/homeScreenPlantImage.jpg'
import styles from "../../styles/page.module.css"
import dashboardStyles from "../../styles/dashboard.module.css"
import { useRouter } from 'next/router';
export default function Signup(){
    const router = useRouter();
    function handleClick(e){
        e.preventDefault();
        router.push("/")
    }
    return(
        <div
        style={{
          // use relative position for the parent div
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
       
        <Image
        src={coverImage}
        fill={true}
        priority={true}
        alt={"Background Image"}
      />
           <header>
                <div className={`${dashboardStyles.headerContainer}`}><center><h1>Trending Books Library</h1></center> <button type='button' className={`${dashboardStyles.btn} ${dashboardStyles.alignselfCenter} ${dashboardStyles.btnCustomStyles} ${dashboardStyles.navigationLinkStyles}`} onClick={handleClick}> Home</button></div>
            </header>
       <div style={{
        position : 'absolute',
        top: "20%",
        left: "20%",
        
      }}> <AuthForm /></div>
       
    </div>
    )
}