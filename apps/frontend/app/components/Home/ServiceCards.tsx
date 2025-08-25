import { ServiceCard } from "./ServiceCard";

const ServiceCards = () => {
  const services = [
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-orange-500"
        >
          {" "}
          <path
            d="M8.99996 23.66L20.54 9.90997H15V0.159973L3.45996 13.91H8.99996V23.66Z"
            fill="currentColor"
          />{" "}
        </svg>
      ),
      title: "Zap",
      description: "Automated workflows",
      href: "/zap/dashboard",
      working: true,
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-orange-500"
        >
          {" "}
          <path
            d="M12 2.9978H21.0022V7.49897H12V2.9978Z"
            fill="currentColor"
          />{" "}
          <path
            d="M12 7.49897L2.99756 7.4989V12.0001H11.9997L12 7.49897Z"
            fill="currentColor"
          />{" "}
          <path
            d="M11.9997 12.0001L21.0022 12V16.5012H12L11.9997 12.0001Z"
            fill="currentColor"
          />{" "}
          <path
            d="M2.99756 16.5011L12 16.5012L11.9997 21.0023H2.99756V16.5011Z"
            fill="currentColor"
          />{" "}
        </svg>
      ),
      title: "Table",
      description: "Automated data",
      href: "/table",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-orange-500"
        >
          {" "}
          <path
            d="M12 2.9978H21.0022V7.49897H12V2.9978Z"
            fill="currentColor"
          />{" "}
          <path
            d="M12 7.49897L2.99756 7.4989V12.0001H11.9997L12 7.49897Z"
            fill="currentColor"
          />{" "}
          <path
            d="M11.9997 12.0001L21.0022 12V16.5012H12L11.9997 12.0001Z"
            fill="currentColor"
          />{" "}
          <path
            d="M2.99756 16.5011L12 16.5012L11.9997 21.0023H2.99756V16.5011Z"
            fill="currentColor"
          />{" "}
        </svg>
      ),
      title: "Interface",
      description: "Apps, forms, and pages",
      href: "/interface",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-orange-500"
        >
          {" "}
          <path d="M6.99999 2H2V6.99999H6.99999V2Z" fill="currentColor" />{" "}
          <path d="M21.9997 12H2.00049V17H21.9997V12Z" fill="currentColor" />{" "}
          <path
            d="M21.9997 12L7 12L6.99999 6.99999L12 7V2H22L21.9997 12Z"
            fill="currentColor"
          />{" "}
          <path
            d="M6.99951 22V17H11.9995L6.99951 22Z"
            fill="currentColor"
          />{" "}
        </svg>
      ),
      title: "Chatbot",
      description: "AI-powered chatbot",
      href: "/chatbot",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-orange-500"
        >
          {" "}
          <path d="M21 3H3V7.5H16.5V21H21V3Z" fill="currentColor" />{" "}
          <path
            d="M14.2498 11.9999C14.2498 13.2426 13.2424 14.25 11.9998 14.25C10.7572 14.25 9.74981 13.2426 9.74981 11.9999C9.74981 10.7573 10.7572 9.74993 11.9998 9.74993C13.2424 9.74993 14.2498 10.7573 14.2498 11.9999Z"
            fill="currentColor"
          />{" "}
          <path
            d="M9.74981 16.5001C9.74981 17.7427 8.74245 18.7501 7.49981 18.7501C6.25717 18.7501 5.24981 17.7427 5.24981 16.5001C5.24981 15.2574 6.25717 14.2501 7.49981 14.2501C8.74245 14.2501 9.74981 15.2574 9.74981 16.5001Z"
            fill="currentColor"
          />{" "}
        </svg>
      ),
      title: "Canvas",
      description: "Process visualization",
      href: "/canvas",
    },
  ];

  return (
    <div className="w-full max-w-4xl px-2">
      {/* Mobile: stack vertically, Tablet+: wrap in row */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center">
        {services.map((service, index) => (
         <ServiceCard
         key={index}
         working={service.working}
         icon={service.icon} // ✅ use the actual icon
         title={service.title}
         description={service.description}
         href={service.href}
       />
       
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
