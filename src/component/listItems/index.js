import React from 'react'
import Image from 'next/image'
import styles from "../styles/listItem.module.css"

function ListItems(props) {
    const {redirect, bookInformation} = props;
    const {id,title,authors,image,subtitle} = bookInformation;
 
    return (
        <div key={id} onClick={(e)=>redirect(e,id)}>
            <li key={id} className={styles.bookList}>
                <div className={styles.listHolder}>
                    <div className={styles.imageHolder}>
                        <Image
                            src={image}
                            width={50}
                            height={80}
                            alt="cover image"
                        />
                    </div>
                    <div className={styles.textHolder}>
                        <div><h1 className={styles.headingStyle}>{title}</h1></div>
                        <div><span>{authors}</span></div>
                        <div><span>{subtitle}</span></div>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default ListItems
