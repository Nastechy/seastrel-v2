export default function About() {
    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
            <div className="container mx-auto max-w-7xl p-4 md:p-0">
                <div className="space-y-4 mb-16 flex items-center justify-center flex-col mt-0 md:mt-10">
                    <h2 className="text-blue-600 font-bold">About Us</h2>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        About Seastrel International Limited
                        <p className="ml-0 md:ml-9 "> And It&apos;s Innovative IT Solutions
                        </p>
                    </h1>
                </div>

                <div className="grid md:grid-cols-2 gap-20 items-start">
                    <div className="relative">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-white">
                            <img
                                src="/about-1.jpg"
                                alt="Team meeting at Seastrel"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className=" absolute -bottom-12 -right-12 aspect-[4/3] w-4/5 rounded-lg overflow-hidden shadow-xl bg-white">
                            <img
                                src="/about-2.jpg"
                                alt="Team collaboration at Seastrel"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="space-y-6 text-gray-600">
                        <p className="leading-relaxed">
                            Seastrel Technology solution is a branch of SEASTREL International Limited. A pioneering
                            company that offers holistic solutions for businesses, akin to a hospital for health or a mechanic
                            shop for vehicles. We diagnose, treat, and improve various aspects of businesses, helping them
                            reach their optimal potential and beyond.
                        </p>

                        <p className="leading-relaxed">
                            SEASTREL International Limited is a service company based in Nigeria and United State of
                            America (USA). We have a team of software programmers, project managers and engineers, who
                            have over 10 years of experience in developing customer-oriented software packages and
                            solving business related problems.
                        </p>

                        <p className="leading-relaxed">
                            Our team are the best at what they do and undergo continuous training in order to maintain their
                            edge. We&apos;ve got designers, programmers, writers and managers — and they&apos;re all thinkers and
                            doers with creativity, 24/7. Seastrel is committed to being your software partner. This implies that
                            at each stage of the software development process, we strive to engage you the client, in order
                            to ensure YOUR needs are understood, satisfactorily met and a quality product which passes
                            standard tests is delivered.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

