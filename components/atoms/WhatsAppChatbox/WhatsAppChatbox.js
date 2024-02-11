import LadIcon from "components/atoms/LadIcon";

import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
/**
 * Render the Chatbox component.
 *
 * @author LonelyAstronautDesigns
 * @return {Element} The Chatbox component.
 */
export default function WhatsAppChatbox() {
  return (
    <>
      <div className="z-30">
        <WhatsAppWidget
          CompanyIcon={LadIcon}
          phoneNumber="14692856355"
          companyName="Sean"
          replyTimeText="Typically replies within minutes"
          message="If you do not have WhatsApp, you will be prompted to download for free."
          sendButtonText="Chat in WhatsApp"
        />
      </div>
    </>
  );
}
