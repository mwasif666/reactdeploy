import {
  FaClipboardCheck,
  FaCogs,
  FaLaptopCode,
  FaReact,
  FaRocket,
  FaTools,
  FaUsers,
} from "react-icons/fa";

const landingPageTimeLine = [
  {
    title: "01 / 04",
    cardTitle: (
      <div className="flex items-center">
        {/* <FaReact className="icon-border-bottom" /> */}
        <h1>Grant Access</h1>
      </div>
    ),
    cardSubtitle: <hr className="bg-blue-500 h-1 w-[15%]" />,
    cardDetailedText:
      "Reach out to us via the contact information provided on our website or go to the Licenses Plans and acquire a plan",
  },
  {
    title: "02 / 04",
    cardTitle: (
      <div className="flex items-center">
        {/* <FaLaptopCode className="icon-border-bottom" /> */}
        <h1>Activate License</h1>
      </div>
    ),
    cardSubtitle: <hr className="bg-blue-500 h-1 w-[15%]" />,
    cardDetailedText:
      "After purchasing a license, simply enter the data received into the activator and tap the button to activate.",
  },
  {
    title: "03 / 04",
    cardTitle: (
      <div className="flex items-center">
        {/* <FaRocket className="icon-border-bottom" /> */}
        <h1>Run Software </h1>
      </div>
    ),
    cardSubtitle: <hr className="bg-blue-500 h-1 w-[15%]" />,
    cardDetailedText:
      "After activating your license, you will be sent to your flash wallet and you will be able to transact by following the steps we provide after purchase",
  },
  {
    title: "04 / 04",
    cardTitle: (
      <div className="flex items-center">
        {/* <FaTools className="icon-border-bottom" /> */}
        <h1>Start Sending Flash USDT</h1>
      </div>
    ),
    cardSubtitle: <hr className="bg-blue-500 h-1 w-[15%]" />,
    cardDetailedText:
      "Follow the software intuitive interface. Insert your destination wallet, specify the amount you want to send, and complete the transaction.",
  },
];

const servicePageTimeLine = [
  {
    title: "01 / 07",
    cardTitle: (
      <div className="flex items-center">
        <FaReact className="icon-border-bottom" />
        <h1>Business Analysis</h1>
      </div>
    ),
    cardSubtitle: <hr className="bg-blue-500 h-1 w-[15%]" />,
    cardDetailedText:
      "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
  },
  {
    title: "02 / 07",
    cardTitle: (
      <div className="flex items-center">
        <FaLaptopCode className="icon-border-bottom" />
        <h1>Architecture</h1>
      </div>
    ),
    cardSubtitle: <hr className="bg-blue-500 h-1 w-[15%]" />,
    cardDetailedText:
      "Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.",
  },
  {
    title: "03 / 07",
    cardTitle: (
      <div className="flex items-center">
        <FaRocket className="icon-border-bottom" />
        <h1>UI & UX Design</h1>
      </div>
    ),
    cardSubtitle: <hr className="bg-blue-500 h-1 w-[15%]" />,
    cardDetailedText:
      "Developing end-to-end solutions with a focus on feasibility assessment, architecture design, and agile processes to ensure rapid, high-quality delivery.",
  },
  {
    title: "04 / 07",
    cardTitle: (
      <div className="flex items-center">
        <FaTools className="icon-border-bottom" />
        <h1>Frontend Development</h1>
      </div>
    ),
    cardSubtitle: <hr className="bg-blue-500 h-1 w-[15%]" />,
    cardDetailedText:
      "Ensuring a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.",
  },
  {
    title: "05 / 07",
    cardTitle: (
      <div className="flex items-center">
        <FaCogs className="icon-border-bottom" />
        <h1>Backend Development</h1>
      </div>
    ),
    cardSubtitle: <hr className="bg-blue-500 h-1 w-[15%]" />,
    cardDetailedText:
      "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
  },
  {
    title: "06 / 08",
    cardTitle: (
      <div className="flex items-center">
        <FaClipboardCheck className="icon-border-bottom" />
        <h1>Testing</h1>
      </div>
    ),
    cardSubtitle: <hr className="bg-blue-500 h-1 w-[15%]" />,
    cardDetailedText:
      "Providing ongoing support and enhancements to ensure continued product success.",
  },
  {
    title: "07 / 08",
    cardTitle: (
      <div className="flex items-center">
        <FaRocket className="icon-border-bottom" />
        <h1>Deployment & Beyond</h1>
      </div>
    ),
    cardSubtitle: <hr className="bg-blue-500 h-1 w-[15%]" />,
    cardDetailedText:
      "The final solution is deployed with thorough documentation and monitoring, optimized for continuous improvement and long-term viability.",
  },
  {
    title: "08 / 08",
    cardTitle: (
      <div className="flex items-center">
        <FaUsers className="icon-border-bottom" />
        <h1>Support & Maintenance</h1>
      </div>
    ),
    cardSubtitle: <hr className="bg-blue-500 h-1 w-[15%]" />,
    cardDetailedText:
      "After deployment, Cubix provides comprehensive maintenance and responsive support to guarantee lasting project success.",
  },
];

export const timeLineDataFilter = (type) => {
  switch (type) {
    case "":
      return landingPageTimeLine;
    case "/service":
      return servicePageTimeLine;
    default:
      return landingPageTimeLine;
  }
};
