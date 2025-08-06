import React from 'react';

function Portfolio() {
  const portfolioItems = [
  {
    id: 1,
    company: "7AC TECHNOLOGY LLC",
    url: "https://www.emerson.com/en-us/news/corporate/7ac-acquisition",
    description: "7AC has been acquired by Emerson. 7AC provides new approach to air conditioning technology, developing extreme energy savings and the ability to maximize climate friendly refrigerants.",
    logo: "/7AC_LOGO.png"
  },
  {
    id: 2,
    company: "ADVANCED CYBER SAFETY",
    url: "https://www.advancedcybersecurity.com",
    description: "CSI is a state-of-the-art, high growth, cyber security company with multiple products targeted to enterprises and consumers. CSI is NOT an anti-virus vendor – CSI's key product, EndpointLock™, provides PREVENTION from zero-day malware. The EndpointLock product is part of FirstData's merchant package.",
    logo: "/ACS-LOGO.png"
  },
  {
    id: 3,
    company: "ACCURE ACNE, INC.",
    url: "https://www.accureacne.com",
    description: "Accure has developed (and the FDA has approved) a laser-based tool that isolates destruction of the subcutaneous gland with specific wavelengths – but without touching nearby tissues or glands. This provides long-term relief for acne sufferers.",
    logo: "/accure.png"
  },
  {
    id: 4,
    company: "ALLWORKS",
    url: "http://www.allworknow.com",
    description: "AllWork helps brands and retailers more efficiently staff their stores and respond to the challenges presented by the work preferences of Millennials. The company’s enterprise SaaS solution enables brands and retailers to source, schedule, monitor, train and evaluate their BA, freelance and in-store support, allowing them to maximize sales and reduce costs.",
    logo: "/ALLWORKS_LOGO.jpg"
  },
  {
    id: 5,
    company: "ASENDA HEALTH",
    url: "",
    description: "Acenda Health is determined to build the only connected platform in the chronic care and postacute care industry, where providers can collect, exchange, analyze and act on patient data in real time. In doing so, the company’s technology and infrastructure will have a large disruptive impact on the industry, leading to lower costs (for insurers, state Medicaid and Medicare), reduced financial risk for providers, and ultimately improve patient outcomes.",
    logo: "/ASENDA_LOGO.png"
  },
  {
    id: 6,
    company: "BLUSAPPHIRE",
    url: "http://www.blusapphire.net",
    description: "The first and only Unified Cyber Defense Platform with Intelligent Response Automation. It’s a Platform not just another tool. BluSapphire Enhanced Detection & Response (EDR) product is an elegant and ease to use platform to address the cyber defense stack – detection, analysis, response & remediation – a single tool that utilizes AI and machine learning to span the cyber defense stack in a single pane of glass.",
    logo: "/BLUSAPPHIRE_LOGO.png"
  },
  {
    id: 7,
    company: "DIAMOND STANDARD, INC.",
    url: "https://www.diamondstandard.co",
    description: "Diamond trading firm that crafts gemstones into a commodity – coins, bars and funds. An entirely new commodity for exchange, that is regulated by the Bermuda Monetary Authority and has won approval to list futures linked to its products on CME Group’s Chicago Mercantile exchange, along with options traded via MIAX.",
    logo: "/DIAMOND_LOGO.png"
  },
  {
    id: 8,
    company: "FOUNDATION CREF",
    url: "https://foundationcref.com",
    description: "The Foundation CREF platform gives the investor/developer/builder the tools they need to generate superior profit margins on any property they purchase through the Foundation CREF platform. The platform can provide capital - single family loans up to $5mm and multifamily bridge loans up to $30mm.",
    logo: "/FOUNDATION_LOGO.png"
  },
  {
    id: 9,
    company: "INFILLION, INC.",
    url: "https://infillion.com",
    description: "Company incorporated video, and OOH advertising. The platform incorporates the sophistication of precision targeting with premium inventory, coupled with agile creative and actionable insights. It is a product built to deliver Return on Ad Spend with simplicity and scale.",
    logo: "/INFILLION_LOGO.png"
  },
  {
    id: 10,
    company: "INFINITE REALITY",
    url: "https://theinfinitereality.com",
    description: "The Infinite Reality is a metaverse company and social media platform. Not only are brands now able to connect directly with consumers in an immersive and engaging world, but users can capture value by creating and sharing original content from all over the world.",
    logo: "/INFINITEREALITY_LOGO.svg"
  },
  {
    id: 11,
    company: "ION PACIFIC",
    url: "https://ionpacific.com",
    description: "Ion pacific is a venture capital fund with a focus on the broadly defined technology community providing creative liquidity solutions to GP's, LP's and special situations – with a local presence in the US, Hong Kong, Europe and Israel.",
    logo: "/IONPACIFIC_LOGO.png"
  },
  {
    id: 12,
    company: "KLICKLY",
    url: "https://klickly.com",
    description: "Klickly’s proprietary direct-to-consumer/pay-for-performance technology allows brands to prioritize across channels, and create in-add purchases in places where it has historically been most difficult to reach new customers in the digital world.",
    logo: "/KLICKLY_LOGO.jpg"
  },
  {
    id: 13,
    company: "MUSSEL POLYMERS",
    url: "https://www.musselpolymers.com",
    description: "Mussel has developed a solution based on biomimicry of mussels for industrial coatings, Dept of Defense needs, coral reefs , electronics and dental applications.",
    logo: "/MUSSELPOLYMERS_LOGO.png"
  },
  {
    id: 14,
    company: "NANOVAPOR",
    url: "https://www.nanovapor.com",
    description: "NanoVapor Inc. offers breakthrough nanotechnologies in the industrial management of vapors from gasoline, petrochemicals, oil and its derivatives. NanoVapor’s systems are significantly safer, faster, healthier, greener, and more cost effective than conventional methods.",
    logo: "/NANOVAPOR_LOGO.png"
  },
  {
    id: 15,
    company: "PING",
    url: "https://www.pingloud.com",
    description: "Ping is patented, cross platform voice technology that allows users to hear all their messages and email read aloud, when touching their device is dangerous, illegal (driving) or simply inconvenient.",
    logo: "/PING_LOGO.png"
  },
  {
    id: 16,
    company: "RAYDIANT",
    url: "https://www.raydiant.com",
    description: "Raydiant acquired our investment PERCH Interactive. Raydiant is a leading in-location digital experience platform with over 200,000 devices and customers like McDonald’s, First Bank, Harvard University and Thomson Reuters.",
    logo: "/RAYDIANT_LOGO.png"
  },
  /*{
    id: 17,
    company: "SWAPONZ",
    url: "https://swaponz.com",
    description: "Swaponz is a technology and consumer product company that is combining its patented Infinite Swap product platform with the power and excitement of Augmented Reality to inform and engage customers at the point of sale and during events.",
    logo: "/SWAPONZ_LOGO.jpg"
  },*/
  {
    id: 18,
    company: "THIRSTIE",
    url: "https://thirstie.com",
    description: "The new standard in enterprise e-commerce for liquor brands. Thirstie builds the most powerful and flexible tools to enable internet commerce. Whether you’re a large or small brand, Thirstie’s meticulously-designed APIs and unmatched functionality help you create the best possible product experience.",
    logo: "/THIRSTIE_LOGO.jpg"
  },
  {
    id: 19,
    company: "THE SAFE GROUP",
    url: "https://safehealth.me",
    description: "Using their proprietary technology, Safe Health Group, Inc. and the Mayo Clinic have launched a platform to reduce the cost of care in commodity diagnostics at scale. Combines AI-based care automation and remote point-of-care diagnostics.",
    logo: "/THESAFEGROUP_LOGO.png"
  },
  /*{
    id: 20,
    company: "TOLEDO SOLAR, INC",
    url: "https://toledo-solar.com",
    description: "The state-of-the-art manufacturer and distributor of cadmium Telluride (CdTe) thin-film solar panels. Manufactures solar panels for home roofs and windows using vapor disposition technology.",
    logo: "/TOLEDO_SOLAR_LOGO.png"
  },*/
  {
    id: 21,
    company: "UCODE PROGRAMMING ACADEMY",
    url: "https://www.ucode.com",
    description: "A complete solution for children learning a naturally recognized curriculum, exercises and quizzes that also facilitates numbers literacy and analytical thinking. Students learn Scratch, Python, Java, HTML and SQL.",
    logo: "/UCODE_LOGO.png"
  },
  {
    id: 22,
    company: "XXII",
    url: "https://xxiicentury.com",
    description: "22nd Century is an agricultural biotechnology and intellectual-property company. Focused on alkaloid plant techniques to improve health through tobacco harm reduction and cannabinoids.",
    logo: "/XXII_LOGO.png"
  },
  {
    id: 23,
    company: "ZONEFLOW",
    url: "http://www.zoneflowtech.com",
    description: "Zone Flow develops reactor technologies to improve efficiency of hydrogen and syngas production via the steam methane reforming process, the dominant method for hydrogen production.",
    logo: "/ZONEFLOW_LOGO.jpg"
  }
  ];

  return (
    <div id="investments" className="bg-white">
      <div className="max-w-5xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-left mb-16">
          <h1 className="text-4xl font-bold text-black">Portfolio</h1>
        </div>

        {/* Portfolio Items */}
        <div className="space-y-12">
          {portfolioItems.map((item) => (
            <div key={item.id} className="flex items-center gap-8">
              {/* Logo */}
              <div>
                <img src={item.logo} alt={`${item.company} Logo`} className="w-[129px] object-contain" />
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h1 className="text-2xl font-bold text-black mb-1">
                  {item.company}
                </h1>
                {item.url && (
                  <a
                    href={item.url}
                    className="text-blue-600 hover:text-blue-700 text-sm mb-3 block transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.url}
                  </a>
                )}
                {item.description && (
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;