import { SimpleLayout } from "@/components/SimpleLayout";
import Image from 'next/image'

import alistairImage from "@/images/people/alistair.jpg";
import lukeImage from "@/images/people/luke.jpg";
import tomImage from "@/images/people/tom.jpg";
import mariaImage from "@/images/people/maria.jpg";


const people = [
    {
        name: 'Alistair Hey',
        role: 'Co-Founder',
        image: alistairImage,
        twitterProfile: 'alistair_hey',
        linkedinUrl: 'https://www.linkedin.com/in/alistair-hey/',
    },
    {
        name: 'Luke Browne',
        role: 'Co-Founder',
        image: lukeImage,
        twitterProfile: 'lukebrwne',
        linkedinUrl: 'https://www.linkedin.com/in/luke-browne/',
    },
    {
        name: 'Tom Withers',
        role: 'Co-Founder',
        image: tomImage,
        twitterProfile: 'tomtucka',
        linkedinUrl: 'https://www.linkedin.com/in/tomtucka/'
    },
    {
        name: 'Maria Aveiro',
        role: 'Co-Founder',
        image: mariaImage,
        twitterProfile: 'mariamsaveiro',
        linkedinUrl: 'https://www.linkedin.com/in/mariamsaveiro/'
    },

    // More people...
]

export default function Example() {
    return (
        <SimpleLayout
            title="Meet the team"
            intro="TechMids is an open collective of meetups and events focused on technology and the people who work in it. We are a friendly bunch and we are always happy to meet new people."
        >
            <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
                {people.map((person) => (
                    <li key={person.name} className="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
                        <div className="space-y-6 xl:space-y-10">
                            <Image className="mx-auto overflow-clip rounded-lg aspect-[4/3] object-cover" src={person.image} alt="" />
                            <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                <div className="space-y-1 text-lg font-medium leading-6">
                                    <h3 className="text-white">{person.name}</h3>
                                    <p className="text-indigo-400">{person.role}</p>
                                </div>

                                <ul role="list" className="flex justify-center space-x-5">
                                    {person.twitterProfile && (
                                        <li>
                                            <a href={`https://twitter.com/${person.twitterProfile}`} className="text-gray-400 hover:text-gray-300">
                                                <span className="sr-only">Twitter</span>
                                                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                </svg>
                                            </a>
                                        </li>
                                    )}
                                    {person.linkedinUrl && (
                                        <li>
                                            <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-300">
                                                <span className="sr-only">LinkedIn</span>
                                                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </SimpleLayout>
    )
}
