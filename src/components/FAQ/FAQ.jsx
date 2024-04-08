const FAQ = () => {
    return (
        <div>
            <section className="bg-gray-100 text-gray-800 lg:mt-9 mt-5 rounded-2xl">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl text-[#d19945]">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 text-gray-600">Explore answers to commonly asked questions about Majestic Manors and our luxurious properties.</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-indigo-600">What makes Majestic Manors properties unique?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Majestic Manors properties are distinguished by their timeless elegance, exceptional craftsmanship, and unparalleled amenities. Each property is meticulously curated to provide the ultimate luxury living experience.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-indigo-600">How do I schedule a viewing of a Majestic Manors property?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">To schedule a viewing of a Majestic Manors property, simply contact our dedicated team of real estate experts. We'll be delighted to arrange a private tour at your convenience.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-indigo-600">What amenities are included in Majestic Manors properties?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Majestic Manors properties boast an array of luxury amenities, including spacious living areas, state-of-the-art kitchens, resort-style pools, and meticulously landscaped gardens. Additional amenities may vary depending on the specific property.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
