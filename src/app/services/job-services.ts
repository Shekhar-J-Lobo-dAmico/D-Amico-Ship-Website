import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobServices {
  public jobList:any[]=[
    {
      'pos':'MARINE SUPERINTENDENT FOR HSSEQ AND VETTING ASSURANCE',
      'location':'Mumbai',
      'department':'HSQE',
      'exp':'Minimum 1 year',
      'atr':'This key position is responsible for the safe, reliable, and environment friendly operations of the fleet vessels assigned to you, leading, and engaging senior ship staff, working collaboratively with other departments and divisions to ensure optimal fleet operations while upholding and driving the values, brand, procedures, and practices of d’Amico Group and our valued Clients.',
      'req':'• Minimum 1 year sailing experience as sea-going Master Mariner in Chemical / Oil / Gas Tankers.\n'+
        '• Preference for the candidates with relevant shore experience of HSQE & Vetting assurance, onboard Internal Audits, Office audits / TMSA.\n'+
        '• Effective communicator with good command of English and good computer literacy.\n'+
        '• Be ready for and capable of frequent travel globally without restrictions.\n'+
        '• Open to work for out of office hours if required.\n'+
        '• Resourceful, meticulous, well-organized and ability to work in a team.\n'+
        '• Possess a mature personality with interpersonal and organizational skills.',
      'jd':'• Ensure vessels are operated in a safe, efficient, reliable, and cost-effective manner, in compliance with Class and Statutory and company’s Safety Management System requirements.\n'+
        '• Follow up of assigned vessels on daily basis regarding HSQE & Vetting assurance matters and other related Marine matters.\n'+
        '• Assist commercial team for Pre & Post fixture vetting clearances.\n'+
        '• Preparing and follow up of assigned vessels for Sire Vetting and External Audits/PSC/Flag State etc, including completing operators’ responses for close out.\n'+
        '• Carryout annual Internal audits and ship Inspections for the assigned vessel.\n'+
        '• Carries out regular vessel visits, including sailing visits, to confirm condition and compliance with company standards.'
    },{
      'pos':'ASSISTANT TO MARINE SUPERINTENDENT FOR SQE and VETTING TASKS AT SHIP MANNING COMPANY',
      'location':'Mumbai',
      'department':'Marine',
      'exp':'Minimum 1 year',
      'jd':'Location: Mumbai Department: HSQE Company overview The d’Amico Group, founded in 1952, is a world leader in maritime transportation in the Dry Cargo and Product Tankers sectors and offering international shipping services relating to the core businesses. it owns a modern and Eco fleet of Dry bulk carriers and Products tankers. With head office in […]'
    },{
      'pos':'TRAVEL EXECUTIVE FOR SHIP MANNING COMPANY',
      'location':'Mumbai',
      'department':'Travel Location',
      'exp':'Minimum 2 years of experience in Shipping industry & similar activities',
      'jd':'• To apply various type of visa of the joiners so as to carry out crew change at various port.\n'+
            '• To arrange visa on arrival for the joiners.\n'+
            '• To coordinate with branch offices to apply various visas.\n'+
            '• To arrange appointments of the joiners with various consulates at various centers.\n'+
            '• To arrange crew change in various ports in India.\n'+
            '• To arrange economical domestic flights for candidates who are attending various courses in Mumbai.\n'+
            '• To arrange transport for the candidate who are traveling from other centers & attending various types of course in mumbai.\n'+
            '• To assist Travel Coordinator to carry crew change\n'+
            '• Major handled visas are USA (C1/D, B1/B2 for Superintendent & Supernumerary) Netherlands, Belgium, France, Uk, Australia, Korea, China, Thailand, Canada Egypt.\n'+
            '• At least 2 years of experience in Shipping industry & similar activities'
    },{
      'pos':'Fleet Performance Analyst',
      'location':'Mumbai',
      'department':'Fleet Performance Monitoring & Decarbonization (FPM&D)',
      'exp':'Atleast 0–3 Years in same / similar role',
      'req':'• Bachelor’s degree in Naval Architecture or Marine Engineering (mandatory), with a strong technical foundation in ship design, propulsion systems, and marine operations.\n'+
        '• Atleast 0–3 years of proven, hands-on experience in vessel performance analysis, preferably in a fleet performance, technical role within the maritime industry.\n'+
        '• Solid understanding of vessel operations, hydrodynamics, and performance monitoring tools.\n'+
        '• Hands-on experience with maritime compliance frameworks such as IMO DCS, EU MRV, SEEMP preparation, Fuel EU Maritime, and ESG reporting.\n'+
        '• Proficiency in Microsoft Office Suite (Excel, Word, Outlook); experience with data visualization tools is a plus',
      'jd':'• Deliver fleet performance analyses and recommendations using in-house and external monitoring systems, along with optimized solutions to enhance operational efficiency.\n'+
        '• Support the d’Amico emission reduction strategy through decarbonization initiatives, energy efficiency improvements, energy-saving devices, and operational enhancements.\n'+
        '• Provide targeted performance insights to Operations, Chartering, and Marine departments to aid decision-making.\n'+
        '• Engage regularly with onboard management to assess performance data, improve data quality, and deliver energy-focused training.\n'+
        '• Ensure vessel data collection complies with regulations (IMO DCS, EU MRV, EU ETS, Fuel EU maritime, ESG, etc.)\n'+
        '• Prepare and maintain SEEMP (Ship Energy Efficiency Management Plan) documentation and Biofouling Management Plans in line with regulatory requirements.\n'+
        '• Conduct energy management assessments aligned with ISO 50001:2018 and support energy-related TMSA audit requirements.\n'+
        '• Assist technical and HSQE teams during external audits (TMSA, Right Ship, Energy Management, etc.)\n'+
        '• Track and report internal KPIs to support strategic decision-making by top management.'
    }
  ];

  public romeJobList:any[]=[
    {
      'rank':'Master',
      'location': ''
    },{
      'rank':'Chief Officer',
      'location': ''
    },{
      'rank':'Chief Engineer',
      'location': ''
    },{
      'rank':'Second Engineer',
      'location': ''
    },{
      'rank':'A B',
      'location': ''
    },{
      'rank':'Pumpman',
      'location': ''
    },{
      'rank':'Chief Cook',
      'location': ''
    }
  ];
}
