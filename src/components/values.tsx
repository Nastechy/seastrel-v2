import Image from "next/image"

interface ValueCardProps {
    title: string
    description: string
    imageSrc: string
}

function ValueCard({ title, description, imageSrc }: ValueCardProps) {
    return (
        <div className="flex flex-col items-center bg-[#F8F8F9] rounded-[5px] ">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-6">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
           <div className="p-3 flex flex-col items-center">
           <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-gray-600 text-center max-w-md">
                {description}
            </p>
           </div>
        </div>
    )
}

export default function Values() {

    const values = [
        {
            title: "Excellence",
            description: "We create unparalleled experiences that exceed your expectations with a passion for perfection and attention to detail.",
            imageSrc: "/blog-1.jpg"
        },
        {
            title: "Professionalism",
            description: "We deliver top-notch service, and handle requests with expertise, ensuring your journey is smooth and hassle-free.",
            imageSrc: "/blog-2.jpg"
        },
        {
            title: "Expertise",
            description: "Our intimate knowledge of the industry allows us to craft a service uniquely tailored to your needs to serve you without hassle.",
            imageSrc: "/blog-3.jpg"
        }
    ]

    return (
        <section className="px-4 md:px-0 py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-[#1D4ED8] font-bold mb-4">Our Values</h2>
                    <h1 className="text-3xl font-bold md:text-4xl">
                        Why choose us
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 shadow-lg">
                    {values.map((value, index) => (
                        <ValueCard
                            key={index}
                            title={value.title}
                            description={value.description}
                            imageSrc={value.imageSrc}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

