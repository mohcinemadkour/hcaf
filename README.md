# Healthcare-Analytics-Framework
Healthcare Analytics Framework (HCAF) is an interdisciplinary engagement Framework (methodologies and roadmap). The Framework has five tightly coupled pillars, Health Science, Social Science, Information Science, Technology Science, and Management Science. HCAF aims to develop an integrated healthcare analytical solutions that provides the following: 
  - A Hub for collecting data from different sources and provide high Interoperability abstract layer
  - A communication bridge among stakeholders to deliver effective healthcare solution; 
  - A roadmap of Requirements translation from Healthcare to Informatics
  - A top-down solution blueprint for bottom-up implementation; 

# Healthcare data hub
Healthcare data come from different sources and can generate large amounts of data:
- Health information exchange (HIE)
- Electronic health records system (EHR)
- Practice management system (PMS)
- Medical claims.
- Pharmacy systems
- Other sources ...

The messages of this sources typically require some forms of modifications in order to be processed with data of another system. Using Mirth connect, we dissect large healthcare messages and locate the sections/items of interest. We also convert those messages into other formats for storage and analysis.

## Supported Data types

The Healthcare data hub primarily focus on the following data types:

- HL7 (Health Level Seven) version 2 messages
- CDA (Clinical Data Architecture)/CDD (Continuity of Care Document)
- DICOM (Digital Imaging and Communications in Medicine)
- CSV (comma-separated variable)

HL7 version 2 messages define both a message format and communication protocol for health information. They are broken into different message types depending on the information that they transmit. There are many message types available, such as ordering labs, prescription dispensing, billing, and more. Typically, HL7 messages are formatted as delimited data, where the delimiters are defined in the top line message called the MSG segment. Mirth Connect can parse these messages and communicate using the standard HL7 network protocol.

CCD documents, on the other hand, were defined to give the patient a complete snapshot of their medical record. These documents are formatted in XML and use coding systems for procedures, diagnosis, prescriptions, and lab orders. In addition, they contain patient demographics, information about patient vital signs, and an ever-expanding list of other available patient information.

The CSV type is used to identify not just comma-delimited data types but also data types with other delimiters in use. This data type is commonly used to send datasets from many different industries, including healthcare.

Finally, DICOM is a standard used for medical imaging. This format is used for many different medical purposes such as x-rays, ultrasound, CT scans, MRI results, and more. These files can contain both image files as well as text results and details about the test. For many medical imaging tests, the image files can be quite large as they must contain very detailed information. The storage of these large files—in addition to the processing of the reporting data contained in the files - requires the ability to scale both storage and compute capacity. 

# Background
Health Industry is “Data-Rich - but Information-Poor”, per academic scholar Peter Bernus and Ovidiu Noran from Griffith University, and has estimated over 100s of petabytes of patient case-data in the USA alone and growing, which has not been used properly to understand the historical perspectives of diseases, diagnoses and treatments. Moreover, most of our healthcare organizations don’t have a correct understanding of human-care insights, due to HealthIT challenge, and that is why healthcare is becoming more expansive financially with human-loses.  To find solutions to help HealthIT challenges, I have researched on some of the challenges while converting Health Data to information and knowledge. But, much further research is needed. Doing so, I have been working on a framework, HCIF, that can help to utilize Silo health systems, Data-Rich, to produce ARTS (Accurate, Reliable, Timely and Secure) self-service solutions, Information-Rich.
