"use client"
import { FloatingWhatsApp } from "react-floating-whatsapp"

const WhatsappBubble = () => {
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="+243819204000"
        accountName="MKTAdvance"
        avatar="/assets/images/assistant.jpg"
        statusMessage="Une touche d'éclat à vos marques"
        chatMessage="Bonjour, comment pouvons-nous vous aider ?"
        placeholder="Entrez votre message..."
        notificationDelay={20}
        notificationSound
      />
    </>
  )
}

export default WhatsappBubble
