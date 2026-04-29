import type { ComponentPropsWithoutRef } from 'react'
import CodePenIcon from './icons/CodePenIcon'
import GitHubIcon from './icons/GitHubIcon'
import LinkedInIcon from './icons/LinkedInIcon'

export default function FindMeSection({ ...props }: ComponentPropsWithoutRef<'section'>) {
    return (
        <section
            id="find-me"
            className="py-16.25 px-7.5"
            {...props}
        >
            <h2 className="text-center">Find Me:</h2>
            <ul className="flex justify-center">
                <li>
                    <a href="https://www.linkedin.com/in/noahboothroyd/" aria-label="LinkedIn">
                        <LinkedInIcon />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/nkboothroyd" aria-label="LinkedIn">
                        <GitHubIcon />
                    </a>
                </li>
                <li>
                    <a href="https://codepen.io/nlharlowe/" aria-label="LinkedIn">
                        <CodePenIcon />
                    </a>
                </li>
            </ul>
        </section>
    )
}
