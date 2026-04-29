import type { ComponentPropsWithoutRef } from 'react'

export default function VueIcon({ ...props }: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            {...props}
            role="img"
        >
            <title>Vue</title>
            <path fill="currentColor" d="M2 3h3.5L12 15l6.5-12H22L12 21zm4.5 0h3L12 7.58L14.5 3h3L12 13.08z" />
        </svg>
    )
}
