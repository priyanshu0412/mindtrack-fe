import React from 'react'

// -----------------------------------------

const AboutMeComponent = () => {
    return (
        <>
            <div className="bg-primaryColor text-white min-h-screen flex items-center justify-center p-6">
                <div className="max-w-4xl w-full bg-white p-10 rounded-2xl shadow-lg">
                    {/* Header Section */}
                    <h1 className="text-4xl font-bold text-center text-primaryColor">About Me</h1>
                    <p className="text-center text-lg text-primaryColor mt-2">Full Stack Developer</p>

                    {/* Profile Section */}
                    <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
                        <div className="w-32 h-32 bg-secondaryColor rounded-full flex items-center justify-center text-primaryColor text-4xl font-bold">
                            P
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-primaryColor">Priyanshu Agrawal</h2>
                            <p className="text-lg text-gray-700 mt-2">
                                I&apos;m a passionate Full Stack Developer specializing in the <span className="font-semibold">MERN stack</span> and <span className="font-semibold">Next.js</span>.
                                I build scalable web applications, interactive user interfaces, and secure backends with modern technologies.
                            </p>
                        </div>
                    </div>

                    {/* About Mindtrack */}
                    <div className="mt-10 p-6 rounded-xl bg-secondaryColor text-primaryColor">
                        <h2 className="text-2xl font-semibold text-center">What is Mindtrack?</h2>
                        <p className="text-lg text-center mt-2">
                            Mindtrack is a **productivity-focused application** that combines a <span className="font-semibold">to-do list</span> and a <span className="font-semibold">diary feature</span>.
                            It helps users track tasks, journal thoughts, and manage time effectively.
                        </p>
                    </div>

                    {/* Skills Section */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-semibold text-center text-primaryColor">Skills & Technologies</h2>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "GitHub"].map((skill) => (
                                <span key={skill} className="bg-thirdColor text-primaryColor px-4 py-2 rounded-lg font-semibold shadow-md">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-10 p-6 rounded-xl bg-primaryColor text-white text-center">
                        <h2 className="text-2xl font-semibold">Get In Touch</h2>
                        <p className="mt-2 text-lg">Want to collaborate or discuss a project? Reach out!</p>
                        <button className="mt-4 px-6 py-3 bg-thirdColor text-primaryColor font-semibold rounded-lg shadow-md">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMeComponent
