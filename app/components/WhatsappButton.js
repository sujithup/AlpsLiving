import Image from "next/image";

const WhatsAppButton = ({ phoneNumber }) => {
    const whatsappLink = `https://api.whatsapp.com/send?phone=9108138245`;
  
    return (
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" className="whatsappButton">
        <Image src="/whatsapp.png" alt="chat on whatsapp" width="50" height="50"/>
      </a>
    );
  };
  
  export default WhatsAppButton;