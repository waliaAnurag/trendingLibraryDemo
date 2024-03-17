import Image from "next/image";
import React from "react";
import InfoGraphics from "../../asset/infographics.webp";

export default function NextjsInfoGraphics() {

    return (

        <center>
            <Image
                src={InfoGraphics}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="cover image"
                priority={true}
            />
        </center>

    )
}