import { CSSProperties } from 'react';

export interface WorkItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    tags: string[];
    caseStudyUrl?: string;
    liveUrl?: string;
    style?: CSSProperties;
}

export const WORK_ITEMS: WorkItem[] = [
    {
        id: 'Ziarah',
        title: 'Ziarah.ai',
        subtitle: 'I built a travel tech product solo and it paid for itself in 30 days',
        description: 'Joined as the founding UX designer with no existing product, no design system and no handover docs. Left with a fully shipped AI travel platform, a booking flow that converted, and 100 paid packages sold before the public launch.',
        image: './Ziarah_Cover1.png',
        tags: ['0 → 1 Design', 'AI Trip Planning', 'Flight Booking', 'UX Research'],
        // caseStudyUrl: '/work/one-moment',
        liveUrl: 'https://ziarah.ai/en',
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
        id: 'Teamora',
        title: 'Teamora',
        subtitle: 'Designed the hiring stack that got validated by investors',
        description: 'Enterprise is hard. Every flow has edge cases, every decision has compliance implications. I designed the full HRMS from talent acquisition to onboarding — including an AI scoring system for candidates that made recruiters actually trust the data.',
        image: './Teamora_Cover.png',
        tags: ['Enterprise UX', 'AI Recruitment', 'HRMS', 'ATS', 'Design System'],
        // caseStudyUrl: '/work/auxy-ai',
        liveUrl: 'hhh',
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
        id: 'Battery Driver',
        title: 'Battery Driver',
        subtitle: 'Designed for people who had never used an app before',
        description: 'BatteryDriver is a rental platform for E-Rickshaw drivers — most of whom had low English literacy and little to no app experience. I stripped away every assumption about what a user already knows. The result was a rental flow that anyone could complete on their first try.',
        image: './BatteryDriver_Cover.png',
        tags: ['Inclusive Design', 'Mobile UX', 'Low Literacy Users', 'Rental Flow'],
        // caseStudyUrl: '/work/aspaas',
        liveUrl: 'https://www.figma.com/design/BFiLiyI9nYiSOo2q9Yy6Cw/Jateen-BatteryDriver?node-id=0-1&t=n4PXeJOMPjXKeRwY-1',
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
        id: 'Gatherly',
        title: 'Gatherly',
        subtitle: 'See whats Happening, Host what next ',
        description: 'Gatherly is part social network and part event platform. People can discover what is going on around them or put together their own gathering and invite others to it. The hard part was making both sides feel natural in one app, so I designed two flows that never fight for attention, one for people looking for something to do and one for people creating something worth showing up to.',
        image: './Gatherly_Cover.png',
        tags: ['Social Platform', 'Event Management', 'UX Design', 'Mobile App'],
        // caseStudyUrl: '/work/whatsapp-ai-mfd',
        liveUrl: 'https://www.figma.com/design/uCGtZqE8FFAR27u3JL7zBm/Freelance_Gatherly?node-id=0-1&t=4M6w1dh4TFUh6Mcc-1',
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
        id: 'Riquenza',
        title: 'Riquenza',
        subtitle: 'Designed a skincare brand that feels as premium as the product inside the bottle',
        description: 'Riquenza is a science-backed skincare brand built on Korean ingredients like PDRN and Collagen. I designed the full e-commerce experience to match the premium positioning — clean layouts, trust-building product pages and a checkout flow that converts browsers into buyers. The site is live, the products are selling and the reviews are real.',
        image: './Riquenza_Cover.png',
        tags: ['E-commerce UX', 'Skincare Brand', 'Mobile First', 'Conversion Design'],
        // caseStudyUrl: '/work/blueprint-labs',
        liveUrl: 'https://www.riquenza.com/',
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
        id: 'Xoptimus',
        title: 'Xoptimus',
        subtitle: 'Redesigned a CleanTech startups website and app that 10K+ users rely on daily',
        description: 'Xoptimus is an AI-powered smart battery management platform for laptops and phones — a IIIT-backed, award-winning CleanTech startup featured in The Hindu and Startup India. The old experience did not match the credibility of what they had built. I redesigned the complete website and mobile app to bring the products intelligence forward — cleaner flows, clearer value and a UI that makes a smart charger feel like a smart choice.',
        image: './Xoptimus_Cover.png',
        tags: ['Website Redesign', 'B2C', 'AI Prdoducts', 'CleanTech'],
        caseStudyUrl: 'https://www.figma.com/design/jxxpNTNfZRb0LdNh9gq4NE/Freelance_Xoptimus?node-id=0-1&t=JYl2MHMu2vzvtKc7-1',
        liveUrl: 'https://www.xoptimus.in/',
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