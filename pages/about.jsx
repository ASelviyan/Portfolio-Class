
//special SSR image component 
import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div>
            <h1>About</h1>

            <p className={[styles.extraGreen, styles.bigFont].join(' ')}>I am super cool software developer now, I make super cool stuff with codes.</p>

            <div>
                <style jsx>{`
                    .orangeText {
                        color: orange;
                    }
                `}</style>
                <p className="orangeText">I love to code and i would love to code for your compony</p>
            </div>
            {/* loading an image */}
            <Image
                // "/" assumes you are in the public folder
                src='/BOMB MODE.PNG'
                alt='Game'
                width={500}
                height={500}
            // layout='fill'
            />

            {/* <img src='/BOMB MODE.PNG' alt="game" /> */}

            <Image
                src='https://placekitten.com/300/300'
                alt='kitten'
                width={300}
                height={300}
            />
        </div>
    )
}