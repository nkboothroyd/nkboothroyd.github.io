import { NavigationMenu } from '@base-ui/react/navigation-menu'

const linkClasses = 'md:text-xl text-gray-100 cursor-pointer'
const itemClasses = 'hover:bg-[#252A26] hover:rounded-lg active:bg-[#252A26] active:rounded-lg py-4 px-1 md:px-2'

export default function Navigation() {
    return (
        <NavigationMenu.Root className="bg-[#061619] sticky top-0">
            <NavigationMenu.List className="flex justify-center items-center gap-2 text-sm md:text-base md:gap-4">
                <NavigationMenu.Item className={itemClasses}>
                    <NavigationMenu.Link className={linkClasses} href="#professional">
                        Professional Experience
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className={itemClasses}>
                    <NavigationMenu.Link className={linkClasses} href="#personal">
                        Personal Projects
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className={itemClasses}>
                    <NavigationMenu.Link className={linkClasses} href="#find-me">
                        Find Me
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    )
}
