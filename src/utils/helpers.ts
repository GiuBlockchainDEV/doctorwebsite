export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const handlePhoneCall = (phoneNumber: string) => {
  window.location.href = `tel:${phoneNumber}`
}

export const handleWhatsApp = (phoneNumber: string) => {
  window.open(`https://wa.me/${phoneNumber.replace(/\s+/g, '')}`, '_blank')
}