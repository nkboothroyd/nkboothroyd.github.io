import type { ComponentPropsWithoutRef } from 'react'
import TechUsed from './TechUsed'

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
                <h4 className="mt-2">Software Engineer</h4>
                <p>
                    I currently work with the team responsible for marketing automation and orchestration. Prior to that I worked in the team responsible for content creation and template management. Some highlights:
                    <ul className="list-disc pl-8 gap-y-2 mt-2 flex flex-col">
                        <li>Developed a large, complex UI meant to replace our manual process of creating dynamic branding via hand-spun liquid logic provided by our customer-facing teams. This process was slow, expensive, and did not allow customers to manage their own branding details, such as colors, team names, disclaimers, etc. Through a combination of careful use of stepper components to walk users through the process and a datatable component that represented the layers of if/then/else, we shipped a simple but effective approximation of the old liquid-based process that would serve the vast majority of our customers using less complex brand logic. Since release, it has been in use by all net new customers, reducing the burden on the customer facing teams significantly and restoring control over their branding to the end-users where it belongs.</li>
                        <li>Delivered a bunch of quality of life upgrades to our content creation tools, particularly the Email Builder, both extending its functionality and also making it easier and more accessible to use.</li>
                        <li>
                            Took ownership of the new frontend infrastructure being developed alongside the new microservice architecture being developed for the backend. Maintained the vite-style template repositories that devs could use to spin up a new microfrontend. I built and upgraded the ci/cd pipelines, tweaked the vite build processes to support our cdn infrastructure, checked regularly for vulnerabilities and necessary updates, upgraded the linting experience, coordinated with fellow frontend devs for best practices, design systems, component libraries, etc.
                        </li>
                    </ul>
                </p>
                <h4 className="mt-2">Associate Software Engineer</h4>
                <p>As an associate, my focus was on improving our content creation tools like our Email Builder. My big side-project was a proof-of-concept for a specialized html linter that was tuned to the rules of email creation, which is a variant of HTML that is pretty different from modern HTML practices. This also included linting for our implementation of Liquid Logic, as well as providing some basic context-aware autocomplete. This was to reduce support burden and make the process of developing email code a little easier. While the linter never made it into the roadmap, the parser I built for recognizing liquid within html code would go on to be used in our Branding tool's backend.</p>
                <h4 className="mt-2">Digital Content Developer</h4>
                <p>As a Digital Content Developer, I focused mainly on providing custom marketing assets to clients. I specialized in email creation, developing responsive, Outlook-friendly implementations of emails and complex email signatures from design files. One of the highest impact projects I worked on was an email template that made heavy use of Liquid Logic to track the passage of loan milestone dates, allowing the email to be re-used as a "Status Update" style of email. I also got the opportunity to participate in solutions engineering for a customer by creating a Vue SPA that filled in some product gaps in our existing platform.</p>
                <TechUsed techs={['vue', 'php', 'typescript', 'vite', 'figma']} />
            </article>
            <article id="freelance" className="mt-8 md:px-8">
                <h3>Freelance Wordpress Developer</h3>
                <p>Prior to 2020, I was a freelancer that worked on custom WordPress themes for small businesses and artisans like jewelry crafters and theater directors. I used a toolchain called Sage that was built on top an early version of Laravel Blade.</p>
                <TechUsed techs={['php', 'javascript', 'wordpress']} />
            </article>
        </section>
    )
}
