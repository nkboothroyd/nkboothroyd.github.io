import type { ComponentPropsWithoutRef } from 'react'

type TitleAndDateProps = ComponentPropsWithoutRef<'div'> & {
    title: string
    dateRange: string
}

export default function TitleAndDate({ title, dateRange, ...props }: TitleAndDateProps) {
    return (
        <div
            className="flex max-md:flex-col md:justify-between md:items-center mt-4"
            {...props}
        >
            <h4>{title}</h4>
            <h5 className="text-gray-400 text-base md:text-xl">{dateRange}</h5>
        </div>
    )
}
