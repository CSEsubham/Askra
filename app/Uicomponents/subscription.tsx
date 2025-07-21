'use client';

import localFont from 'next/font/local';
const titleFon = localFont({
      src: '../fonts/LondrinaSketch-Regular.ttf',
      variable: '--font-titleLg',
      display: 'swap',
    });
    const descriptionFon = localFont({
      src: '../fonts/Handjet-VariableFont_ELGR,ELSH,wght.ttf',
      variable: '--font-description',
      display: 'swap',
    });
    const subtitleFont = localFont({
      src: '../fonts/Almendra-Regular.ttf',
      variable: '--font-subtitle',
      display: 'swap',
    });

const plans = [
  {
    name: 'Free',
    price: '₹0',
    features: [
      'Access to AskRa for DSA & Coding help',
      'Basic answer generation',
      'Limited usage per day',
    ],
    bg: 'bg-gradient-to-br from-purple-50 to-purple-300',
    border: 'border-gray-200',
  },
  {
    name: 'Pro',
    price: '₹99',
    features: [
      'Unlimited question access',
      'Faster responses with enhanced logic',
      'Priority support from AskRa',
    ],
    bg: 'bg-gradient-to-br from-purple-200 to-purple-400',
    border: 'border-blue-300',
  },
  {
    name: 'Elite',
    price: '₹199',
    features: [
      'All Pro features',
      'Advanced AI debugging support',
      'Personalized DSA guidance',
    ],
    bg: 'bg-gradient-to-br from-purple-400 to-purple-50',
    border: 'border-purple-300',
  },
];

export default function Subscription() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 flex flex-col items-center">
      <h1 className={`text-6xl font-bold ${titleFon.className} text-purple-800 mb-4 text-center`}>Choose Your Plan</h1>
      <p className={`text-purple-400 text-xl font-bold ${subtitleFont.className} mb-10 text-center max-w-xl`}>
        Pick a subscription that fits your learning style and boost your coding confidence with AskRa.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-md hover:shadow-xl transition-opacity duration-300 border ${plan.border} ${plan.bg} p-8 flex flex-col justify-between`}
          >
            <div>
              <h2 className={`text-4xl font-semibold ${subtitleFont.className} text-gray-800 mb-2`}>{plan.name}</h2>
              <p className={`text-3xl font-bold text-gray-900 mb-6`}>{plan.price}</p>
              <ul className={`space-y-3 text-xl  ${descriptionFon.className} text-black `}>
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className={`text-green-600  mr-2`}>✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className={`mt-8 ${titleFon.className} bg-black hover:scale-[1.05] text-white py-2 px-4 rounded-3xl hover:text-white hover:bg-purple-700 transition-shadow cursor-pointer duration-400 text-2xl`}>
              {plan.name === 'Free' ? 'Get Started' : 'Subscribe'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
