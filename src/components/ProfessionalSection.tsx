import type { ComponentPropsWithoutRef } from 'react'
import TechUsed from './TechUsed'
import TitleAndDate from './TitleAndDate'

export default function ProfessionalSection({ ...props }: ComponentPropsWithoutRef<'section'>) {
    return (
        <section
            id="professional"
            className="py-16.25 px-7.5"
            {...props}
        >
            <h2 className="text-center md:text-right">Professional Experience</h2>
            <article id="total-expert" className="md:px-8">
                <h3>Total Expert</h3>
                <TitleAndDate title="Software Engineer" dateRange="April 2023 - Present" />
                <p>
                    I currently work with the team responsible for marketing automation and orchestration. Prior to that I worked in the team responsible for content creation and template management. Some highlights:
                    <ul className="list-disc pl-8 gap-y-2 mt-2 flex flex-col">
                        <li>Developed a large, complex UI meant to replace our manual process of creating dynamic branding via hand-spun templating logic provided by our customer-facing teams. Since release, it has been in use by all net new customers, reducing the burden on those teams significantly and restoring control over their branding to the end-users where it belongs.</li>
                        <li>Delivered a bunch of quality of life upgrades to our content creation tools, particularly the Email Builder, both extending its functionality and also making it easier and more accessible to use.</li>
                        <li>
                            Took ownership of the new frontend infrastructure being developed alongside the new microservice architecture being developed for the backend. I built and upgraded the ci/cd pipelines, checked regularly for vulnerabilities and necessary updates, coordinated with fellow frontend devs for best practices, design systems, component libraries, etc.
                        </li>
                    </ul>
                </p>
                <TitleAndDate title="Associate Software Engineer" dateRange="February 2022 - April 2023" />
                <p>
                    As an associate, my focus was on improving our content creation tools like our Email Builder. My big side-project was a proof-of-concept for a specialized html linter that was tuned to the rules of email creation, which is a variant of HTML that is pretty different from modern HTML practices.
                </p>
                <p>
                    This also included linting for our templating logic implementation, as well as providing some basic context-aware autocomplete While the linter never made it into the roadmap, the parser I built for recognizing liquid within html code would go on to be used in our Branding tool's backend.
                </p>
                <TitleAndDate title="Digital Content Developer" dateRange="February 2020 - February 2022" />
                <p>
                    As a Digital Content Developer, I focused mainly on providing custom marketing assets to clients. I specialized in email creation, developing responsive, Outlook-friendly implementations of emails and complex email signatures from design files.
                </p>
                <p>
                    One of the highest impact projects I worked on was an email template that made heavy use of Liquid Logic to track the passage of loan milestone dates, allowing the email to be re-used as a "Status Update" style of email. I also got the opportunity to participate in solutions engineering for a customer by creating a Vue SPA that filled in some product gaps in our existing platform.
                </p>
                <TechUsed techs={['vue', 'php', 'typescript', 'vite', 'figma']} />
            </article>
            <article id="freelance" className="mt-8 md:px-8">
                <TitleAndDate title="Freelance Wordpress Developer" dateRange="Prior to 2020" />
                <p>I was a freelancer that worked on custom WordPress themes for small businesses and artisans like jewelry crafters and theater directors. I used a toolchain called Sage that was built on top an early version of Laravel Blade.</p>
                <TechUsed techs={['php', 'javascript', 'wordpress']} />
            </article>
        </section>
    )
}
