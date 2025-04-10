const About = () => {
    return (
        <div className="py-8 md:py-16 px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">About CarFinder</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                CarFinder is your go-to platform to discover and compare the best cars tailored to your lifestyle and budget.
                Whether you're searching for a reliable daily driver, a weekend cruiser, or a luxury dream car — we help you
                find it with ease and confidence.
            </p>
            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto text-left">
                <div className="bg-white p-6 rounded-2xl shadow-sm border">
                    <h2 className="text-xl font-semibold mb-2">🚗 Built for car lovers</h2>
                    <p className="text-gray-700">
                        We bring an experience-focused design so users can truly enjoy browsing and discovering their next ride.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border">
                    <h2 className="text-xl font-semibold mb-2">🛠️ Constantly Evolving</h2>
                    <p className="text-gray-700">
                        We're always improving the platform — adding more features, more data, and better UI for a smoother search.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
