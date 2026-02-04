export interface Project {
    id: string
    title: string
    description: string
    techStack: string[]
    image: string
}

export const projects: Project[] = [
    {
        id: 'design-system',
        title: 'Design System',
        description:
            'Built a comprehensive, accessible component library serving hundreds of engineers across the organization.',
        techStack: ['React', 'TypeScript', 'Storybook', 'Accessibility', 'Tailwind CSS'],
        image: '/images/placeholder-1.jpg',
    },
    {
        id: 'performance-toolkit',
        title: 'Performance Toolkit',
        description:
            'Created tools to help developers identify and fix performance bottlenecks in their applications.',
        techStack: ['Next.js', 'Analytics', 'Performance', 'Observability', 'D3.js'],
        image: '/images/placeholder-4.jpg',
    },
    {
        id: 'auth-platform',
        title: 'Authentication Platform',
        description:
            'Engineered a secure, scalable authentication system handling millions of users across global services.',
        techStack: ['Security', 'OAuth', 'Sessions', 'Backend', 'Redis', 'Node.js'],
        image: '/images/placeholder-5.jpg',
    },
    {
        id: 'education-platform',
        title: 'Education Platform',
        description:
            'Developed a comprehensive video course platform with streaming, progress tracking, and community features.',
        techStack: ['Full Stack', 'Video', 'Education', 'Community', 'PostgreSQL', 'Prisma'],
        image: '/images/placeholder-6.jpg',
    },
]
