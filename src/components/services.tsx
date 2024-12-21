import { Code, FileCode, ExternalLink, UserSquare2, Mail, Laptop } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
    title: string
    description: string
    icon: React.ReactNode
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
    return (
        <div className="group relative bg-white rounded-[10px] p-8 shadow-lg transition-all duration-300 hover:bg-blue-600">
            <div className="mb-6 text-[#1D4ED8] group-hover:text-[#FFFFFF] w-16 h-16">
                {icon}
            </div>

            <h3 className="text-xl font-bold mb-4 group-hover:text-white">
                {title}
            </h3>

            <p className="text-gray-600 mb-6 group-hover:text-white/90">
                {description}
            </p>

            <Button
                className="border border-[#1D4ED8] hover:border-white rounded-[5px] text-black hover:bg-white hover:text-black transition-colors duration-300"
            >
                Read More
            </Button>
        </div>
    )
}

export default function Services() {
    const services = [
        {
            title: "Mobile App Development",
            description: "Creative and technical process of building software designed for handheld devices, such as smartphones and tablets.",
            icon: <Code className="w-full h-full" />
        },
        {
            title: "Web Development",
            description: "Strengthen your online world stability with the help of our technology based on advanced web development technology.",
            icon: <FileCode className="w-full h-full" />
        },
        {
            title: "Data Analysis",
            description: "This feature enables a company to create and manage client profiles, business processes and record-keeping of inventory details.",
            icon: <ExternalLink className="w-full h-full" />
        },
        {
            title: "App & Game Development",
            description: "Ensure an exciting presence in the digital world with mobile apps and games that are highly advanced.",
            icon: <UserSquare2 className="w-full h-full" />
        },
        {
            title: "Crypto Blockchain",
            description: "Blockchain high security is a safe place for clients and customers to make transactions with confidentiality and trust.",
            icon: <Mail className="w-full h-full" />
        },
        {
            title: "Articial Intelligence",
            description: "We help argument machines' performances by integrating artificial intelligent for them to be able to mimic human actions.",
            icon: <Laptop className="w-full h-full" />
        }
    ]

    return (
        <section className="px-4 md:px-0 py-16 md:py-1 bg-gradient-to-br from-blue-50 via-white to-blue-100">
            <div className="container mx-auto max-w-7xl mt-24">
                <div className="text-center mb-16 mt-8">
                    <h2 className="text-blue-600 font-bold mb-4">Our Services</h2>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                        Services Built Specifically For<br />
                        Your Business
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

