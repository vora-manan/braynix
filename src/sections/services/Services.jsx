import ContactForm from "components/ContactForm";
import { slideUpAnimation } from "components/motionAnimations";
import { Box, Flex, Heading, Paragraph } from "components/motionComponents";
import ServiceDetailBox from "./ServiceDetailBox";

const services = [
  {
    img: "/images/services/dataAnalytics.png",
    name: "Data Analytics",
    detail: `We provide analytical solutions with an optimum combination of artificial intelligence along with human acumen. With our prime design methodology, research expertise, data engineering and automation, we are supporting businesses to unlock the door to greater opportunities and to expand and distinguish themselves over rapid competition. By bringing context and data together, we empower firms to turn their raw market data into actionable information for significant business insights.`,
  },
  {
    img: "/images/services/chatbot.png",
    name: "Chatbots",
    detail: ` If you are a rising enterprise or an industry leader, our Chatbot service will help you to connect better with your consumers and advance your business. Whether it is for your website or your app, our Chabot will assist you in all scenarios. It empowers you to proactively assist your customers, support them by answering their queries, and to make sales potential for every website visit. This not only enhances customer engagement but also results in escalation of business and customers’ satisfaction.`,
  },
  {
    imgWidth: ["70%", "70%", "80%", "90%", "100%"],
    img: "/images/services/graphicDesigning.png",
    name: "Graphic Designing",
    detail: `We invest in innovation, ingenuity, imagination and creativity with our technical expertise to achieve the goals of our customers. We understand customer's requirements, aspiration & emotion and support them by make the design accordingly. From supporting businesses by designing banners, flyers, billboards, posters, event cards to empowering businesses by building brand identity by designing logos & business cards, we provide it under one umbrella.`,
  },
  {
    img: "/images/services/webDev.png",
    name: "Web Development",
    detail: `Exhaustive web development solutions for all your digital needs, tailored to meet your requirements. Our developers use the latest technologies to build websites that have responsive user interfaces and focus on delivering a superior user experience for your audience.`,
  },
  {
    img: "/images/services/appDev.png",
    name: "App Development",
    detail: `Intuitive applications for all your mobile needs. Whether it’s for a business, established startup or an individual, we can deliver solutions for both iOS and Android devices, that are responsive and feature-rich, and are built using the latest technologies that ensure a smooth user experience.`,
  },
  {
    img: "/images/services/seo.png",
    name: "SEO & Digital Marketing",
    detail: `Got a great business idea, having a unique product, providing great customer service and having a fantastic website/ app and still didn't get noticed? No need to worry anymore as we are here for you with our SEO service.

We support you by increasing your businesses' visibility in search results on search engines like Google and Bing. We analyse your website's content, tag line, meta descriptions, site images, backend and site architecture etc. and optimise it. We provide state of art strategies that are tailored just for your business and help you to grow without worrying about being noticed.`,
  },
];

const Services = () => {
  return (
    <Box as="main" sx={{ overflow: "hidden" }}>
      <Box as="section" sx={{ width: ["95%", "95%", "95%", "95%", "80%"], mx: "auto" }} data-testid="servicesSection">
        <Flex variant="container.centeredFlexBox">
          <Box sx={{ width: ["80%", "80%", "80%", "80%", "60%"], zIndex: 1 }}>
            <Heading data-testid="heading" variant="sectionHeading" sx={{ textAlign: "center" }} {...slideUpAnimation({})}>Our Services</Heading>
            <Paragraph data-testid="para" variant="sectionPara" sx={{ textAlign: "center" }} {...slideUpAnimation({ delay: .1 })}>Custom tailored to each client's needs we aim to become a one stop solution for all your needs.</Paragraph>
          </Box>
        </Flex>
        <Box my={50}>
          {services.map((service, index) => <ServiceDetailBox key={index} data={service} number={index + 1} />)}
        </Box>
      </Box>
      <ContactForm />
    </Box>
  );
};

export default Services;
