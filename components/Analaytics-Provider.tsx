'use client'

import posthog from "posthog-js"
import { ReactNode } from "react"
import {PostHogProvider} from "posthog-js/react"

if(typeof window !== undefined) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!,{
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!
    })
}

interface Props {
    children: ReactNode
}

export default function PHProvider(props: Props) {
    return (
        <PostHogProvider client={posthog}>
            {props.children}
        </PostHogProvider>
    )
}