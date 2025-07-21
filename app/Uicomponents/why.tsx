'use client';
import localFont from 'next/font/local';
const titleFon = localFont({
      src: '../fonts/LondrinaSketch-Regular.ttf',
      variable: '--font-titleLg',
      display: 'swap',
    });
      const descriptionFo = localFont({
          src: '../fonts/Handjet-VariableFont_ELGR,ELSH,wght.ttf',
          variable: '--font-description',
          display: 'swap',
        });
    const descriptionFont = localFont({
      src: '../fonts/Explora-Regular.ttf',
      variable: '--font-description',
      display: 'swap',
    });
    const subtitleFont = localFont({
      src: '../fonts/Almendra-Regular.ttf',
      variable: '--font-subtitle',
      display: 'swap',
    });

export default function Why() {
    
    
  const features = [
    {
      title: 'DSA Made Simple',
      description:
        "AskRa helps you learn DSA faster with clean code and clear explanations. From arrays to recursion, it simplifies complex topics so you can focus on understanding concepts and solving problems with confidence — without spending hours searching for help.",
    },
    {
      title: 'Powered by Lightning-Fast AI',
      description:
        "Built on Groq’s high-speed model, AskRa gives you instant, accurate answers. Get real-time code and logic breakdowns without waiting. It’s designed to keep you focused and in the flow, helping you learn and code more efficiently.",
    },
    {
      title: 'Built for Students, by Students',
      description:
        "AskRa was designed by students who understand the struggles of coding prep. Its clean interface removes distractions, helping you stay focused. It’s intuitive, simple, and built to support your learning from day one to your last interview.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-4 md:px-16 text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className={`text-6xl font-bold mb-4 text-purple-700 ${titleFon.className}`}>Why Choose AskRa?</h2>
        <p className={`text-purple-500 text-lg ${subtitleFont.className}`}>
          Here’s why AskRa is the perfect coding companion for your DSA journey.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-fuchsia-100 p-6 rounded-2xl border-pink-300 shadow-md hover:scale-[1.15] duration-200 hover:bg-purple-400 hover:text-white hover:shadow-2xl"
          >
            <h3 className={`text-2xl font-semibold mb-2 transition-colors ${descriptionFo.className} font-sans duration-300`}>
              {feature.title}
            </h3><p className={`transition-colors font-bold md:font-light text-3xl duration-300 ${descriptionFont.className}`}>{feature.description}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
}

