import type { ComponentPropsWithoutRef } from 'react'
import TechUsed from './TechUsed'

export default function PersonalSection({ ...props }: ComponentPropsWithoutRef<'section'>) {
    return (
        <section
            id="personal"
            className="row-palegreen"
            {...props}
        >
            <h2>Personal Projects</h2>
            <article id="wyrdwood-game" className="md:px-8">
                <h3>Wyrdwood</h3>
                <div className="flex max-md:flex-col justify-between">
                    <div className="flex flex-col">
                        <a href="https://github.com/nkboothroyd/wyrdwood-game" className="text-[#728E76] underline font-semibold hover:text-[#728E76]/75 active:text-[#728E76]/75" target="_blank">Repository</a>
                        <p className="py-2">
                            A work in progress project to learn React and its ecosystem. This is a Fallen London-style (click to do actions, progress skills, explore, etc) game where the player character is the witch of the Wyrdwood. Following a day-night schedule, the player explores and forages by day, and crafts, brews, and distills their finds by night in the hopes of pressing deeper into the wood and unravelling its mysteries and the strange house that they have inherited.
                        </p>
                        <p className="py-2">
                            Current plans are to make it offline-first using a mix of Zustand and IndexDB, and to make use of Tanstack Router for biome navigation and exploration.
                        </p>
                        <p className="py-2">
                            It's a lot more fun to work on than another to-do app. Still heavily WIP, but the repository is free and public to poke around in.
                        </p>
                    </div>
                    <img src="./phone-view-web-game.gif" className="h-100" alt="A screenshot of the web game showing the forest biome in the day phase." />
                </div>

                <TechUsed techs={['react', 'typescript', 'vite']} />
            </article>
        </section>
    )
}
