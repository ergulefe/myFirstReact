import React from 'react'

export const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src="https://praxisexperten.com/Praxisexperten-Banner-2-min.jpg" alt="" className='w-full h-full object-cover'/>
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[30%] w-full md:-[50%] max-w-[800px] h-full flex flex-col text-[#004763] p-4'>
                <h1 className='text-[24px] font-bold '>Praxisexperten</h1>
                <h2 className='text-[24px] py-4 font-bold'>Beratung für Arztpraxen auf Augenhöhe</h2>
                <p className='text-[#1f2937] text-[14px] py-4 font-[200]'>Die Praxisexperten ist ein Unternehmen, dass sich auf Beratung von Ärzten und Praxisgeschäftsführern spezialisiert hat. 
                    Das Team besteht aus hochqualifizierten Fachkräften, die Erfahrung aus der ärztlichen Praxis mitbringen.<br/><br/>
                    Wir bieten Ihnen umfassende Beratungsleistungen für Arztpraxen. Neben der Analyse von Problemen im Bereich der Praxisgestaltung 
                    oder -organisation unterstützen wir unsere Kunden auch beim Aufbau von neuen Praxissitzen oder beim Umbau bereits existierender 
                    Praxisorganisationen. Darüber hinaus bieten wir Digitalisierungslösungen, die exakt auf die Bedürfnisse einer modernen Arztpraxis 
                    angepasst sind. Wir helfen Ihnen dabei, den Patienten wieder in den Mittelpunkt des ärztlichen Handelns zu stellen.</p>
            </div>
        </div>
    </div>

  )
}

export default Hero;
