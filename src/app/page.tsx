import { ViewPanel } from "@tolokoban/ui";

import automneURL from "@/gfx/automne.webp";
import automne2URL from "@/gfx/automne2.webp";
import agatheURL from "@/gfx/agathe.webp";
import agathe2URL from "@/gfx/agathe2.webp";
import agathe3URL from "@/gfx/agathe3.webp";
import agathe4URL from "@/gfx/agathe4.webp";
import agathe5URL from "@/gfx/agathe5.webp";
import fabienURL from "@/gfx/fabien.webp";
import geraldineURL from "@/gfx/geraldine.webp";
import hortyURL from "@/gfx/horty.webp";
import julietteURL from "@/gfx/juliette.webp";
import karineURL from "@/gfx/karine.webp";
import louiseURL from "@/gfx/louise.webp";
import manuelURL from "@/gfx/manuel.webp";
import paulineURL from "@/gfx/pauline.webp";
import tiphaineURL from "@/gfx/tiphaine.webp";

import styles from "./page.module.css";

const images = shuffle([
    automneURL,
    automne2URL,
    // agatheURL,
    agathe2URL,
    agathe3URL,
    agathe4URL,
    agathe5URL,
    fabienURL,
    geraldineURL,
    hortyURL,
    julietteURL,
    karineURL,
    louiseURL,
    manuelURL,
    paulineURL,
    tiphaineURL,
]);

export default function Page() {
    return (
        <ViewPanel
            className={styles.page}
            fullsize
            position="absolute"
        >
            <ViewPanel
            className={styles.reveal}
                fullsize
                position="absolute"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
                gap="M"
                overflow="auto"
            >
                {images.map((url) => (
                    <img className={styles.image} src={url} key={url} />
                ))}
            </ViewPanel>
        </ViewPanel>
    );
}

function shuffle(arr: string[]): string[] {
    for (let i = 0; i < arr.length; i++) {
        const j = Math.floor(Math.random() * arr.length);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
