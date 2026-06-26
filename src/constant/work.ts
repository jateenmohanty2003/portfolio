import { CSSProperties } from 'react';

export interface WorkItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    tags: string[];
    caseStudyUrl: string;
    liveUrl?: string;
    style?: CSSProperties;
}

export const WORK_ITEMS: WorkItem[] = [
    {
        id: 'one-moment',
        title: 'One Moment',
        subtitle: 'Premium travel website + AI trip planner + lead engine',
        description: 'Built end-to-end from scratch. A premium creative website, an AI itinerary engine, a customer query system, and a full content management layer. All of it. Alone.',
        image: './SelectedWork1.webp',
        tags: ['Product', 'Design', 'AI', 'Marketing'],
        caseStudyUrl: '/work/one-moment',
        liveUrl: 'https://onemomenthq.com',
        style: {
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transformOrigin: '50% 85%',
            opacity: '0.8507',
            transform: 'translate3d(0px, 41.7945px, 0px) rotate(-6.717deg)',
        },
    },
    {
        id: 'auxy-ai',
        title: 'Auxy.ai',
        subtitle: 'End-to-end Framer website + design system',
        description: 'Full design and prototyping for Auxy.ai. From brand language to final Framer build. Every interaction, every micro-animation, every pixel was deliberate.',
        image: './SelectedWork1.webp',
        tags: ['Design', 'Framer', 'Branding', 'Prototyping'],
        caseStudyUrl: '/work/auxy-ai',
        liveUrl: 'https://auxy.ai',
        style: {
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transformOrigin: '50% 85%',
            opacity: '0.8507',
            transform: 'translate3d(0px, 41.7945px, 0px) rotate(6.717deg)',
        },
    },
    {
        id: 'aspaas',
        title: 'Aspaas',
        subtitle: '3-sided local commerce PWA, built solo',
        description: 'A 3-sided PWA where users find and order from local shops, vendors manage inventory, and admins control everything. Architecture, database design, UX, and code. All me.',
        image: './SelectedWork1.webp',
        tags: ['0 to 1', 'Engineering', 'Product', 'PWA'],
        caseStudyUrl: '/work/aspaas',
        liveUrl: 'https://aspaas.in',
        style: {
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transformOrigin: '50% 85%',
            opacity: '0.8',
            transform: 'translate(0px, 56px) rotate(-9deg)',
        },
    },
    {
        id: 'whatsapp-ai-mfd',
        title: 'MFD Client',
        subtitle: 'WhatsApp lead gen + risk assessment automation',
        description: 'Full WhatsApp lead generation and management automation for a Mutual Fund Distributor. Risk assessment, fund suggestions, dashboard, automatic call scheduling. No human needed until it is time to close.',
        image: './SelectedWork1.webp',
        tags: ['AI', 'Automation', 'WhatsApp', 'FinTech'],
        caseStudyUrl: '/work/whatsapp-ai-mfd',
        style: {
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transformOrigin: '50% 85%',
            opacity: '0.8',
            transform: 'translate(0px, 56px) rotate(9deg)',
        },
    },
    {
        id: 'meezo',
        title: 'Meezo',
        subtitle: 'Intro experience + first version app design',
        description: 'Designed the intro experience and complete first version of the Meezo app. The foundation that everything else was built on.',
        image: './SelectedWork1.webp',
        tags: ['Design', 'App', 'Branding', '0 to 1'],
        caseStudyUrl: '/work/meezo',
        liveUrl: 'https://www.meezopay.com',
        style: {
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transformOrigin: '50% 85%',
            opacity: '0.8',
            transform: 'translate(0px, 56px) rotate(-9deg)',
        },
    },
    {
        id: 'blueprint-labs',
        title: 'BluePrint Labs',
        subtitle: 'Full website redesign for an experiential design studio',
        description: 'BluePrint Labs builds experiential spaces for some of the biggest brands in the world. Their old site was loud and chaotic. They needed it to feel like the premium agency they actually are.',
        image: './SelectedWork1.webp',
        tags: ['Design', 'Branding', 'Web', 'Agency'],
        caseStudyUrl: '/work/blueprint-labs',
        style: {
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transformOrigin: '50% 85%',
            opacity: '0.8',
            transform: 'translate(0px, 56px) rotate(9deg)',
        },
    },
];