import type { ComponentPropsWithoutRef, ComponentType } from 'react'
import FigmaIcon from './icons/FigmaIcon'
import JavaScriptIcon from './icons/JavaScriptIcon'
import PhpIcon from './icons/PhpIcon'
import ReactIcon from './icons/ReactIcon'
import TypeScriptIcon from './icons/TypeScriptIcon'
import ViteIcon from './icons/ViteIcon'
import VueIcon from './icons/VueIcon'
import WordPressIcon from './icons/WordPressIcon'

type TechType = 'figma' | 'javascript' | 'php' | 'react' | 'typescript' | 'vite' | 'vue' | 'wordpress'

type TechUsedProps = ComponentPropsWithoutRef<'div'> & {
    techs: TechType[]
}

const techIconMap = {
    figma: FigmaIcon,
    javascript: JavaScriptIcon,
    php: PhpIcon,
    react: ReactIcon,
    typescript: TypeScriptIcon,
    vite: ViteIcon,
    vue: VueIcon,
    wordpress: WordPressIcon,
} satisfies Record<TechType, ComponentType>

export default function TechUsed({ techs, ...props }: TechUsedProps) {
    return (
        <div
            id="technology-used"
            className="flex flex-col items-center mt-8"
            {...props}
        >
            <h4 className="font-semibold">Technology Used:</h4>
            <ul className="flex">
                {techs.map((tech) => {
                    const ComponentToRender = techIconMap[tech]
                    return (
                        <li key={tech}>
                            <ComponentToRender />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
