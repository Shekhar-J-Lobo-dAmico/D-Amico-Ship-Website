import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobServices {
  public jobList:any[]=[
    {
      'pos':'MARINE SUPERINTENDENT FOR HSQE AND VETTING ASSURANCE',
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
      'pos':'ASSISTANT TO MARINE SUPERINTENDENT FOR SQE AND VETTING TASKS AT SHIP MANNING COMPANY',
      'location':'Mumbai',
      'department':'Marine',
      'exp':'Minimum 1 year',
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
      'pos':'FLEET PERFORMANCE ANALYST',
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
    },{
      'pos':'SHIP DATA ANALYST',
      'location':'Mumbai',
      'department':'Fleet Performance Monitoring Department',
      'atr':'The Ship Data Analyst will play a key role in monitoring and validating vessel technical data, ensuring compliance with international regulations, and supporting the company’s sustainability and energy efficiency goals. This position involves managing vessel reports, analysing technical and operational data, and preparing regulatory submissions for emissions compliance.',
      'req':'• Basic knowledge of shipping operations, technical parameters and ship data collection (Noon Reports).\n'+
          '• Strong computer literacy with advanced proficiency in Excel, PowerPoint, Power BI and Share Point.\n'+
          '• Excellent attention to detail and accuracy in data handling.\n'+
          '• Strong organizational skills and ability to work independently as well as in a team environment.\n'+
          '• Comfortable handling confidential data with integrity.\n'+
          '• Good interpersonal and communication skills.',
      'jd':'1. Data Validation & Reporting\n'+
          '• Review and validate Daily Noon and other Event Reports submitted by vessels in the company database through company proprietary tool.\n'+
          '• Communicate with vessels to correct discrepancies and follow up on missing reports or documents.\n'+
          '2. Document Management\n'+
          '• Verify and upload Deck & Engine Logbooks, Bunker Delivery Notes, Bills of Lading, Bunker Survey and other relevant reports to the SharePoint library.\n'+
          '• Maintain records for Statement of Compliance (IMO DCS) and Document of Compliance (EU MRV).\n'+
          '3. Regulatory Compliance\n'+
          '• Prepare and submit emission reports for EU MRV-ETS, FuelEU and IMO DCS requirements.\n'+
          '• Monitor monthly Carbon Intensity Indicator (CII) ratings using company software.\n'+
          '4. Data Analysis & Insights\n'+
          '• Generate periodical and annual operation data reports for internal stakeholders and external audits.\n'+
          '• Support technical teams with data-driven insights for operational improvements.\n'+
          '5. Training & Support\n'+
          '• Conduct training sessions for Masters, Chief Engineers, and Officers on data reporting and compliance processes.\n'+
          '6. Tools & Technology\n'+
          '• Utilize weather analysis tools for weather validation.\n'+
          '• Ensure accurate and timely data entry and reporting across systems.'
    },{
      'pos':'VOYAGE DATA ANALYST',
      'location':'Mumbai',
      'exp':'1–3 years of experience in same/ similar role within the maritime industry',
      'atr':'We are seeking a detail-oriented and analytical Voyage Data Analyst with experience in the maritime industry to support our fleet performance monitoring team. The ideal candidate will be responsible for collecting, analysing, and interpreting voyage-related data to ensure regulatory compliance, generate actionable insights, and support strategic decision-making across the fleet.',
      'req':'• 1–3 years of experience in same/ similar role within the maritime industry\n'+
            '• Strong analytical and problem-solving skills with attention to detail\n'+
            '• Proficiency in Microsoft Office Suite (Excel, Word, Outlook); experience with data visualization tools is a plus\n'+
            '• Excellent communication skills in English, both written and verbal\n'+
            '• Ability to work effectively in a multinational, interdisciplinary, and remote team setup\n'+
            '• Familiarity with maritime regulations, and vessel operations is an added advantage',
      'jd':'• Collect, clean, and validate voyage data from vessels, onboard systems, and shore-based sources.\n'+
          '• Monitor vessel performance metrics such as fuel consumption, speed, weather data, ship routing etc\n'+
          '• Generate regular reports and dashboards highlighting key insights and trends\n'+
          '• Collaborate with technical team to identify performance / data quality improvement opportunities\n'+
          '• Ensure data accuracy and consistency across systems and reports\n'+
          '• Support compliance with environmental and regulatory standards (e.g., IMO DCS, EU MRV, EU ETS, Fuel EU Maritime, ESG etc)\n'+
          '• Assist in the implementation of data quality standards and best practices across the fleet'
    },{
      'pos':'DOCUMENTATION ASSISTANT',
      'location':'Mumbai',
      'department':'Documentation ',
      'exp':'Graduate or experience 1-2yrs in similar profile',
      'atr':'We are currently looking for Documentation Assistant (Crewing), Mumbai Office.',
      'req':'Graduate or experience 1-2yrs in similar profile.\n'+
            '– proficiency in computers specially Word/ Excel / Power Point with proficient typing speed\n'+
            '– Excellent Communication Skills.\n'+
            '– Must be able to work in a team based environment.\n'+
            '– Candidate with relevant experience can also apply',
      'jd':'• Document Preparation: Create and process essential documents align with company procedure\n'+
          '• Compliance & Accuracy: Verify all documentation for compliance with international and regional regulations.\n'+
          '• Stakeholder Coordination: Liaise with agencies/master/flag state application for any docs required\n'+
          '• Record Management: Maintain meticulous, organized, and secure upload in our system\n'+
          '• Communication: Provide updates on crew documents status, respond to inquiries, and resolve documentation issues promptly.'
    },{
      'pos':'ICT SUPPORT',
      'location':'Mumbai',
      'department':'IT',
      'exp':'Freshers to 6 years’ experience candidate',
      'atr':'IT support/IT engineers /IT administrators /IT helpdesk , Maritime background will be an advantage',
      'req':'Candidate will be part of Daily ICT support Team to provide technical support for users of IT infrastructure and communications on the vessels worldwide.\n'+
          'Candidate will response queries from users via telephone, email, chat room or instant message, by remote and identify technical problems and possible solutions, then compile reports about this, as well as enter information into databases and liaise with colleagues in the rectification of common problems.\n'+
          'Candidates maintain close communication with users and update them on the progress of the Vessel IT tasks.\n'+
          'Candidate will be involved in installation/upgrade of hardware installations on board the d’Amico Vessels which will offer you multi-cultural and demanding global environment.\n'+
          'Candidate must expect to have both day and night duties due to rolling duty roster\n'+
          'Marine background would be an advantage',
      'jd':'The incumbent will be responsible for end-user support troubleshooting and support of any hardware and software issues via email/calls as well as being involved in the implementation or upgrade projects.\n'+
          '• Responsible for providing IT helpdesk support to end users on IT hardware and software problems, and support on IT Infrastructure and resolve them in a timely manner.\n'+
          '• Provide IT/End-user support (setup and deploy computers, IT equipment, software patches, troubleshooting, etc.)\n'+
          '• IT assets management (computers, IT devices, IT equipment, software, warranties, etc.)\n'+
          '• IT administration (reports, projects, documentations, records, helpdesk tool)'
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

    public singJobList:any[]=[
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
    }
  ];
}
