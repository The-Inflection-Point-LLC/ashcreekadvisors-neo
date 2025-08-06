import React from 'react';
import MemberCard from './MemberCard';

const members = [
  /*{
    "id": 1,
    "name": "BRIAN ANDREOLI",
    "title": "MANAGING DIRECTOR",
    "image": "/Brian-LinkedIn-picture.jpeg",
    "shortDescription": "International tax partner with three multinational firms; tax principal with three of the big four accounting firms: corporate tax experience are two major pharmaceutical companies. Extensive experience in litigation",
    "fullDescription": "International tax partner with three multinational firms; tax principal with three of the big four accounting firms: corporate tax experience are two major pharmaceutical companies. Extensive experience in litigation, mergers and acquisitions, restructuring and general business matters. Etcetera"
  },*/
  {
    "id": 1,
    "name": "MITCHELL BRANDT",
    "title": "MANAGING DIRECTOR",
    "image": "/Screenshot 2025-08-06 at 23.25.08.jpeg",
    "shortDescription": "Entrepreneur, former of owner of Schools for. Children with Special Needs for the past 9 years. Operaied a reiationship service business for over 15 years, commercial pool and repair service for 8 years and a restaurant",
    "fullDescription": "Entrepreneur, former of owner of Schools for. Children with Special Needs for the past 9 years. Operaied a reiationship service business for over 15 years, commercial pool and repair service for 8 years and a restaurant supply company for six years. Prior to business practiced law for three years in Houston, Texas. Member of YPO and recently elected Regional Board Member of YPO."
  },  
  {
    "id": 2,
    "name": "WILLIAM A. BROWN",
    "title": "MANAGING DIRECTOR",
    "image": "/BillBrown-scaled-e1644331647660.jpg",
    "shortDescription": "Alternative investments and asset management, with 25+ years of experience in identifying, seeding and investing with high-quality Hedge Fund managers. Having evaluated approximately 2500 HFs, currently specializing.",
    "fullDescription": "Alternative investments and asset management, with 25+ years of experience in identifying, seeding and investing with high-quality Hedge Fund managers. Having evaluated approximately 2500 HFs, currently specializing in identifying manager skills and constructing risk-controlled, concentrated portfolios comprised of liquid, high conviction/high potential payoff idiosyncratic ideas sourced by nimble and/or early-stage HF managers. Former Managing Director at UBS and Chief Investment Officer & Head of the world’s largest ($48B) FOHF group, Alternative Investment Solutions. Conducted HF due diligence and strategy research across all HF strategies, managed numerous portfolios and chaired investment committees. Also, a former trader for ten years at IFC, a global macro HF; traded derivatives across a wide range of markets. BA (Economics) from University of Rochester."
  },
  {
    "id": 3,
    "name": "CHRISTOPHER J.CROVATTO",
    "title": "MANAGING DIRECTOR",
    "image": "/crovatto-1.jpg",
    "shortDescription": "Entrepreneur, advisor, and direct investor in middle-market private equity and real estate transactions. Managing partner in several private equity backed portfolio companies. Specialization in structured real estate",
    "fullDescription": "Entrepreneur, advisor, and direct investor in middle-market private equity and real estate transactions. Managing partner in several private equity backed portfolio companies. Specialization in structured real estate finance with a focus on high yield and opportunistic / distressed debt and equity investment, as well as advisory and capital raising initiatives. Former senior executive at Babcock & Brown LP, Contrarian Capital Management, Bank of America, and Union Bank of Switzerland. BA Columbia College."
  },
  {
    "id": 4,
    "name": "THOMAS M. DAVIDSON",
    "title": "MANAGING DIRECTOR",
    "image": "/TMD-Picture-2-scaled-e1643937022637.jpg",
    "shortDescription": "Managing director of consulting group specializing in start-up and middle market and specialty finance companies and treasurer of real estate group. Wide-ranging experience as Chairman, CEO, COO and CFO for NYSE/NAS",
    "fullDescription": "Managing director of consulting group specializing in start-up and middle market and specialty finance companies and treasurer of real estate group. Wide-ranging experience as Chairman, CEO, COO and CFO for NYSE/NASDAQ listed and private venture developed firms, including Global Telesystems Group, Arrow Electronics, Texas Gas Corporation, White Motor Credit Corporation and the Ford Motor Credit launch team. BA Vanderbilt, MBA Columbia."
  },
  {
    "id": 5,
    "name": "FLORENCE C. DIPAOLA",
    "title": "MANAGING DIRECTOR",
    "image": "/FLORENCE C. DIPAOLA.jpg",
    "shortDescription": "Former senior financial services executive with diversified background in domestic and international leasing/lending – multiple industry sectors. Specialized in Big Ticket Tax Leveraged Leasing – structuring,",
    "fullDescription": "Former senior financial services executive with diversified background in domestic and international leasing/lending – multiple industry sectors. Specialized in Big Ticket Tax Leveraged Leasing – structuring, advisory and syndications. Primary and secondary market focus related to investments. Related positions – Managing Director, Bank of America, and Credit Commercial de France. Senior Vice President, GE Capital, Transamerica Finance Corporation, MetLife Capital. Vice President, Citibank, Xerox Credit Corp."
  },
  {
    "id": 6,
    "name": "MITCHELL DICKEY",
    "title": "MANAGING DIRECTOR",
    "image": "/Mitch-Dickey-Photo.jpg",
    "shortDescription": "Management Consultant in professional services firms. 17 years as a serial entrepreneur; launched four companies – sold one, running one and is starting a new venture to scale behavioral health services. Prior to",
    "fullDescription": "Management Consultant in professional services firms. 17 years as a serial entrepreneur; launched four companies – sold one, running one and is starting a new venture to scale behavioral health services. Prior to these activities spent 15 years as social science researcher at elite universities at the intersection of psychology and business, including research scientist at Yale School of Medicine. BA Kenyon College, PhD Yale University."
  },
  {
    "id": 7,
    "name": "ROBERT FARLEY",
    "title": "MANAGING DIRECTOR",
    "image": "/ROBERT FARLEY.jpg",
    "shortDescription": "Independent consultant. Former Managing Director and Head of North American Sales & Relationship Management covering Financial Intermediaries for BNP Paribas’ Global Securities Services. Prior to BNP Paribas, he",
    "fullDescription": "Independent consultant. Former Managing Director and Head of North American Sales & Relationship Management covering Financial Intermediaries for BNP Paribas’ Global Securities Services. Prior to BNP Paribas, he worked at heritage JP Morgan’s Morgan Guaranty Trust Company and Citibank, N.A. in the Financial Institutions Group. BS Fairfield University."
  },
  {
    "id": 8,
    "name": "STEVEN E. HIRSCH",
    "title": "MANAGING DIRECTOR",
    "image": "/STEVEN E. HIRSCH.jpg",
    "shortDescription": "Advisor and consultant in structured asset-based finance, including equipment financings and leases, the acquisition of asset-based portfolios and specialty finance companies, lease equity placement and the structuring and.",
    "fullDescription": "Advisor and consultant in structured asset-based finance, including equipment financings and leases, the acquisition of asset-based portfolios and specialty finance companies, lease equity placement and the structuring and placement of asset-backed debt in the public and private markets. Executive positions with Babcock & Brown LP, UniCapital Corporation and Morgan Stanley & Co. BA Trinity, MBA NYU Stern."
  },
  {
    "id": 9,
    "name": "CHRISTOPHER G. L. JONES",
    "title": "MANAGING DIRECTOR",
    "image": "/CHRISTOPHER G. L. JONES.jpg",
    "shortDescription": "Investor and venture capitalist with experience in manufacturing, high tech electronics, medical devices, energy conservation, defense industries and Internet-related software companies as well as government and",
    "fullDescription": "Investor and venture capitalist with experience in manufacturing, high tech electronics, medical devices, energy conservation, defense industries and Internet-related software companies as well as government and academia. Extensive international business and finance experience in Europe, Asia and the Middle East. Serves as officer or director of several privately held companies and currently CEO of two early stage ventures. President of the non-profit parent foundation for the Yale Daily News Publishing Company. BA Johns Hopkins."
  },
  {
    "id": 10,
    "name": "RICHARD KELLY",
    "title": "MANAGING DIRECTOR",
    "image": "/RICHARD KELLY.jpg",
    "shortDescription": "Retired senior investment banker with extensive international and cross border merger and acquisition as well as financial advisory experience across a variety of industries at The Bridgeford Group/Mizuho, JPMorgan,",
    "fullDescription": "Retired senior investment banker with extensive international and cross border merger and acquisition as well as financial advisory experience across a variety of industries at The Bridgeford Group/Mizuho, JPMorgan, Credit Suisse/First Boston and Lehman Brothers located in New York, Hong Kong, Tokyo and London. AB Harvard College, MBA Stanford GSB."
  },
  /*{
    "id": 11,
    "name": "STEVEN LANDIS",
    "title": "MANAGING DIRECTOR",
    "image": "/STEVEN LANDIS.png",
    "shortDescription": "Strategic consultant focused on private credit investing. Investor with extensive experience in fixed income, relative value, sector allocation, and market timing. Formerly Vice President and head of Macquarie",
    "fullDescription": "Strategic consultant focused on private credit investing. Investor with extensive experience in fixed income, relative value, sector allocation, and market timing. Formerly Vice President and head of Macquarie Investment Management’s Delaware Funds’ Emerging Markets Debt business. Previously Managing Director at FH International Asset Management, focused on multi-strategy investing in sovereign and corporate emerging market debt. Prior extensive experience as a market maker and proprietary trader in the Primary Dealer community for US Treasury Debt. BA, Beloit College and MBA, Columbia University Graduate School of Business."
  },*/
  {
    "id": 12,
    "name": "TERRY LAUGHREN",
    "title": "MANAGING DIRECTOR",
    "image": "/TERRY LAUGHREN.jpg",
    "shortDescription": "Private equity investor, board director and advisor in media and marketing services, including Screenvision Cinema Network, where he actively ran the company as President, Chairman and CEO. Media, advertising and",
    "fullDescription": "Private equity investor, board director and advisor in media and marketing services, including Screenvision Cinema Network, where he actively ran the company as President, Chairman and CEO. Media, advertising and marketing executive in senior level positions at Procter & Gamble, International Playtex, Mattel, J. Walter Thompson, and E. & J. Gallo. BS in BA, Boston University. Former Chairman of the Boston University National Alumni Council. Listed in Who’s Who in America and Who’s Who in Finance and Industry."
  },
  {
    "id": 13,
    "name": "JIM LEWIS",
    "title": "MANAGING DIRECTOR",
    "image": "/JIM LEWIS.png",
    "shortDescription": "30+ years in large multinational corporations, midsized manufacturing companies, and startups. Founded, operated and sold a startup company to a large multinational in the regulatory compliance",
    "fullDescription": "30+ years in large multinational corporations, midsized manufacturing companies, and startups. Founded, operated and sold a startup company to a large multinational in the regulatory compliance testing and certification industry. Created partnerships with Verizon, AT&T, Underwriters Laboratories, and many others. Have a broad understanding of the software, wireless, telecommunications, medical, test & measurement, and consumer products industries. Specialties include: Sales & Marketing, Management, Executive Leadership, Angel Investing, Fund/Capital Raising. BA Connecticut College."
  },
  {
    "id": 14,
    "name": "PAUL MANSOUR",
    "title": "MANAGING DIRECTOR",
    "image": "/PAUL MANSOUR.jpg",
    "shortDescription": "Paul Mansour has served at financial institutions (MBIA, Conning Asset Management) for more than 35 years as head of business units for credit research analysis, business development, marketing, and investment",
    "fullDescription": "Paul Mansour has served at financial institutions (MBIA, Conning Asset Management) for more than 35 years as head of business units for credit research analysis, business development, marketing, and investment policy, focusing on municipal credit markets. He holds a BA in economics from Colgate University and an MBA from Pace University."
  },
  {
    "id": 15,
    "name": "LARRY MARKIN",
    "title": "MANAGING DIRECTOR",
    "image": "/LARRY MARKIN.jpg",
    "shortDescription": "Entrepreneur, Former Owner and President of Sherman Plastics Corporation. Over 40 Years in the Plastic Industry. Expertise in sales, management, and manufacturing. Sherman Plastics Corporation is a four-time",
    "fullDescription": "Entrepreneur, Former Owner and President of Sherman Plastics Corporation. Over 40 Years in the Plastic Industry. Expertise in sales, management, and manufacturing. Sherman Plastics Corporation is a four-time Illinois recycling grant recipient and a leader in recycling and distributing plastic resins and compounds."
  },
  /*{
    "id": 16,
    "name": "JIM MCPARTLAN",
    "title": "MANAGING DIRECTOR",
    "image": "/JIM MCPARTLAN.png",
    "shortDescription": "Global Investment Banker, Strategic Partner and Trusted Advisor with a proven international track record of success in creating and executing Board-mandated initiatives and strategic visions by ???  addressing market complexity.",
    "fullDescription": "Global Investment Banker, Strategic Partner and Trusted Advisor with a proven international track record of success in creating and executing Board-mandated initiatives and strategic visions by addressing market complexity recycling grant recipient and a leader in recycling and distributing plastic resins and compounds."
  },*/
  {
    "id": 17,
    "name": "HOWARD MEITINER",
    "title": "MANAGING DIRECTOR",
    "image": "/HOWARD MEITINER.jpg",
    "shortDescription": "Multi-faceted President/CEO in retail, consumer marketing and healthcare fields, with both domestic and international experience related to business development, organizational turnarounds, start",
    "fullDescription": "Multi-faceted President/CEO in retail, consumer marketing and healthcare fields, with both domestic and international experience related to business development, organizational turnarounds, start-ups and leadership assessment. Specialist in crisis management, development of growth strategies and market evaluation/analysis. Former senior executive with Duty Free Shoppers, Sephora and Phoenix House."
  },
  {
    "id": 18,
    "name": "VICKI MUNSEL",
    "title": "MANAGING DIRECTOR",
    "image": "/VICKI MUNSEL.png",
    "shortDescription": "Retired Managing Director of Deutsche Bank with responsibility for US leveraged and structured finance credit group. Various other positions were at Bankers Trust before its acquisition by Deutsche Bank.",
    "fullDescription": "Retired Managing Director of Deutsche Bank with responsibility for US leveraged and structured finance credit group. Various other positions were at Bankers Trust before its acquisition by Deutsche Bank. BA, Trinity College."
  },
  {
    "id": 19,
    "name": "SCOTT B. REARDON",
    "title": "MANAGING DIRECTOR",
    "image": "/SCOTT B. REARDON.jpg",
    "shortDescription": "Venture capital and private equity investor in early stage companies specializing in information technology and communications, notably wireless communications, web and Internet protocol",
    "fullDescription": "Venture capital and private equity investor in early stage companies specializing in information technology and communications, notably wireless communications, web and Internet protocol services and SAAS as Founder and General Partner of Dakota Ventures LLC. Chairman of Deutsche Bank Microcredit Development Fund. Former President and CEO of Dakon, Inc., distributor of consumer, agricultural and industrial products. BA Georgetown, MBA American University."
  },
  {
    "id": 20,
    "name": "ALLAN B. RUCHMAN",
    "title": "MANAGING DIRECTOR",
    "image": "/ALLAN B. RUCHMAN.jpg",
    "shortDescription": "Private Equity investor in real estate and growth capital companies. Extensive merger, acquisition and restructuring experience with consumer, retailing and general manufacturing industries",
    "fullDescription": "Private Equity investor in real estate and growth capital companies. Extensive merger, acquisition and restructuring experience with consumer, retailing and general manufacturing industries as senior investment banker at Bank of America, Bear Stearns and Credit Suisse/First Boston. BA Williams, MBA Wharton/Univ. of Penn."
  },
  {
    "id": 21,
    "name": "MARK RUCHMAN",
    "title": "MANAGING DIRECTOR",
    "image": "/MARK RUCHMAN.jpg",
    "shortDescription": "Mark Ruchman MD is an ophthalmologist specializing in reconstructive oculoplastic surgery. He has over 30 years’ experience in managed care with particular emphasis on policy development,",
    "fullDescription": "Mark Ruchman MD is an ophthalmologist specializing in reconstructive oculoplastic surgery. He has over 30 years’ experience in managed care with particular emphasis on policy development, technology assessment, utilization management and quality improvement. He was a founding partner of a large multi-unit eyecare practice and led successful efforts to achieve first ever accreditation from the Accreditation Association of Ambulatory Health Care ( AAAHC). He has experience as Chief Medical Officer of a private equity backed nationwide managed vision company. Currently, he oversees eyecare for a major insurance company sponsoring corporate employee benefit plans. He is a recipient of The Honor Award of the American Academy of Ophthalmology in recognition of his contributions to professional education and is a former Director of The International Eye Foundation. He is a Life Fellow of The American Academy of Ophthalmology and an member of The American Society of Ophthalmic Plastic and Reconstructive Surgery. He graduated from Williams College magna cum laude where he was elected to Phi Beta Kappa. He received his medical degree from Yale University."
  },
  {
    "id": 22,
    "name": "STEVE SEAGRIFF",
    "title": "MANAGING DIRECTOR",
    "image": "/STEVE SEAGRIFF.jpg",
    "shortDescription": "Former senior financial services executive with background in both domestic and international lease and project financing, managing equity investments for Philip Morris Capital, a subsidiary of a large",
    "fullDescription": "Former senior financial services executive with background in both domestic and international lease and project financing, managing equity investments for Philip Morris Capital, a subsidiary of a large multinational company."
  },
  {
    "id": 23,
    "name": "LEON SHAPIRO",
    "title": "MANAGING DIRECTOR",
    "image": "/LEON SHAPIRO.jpg",
    "shortDescription": "CEO, Board member, investor and executive leader with a broad background in leading and managing subscription based membership businesses. Former Chairman and CEO at Vistage a Private",
    "fullDescription": "CEO, Board member, investor and executive leader with a broad background in leading and managing subscription based membership businesses. Former Chairman and CEO at Vistage a Private Equity acquired company. Sold in 2018. Served as a Director at The Advisory Board Company (NASDAQ listed) sold in 2017 for $2.5B. Board member and strategic advisor at venture backed businesses and not-for profit boards. Experience in leading and managing several businesses, including President, Executive Programs at Gartner (NYSE) and SVP at Warner Music Group. Coauthored book “The Power of Peers”. BA Hebrew University of Jerusalem."
  },
  {
    "id": 24,
    "name": "HOWARD K. WEBER",
    "title": "MANAGING DIRECTOR",
    "image": "/HOWARD K. WEBER.jpg",
    "shortDescription": "Former senior financial services executive with experience in asset based financing and other tax related structures. Developed and marketed a computer model to analyze tax oriented leasing transactions",
    "fullDescription": "Former senior financial services executive with experience in asset based financing and other tax related structures. Developed and marketed a computer model to analyze tax oriented leasing transactions. Managed leasing portfolio for a major bank. Placed equity investments in various lease transactions (Aircraft, rail, trucks, heavy equipment, etc.) with banks and corporate investors. Positions with Chase Manhattan Bank, Bankers Trust, Lehman Brothers, and Dresdner Bank.BS Manhattan College, MBA Rutgers University."
  },
  {
    "id": 25,
    "name": "STEPHEN S. YOUNG",
    "title": "MANAGING DIRECTOR",
    "image": "/STEPHEN S. YOUNG.jpg",
    "shortDescription": "International lawyer, business developer and executive leader with a broad background in technology, finance and international business operations. Experience in government, Fortune 100",
    "fullDescription": "International lawyer, business developer and executive leader with a broad background in technology, finance and international business operations. Experience in government, Fortune 100 companies, and entrepreneurial start-ups. Founded a business development company after progressively more responsible legal, operating and international positions with United Technologies and Praxair, including CEO of public company in India and Energy Services in U.S. Former Navy nuclear submarine officer. Serves on boards of several technology and not for profit companies, including advanced aircondtioning and energy technologies, new business incubators-accelerators, and aviation museum. BA UC Berkeley, MBA Rensselaer Polytechnic, JD University of Connecticut. Private Pilot."
  },
  {
    "id": 26,
    "name": "MICHAEL P. ZARRILLI",
    "title": "MANAGING DIRECTOR",
    "image": "/MICHAEL P. ZARRILLI.jpg",
    "shortDescription": "Michael P. Zarrilli has extensive experience and expertise in Finance and Investments. He spent 32 years with JP Morgan and predecessors in multiple managerial and transactional roles involving all aspects of fixed",
    "fullDescription": "Michael P. Zarrilli has extensive experience and expertise in Finance and Investments. He spent 32 years with JP Morgan and predecessors in multiple managerial and transactional roles involving all aspects of fixed income including bonds, lending, bankruptcy, CLO’s and Structured Credit. For 12 years, he was Investment Committee member and COO for KLS Diversified Asset Management LP, which was a $4 billion fixed income hedge fund with global clients investing in rates, credit and structured credit markets. He serves on several Investment Committees, including WPI and Telluride Mountain Village Owners Association."
  }
  
];

const Members = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-black mb-8">Our Members</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;