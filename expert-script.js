const questions = [
  {
    question: "Is your business supervised by an Insurance Company?", //0
    options: [
      { text: "Yes", nextIndex: 1 },
      { text: "No", nextIndex: 1 },
    ],
  },
  {
    question: "Does your business deal with the Securities and Exchange Commission?", //1
    options: [
      { text: "Yes", nextIndex: 4 },
      { text: "No", nextIndex: 2 },
    ],
  },
  {
    question: "Is your business a Designated Non-Financial Business or Profession (e.g., jewelry dealer, lawyer, accountant)?", //2
    options: [
      { text: "Yes", nextIndex: 3 },
      { text: "No", nextIndex: 22 },
    ],
  },
  {
    question: "Are you dealing with a transaction that is over PHP 500,000 OR seems suspicious?", //3
    options: [
      { text: "Yes", nextIndex: 4 },
      { text: "No", nextIndex: 23 },
    ],
  },
  {
    question: "Is this a high-value transaction or a wire transfer?", //4
    options: [
      { text: "Yes", nextIndex: 5 },
      { text: "No", nextIndex: 25 },
    ],
  },{
    question:
      "Is the client considered high-risk (e.g., a Politically Exposed Person (PEP), from a country with inadequate AML standards, or part of a complex business structure) as defined in Rules 3.b.2 and 9.a.9.b?", //5
    options: [
      { text: "Yes", nextIndex: 16 },
      { text: "No", nextIndex: 6 },
    ],
  },
  {
    question: "Is the transaction a 'covered transaction' (over PHP 500,000 within one banking day) OR a 'suspicious transaction' (seems unusual or without clear legal/economic purpose)?", //6
    options: [
      { text: "Yes", nextIndex: 7 },
      { text: "No", nextIndex: 27 },
    ],
  },
  {
    question: "Has a court or the Anti-Money Laundering Council (AMLC) issued an order to freeze assets related to this situation?", //7
    options: [
      { text: "Yes", nextIndex: 8 },
      { text: "No", nextIndex: 29 },
    ],
  },
  {
    question:
      "Has the Anti-Money Laundering Council (AMLC) been authorized by a court to look into bank information related to this situation?", //8
    options: [
      { text: "Yes", nextIndex: 9 },
      { text: "No", nextIndex: 31 },
    ],
  },
  {
    question: "Have any patterns or activities been noticed that seem suspicious or out of the ordinary for the client/transaction?", //9
    options: [
      { text: "Yes", nextIndex: 10 },
      { text: "No", nextIndex: 33 },
    ],
  },
  {
    question: "Are there legal grounds to seize assets involved in this situation (forfeiture)?", //10
    options: [
      { text: "Yes", result: "result8" },
      { text: "No", nextIndex: 11 },
    ],
  },
  {
    question: "If your business is required to keep transaction records, have you failed to keep them for at least five years?", //11
    options: [
      { text: "Yes", result: "penalty_rule14b" },
      { text: "No", nextIndex: 12 },
    ],
  },
  {
    question: "If your business is required to report certain transactions (covered or suspicious) to the AMLC, have you failed to do so within five working days as required by Rule 9.c.1?", //12
    options: [
      { text: "Yes", result: "penalty_rule17_5" },
      { text: "No", nextIndex: 13 },
    ],
  },
  {
    question: "Have you knowingly filed a false or baseless report about a money laundering transaction?", //13
    options: [
      { text: "Yes", result: "penalty_rule14c" },
      { text: "No", nextIndex: 14 },
    ],
  },
  {
    question: "Have you illegally shared information that a report about a suspicious or covered transaction was made, or shared its contents?", //14
    options: [
      { text: "Yes", result: "penalty_rule14d" },
      { text: "No", nextIndex: 15 },
    ],
  },  {
    question: "Have you failed to follow an official order to freeze or preserve assets related to an AMLA investigation?", //15
    options: [
      { text: "Yes", result: "penalty_rule17_3" },
      { text: "No", result: "result7" }, 
    ],
  },
  {
    question: "For this high-risk client, have you implemented enhanced due diligence measures, such as more frequent monitoring?", //16
    options: [
      { text: "Yes", nextIndex: 17 },
      { text: "No", result: "result3" },
    ],
  },
  {
    question: "Have you verified the source of funds and source of wealth for this high-risk client as required by Rule 9.a.9.a?", //17
    options: [
      { text: "Yes", nextIndex: 18 },
      { text: "No", result: "result3" },
    ],
  },
  {
    question: "Have you obtained senior management approval for establishing or continuing the business relationship with this high-risk client as required by Rule 9.a.9.a?", //18
    options: [
      { text: "Yes", nextIndex: 19 },
      { text: "No", result: "result3" },
    ],
  },
  {
    question: "Are there any unusual transaction patterns or red flags with this high-risk client?", //19
    options: [
      { text: "Yes", nextIndex: 20 },
      { text: "No", nextIndex: 21 },
    ],
  },
  {
    question: "Have you filed a Suspicious Transaction Report (STR) for any questionable activities from this high-risk client?", //20
    options: [
      { text: "Yes", nextIndex: 21 },
      { text: "No", result: "penalty_rule17_5" },
    ],
  },
  {
    question: "Do you conduct enhanced ongoing monitoring of the business relationship with high-risk clients as required by Rule 9.a.9.a?", //21
    options: [
      { text: "Yes", result: "result3_enhanced" },
      { text: "No", result: "result3" },
    ],
  },
  {
    question: "Do you have a customer due diligence (CDD) or know-your-customer (KYC) process in place for your clients?", //22
    options: [
      { text: "Yes", nextIndex: 24 },
      { text: "No", result: "result1" },
    ],
  },
  {
    question: "Are all your customer and transaction records organized and maintained for at least 5 years as required by Rule 9.b.1?", //23
    options: [
      { text: "Yes", nextIndex: 24 },
      { text: "No", result: "penalty_rule14b" },
    ],
  },
  {
    question: "Are you aware of your obligations under the Anti-Money Laundering Act for reporting suspicious or unusual transactions?", //24
    options: [
      { text: "Yes", result: "result1_enhanced" },
      { text: "No", result: "result1" },
    ],
  },
  {
    question: "Do you have a transaction monitoring system or process in place?", //25
    options: [
      { text: "Yes", nextIndex: 26 },
      { text: "No", result: "result2" },
    ],
  },
  {
    question: "Have you received adequate training on customer due diligence and risk assessment?", //26
    options: [
      { text: "Yes", result: "result2_enhanced" },
      { text: "No", result: "result2" },
    ],
  },
  {
    question: "Even for transactions under the threshold, do you still apply basic know-your-customer (KYC) principles?", //27
    options: [
      { text: "Yes", nextIndex: 28 },
      { text: "No", result: "result4" },
    ],
  },
  {
    question: "Are you monitoring clients for unusual changes in transaction patterns or behaviors?", //28
    options: [
      { text: "Yes", result: "result4_enhanced" },
      { text: "No", result: "result4" },
    ],
  },
  {
    question: "Do you have regular monitoring procedures in place for your transactions?", //29
    options: [
      { text: "Yes", nextIndex: 30 },
      { text: "No", result: "result5" },
    ],
  },
  {
    question: "Are you updating your risk assessment of clients on a regular basis?", //30
    options: [
      { text: "Yes", result: "result5_enhanced" },
      { text: "No", result: "result5" },
    ],
  },
  {
    question: "Is your staff trained on confidentiality requirements regarding suspicious transaction reports?", //31
    options: [
      { text: "Yes", nextIndex: 32 },
      { text: "No", result: "result6" },
    ],
  },
  {
    question: "Do you have documented procedures for handling potential money laundering cases?", //32
    options: [
      { text: "Yes", result: "result6_enhanced" },
      { text: "No", result: "result6" },
    ],
  },
  {
    question: "Are your AML compliance procedures documented and regularly reviewed?", //33
    options: [
      { text: "Yes", nextIndex: 34 },
      { text: "No", result: "result7" },
    ],
  },
  {
    question: "Do you provide regular training to staff about Anti-Money Laundering requirements?", //34
    options: [
      { text: "Yes", result: "result7_enhanced" },
      { text: "No", result: "result7" },
    ],
  }
];

//results (no penalties yet based on the flowchart actions)
const penalties = {  result1: {
    label: "Not Guilty",
    info: "Good news! Based on your answers, the main rules of the Anti-Money Laundering Act don\'t seem to apply to you right now. Still, it\'s a good idea to keep an eye on these rules, as they might affect your business later on.",
    riskLevel: "low-risk"
  },
  result2: {
    label: "Customer Due Diligence not mandatory, but observe",
    info: "You might not need to do a full Customer Due Diligence (CDD) right now, but it\'s smart to still do basic checks on your customers (Know Your Customer - KYC). Also, watch out for any unusual transactions that you might need to report.",
    riskLevel: "low-risk"
  },
  result3: {
    label: "Apply Enhanced Due Diligence",
    info: "Your situation calls for enhanced due diligence under Rule 9.a.9.a. This means you'll need to: (1) obtain senior management approval for establishing or continuing the business relationship, (2) take reasonable measures to establish the source of wealth and source of funds, and (3) conduct enhanced ongoing monitoring of the business relationship. This requires more thorough checks on client identity, more frequent transaction monitoring, and maintaining detailed records of everything.",
    riskLevel: "medium-risk"
  },
  result4: {
    label: "Requirements may not apply",
    info: "Because of the kinds of transactions you\'re dealing with, the full Anti-Money Laundering Act rules might not apply to you. However, it\'s best to check with a lawyer to be sure about what you need to do.",
    riskLevel: "low-risk"
  },
  result5: {
    label: "Continue monitoring",
    info: "Keep watching your transactions to spot and report anything that looks suspicious. It\'s a good idea to regularly check client accounts and transactions to make sure you\'re following Anti-Money Laundering rules.",
    riskLevel: "medium-risk"
  },
  result6: {
    label: "Maintain Confidentiality",
    info: "It's very important to keep all information about suspicious transaction reports and investigations private. Rule 9.c.4 of the IRR prohibits communicating, directly or indirectly, in any manner or by any means, to any person, entity, or the media, the fact that a covered or suspicious transaction report was made, the contents thereof, or any other information in relation thereto. Breaking confidentiality could result in criminal liability with 3 to 8 years imprisonment and fines of ₱500,000 to ₱1,000,000.",
    riskLevel: "medium-risk"
  },
  result7: {
    label: "End of Assessment",
    info: "Based on your answers, you don\'t need to do anything more at this time. Just keep following the usual Anti-Money Laundering practices that apply to your job or organization.",
    riskLevel: "low-risk"
  },  result8: {
    label: "Initiate Civil/Asset forfeiture",
    info: "It looks like there are grounds for a civil forfeiture case under Rule 12. The Anti-Money Laundering Council (AMLC) is authorized to institute civil forfeiture proceedings through the Office of the Solicitor General for monetary instruments or property related to an unlawful activity or money laundering offense. The court may issue an order of forfeiture in favor of the Government of the Philippines for proceeds of one or more unlawful activities.",
    riskLevel: "medium-risk"
  },
  result3_enhanced: {
    label: "Enhanced Due Diligence - Compliant",
    info: "You've correctly implemented enhanced due diligence measures for your high-risk client. This includes thorough verification of identity, understanding the source of funds, securing senior management approval, conducting regular monitoring, and promptly reporting suspicious activities. Continue this level of scrutiny throughout the business relationship and ensure all documentation is properly maintained.",
    riskLevel: "medium-risk"
  },result1_enhanced: {
    label: "Not Guilty - Proactive Compliance",
    info: "Good news! Based on your answers, the main rules of the Anti-Money Laundering Act don't seem to apply to you right now. You've also demonstrated awareness of your compliance obligations, which is excellent. Continue maintaining your customer records and staying informed about any changes to AML regulations that might affect your business in the future.",
    riskLevel: "low-risk"
  },
  result2_enhanced: {
    label: "Basic Compliance - Well Prepared",
    info: "While full Customer Due Diligence (CDD) may not be mandatory in your current situation, you're taking the right approach by implementing basic Know Your Customer (KYC) procedures and maintaining a transaction monitoring system. Your proactive stance and staff training demonstrate good compliance practices. Continue to document your processes and stay vigilant for any unusual transactions that may require reporting.",
    riskLevel: "low-risk"
  },
  result4_enhanced: {
    label: "Requirements Limited - Vigilant Approach",
    info: "Although the full Anti-Money Laundering Act requirements may not apply to your specific situation, you're demonstrating best practices by implementing basic Know Your Customer (KYC) principles and monitoring for unusual behaviors. This proactive approach helps protect your business and contributes to the broader fight against money laundering. Continue to document your monitoring efforts and stay informed about any regulatory changes.",
    riskLevel: "low-risk"
  },
  result5_enhanced: {
    label: "Ongoing Monitoring - Strong Program",
    info: "You're implementing a robust transaction monitoring program with regular risk assessments, which is excellent. This systematic approach helps you identify and report suspicious activities promptly while ensuring compliance with Anti-Money Laundering regulations. Continue to document your monitoring procedures and consider periodic independent reviews of your compliance program to identify any potential improvements.",
    riskLevel: "medium-risk"
  },
  result6_enhanced: {
    label: "Confidentiality - Well Established",
    info: "You have strong confidentiality measures in place regarding suspicious transaction reports and investigations, which is crucial for compliance. Your documented procedures for handling potential money laundering cases demonstrate a well-established approach to maintaining the integrity of investigations. Continue to regularly train your staff on confidentiality requirements and update your procedures as regulations evolve.",
    riskLevel: "medium-risk"
  },
  result7_enhanced: {
    label: "Compliant Operations - Best Practices",
    info: "Your AML compliance procedures are well documented and regularly reviewed, with appropriate staff training in place. This comprehensive approach to Anti-Money Laundering compliance represents industry best practices. Continue to maintain detailed records of your compliance activities, conduct periodic training for all staff, and stay informed about evolving regulations to ensure ongoing compliance.",
    riskLevel: "low-risk"
  },
  penalty_rule4: {
    label: "Money laundering acts (transacting, facilitating, or failing to report unlawful proceeds)",
    info: "This is about breaking Rule 4 of the Anti-Money Laundering Act\'s Implementing Rules and Regulations (IRR), which defines what money laundering is. Money laundering is committed when: (a) any person knowing that any monetary instrument or property represents, involves, or relates to the proceeds of any unlawful activity, transacts or attempts to transact said monetary instrument or property; (b) any person knowing that any monetary instrument or property involves the proceeds of any unlawful activity, performs or fails to perform any act as a result of which he facilitates the offense of money laundering; or (c) any person knowing that any monetary instrument or property is required to be disclosed and filed with the AMLC, fails to do so. According to Rule 14 of the IRR, the specific penalties are:\n\n*   **For violations under Section 4a:** Imprisonment for seven (7) to fourteen (14) years AND a fine of not less than PHP 3,000,000.00 but not more than twice the value of the monetary instrument or property involved.\n*   **For violations under Section 4b:** Imprisonment for four (4) to seven (7) years AND a fine of not less than PHP 1,500,000.00 but not more than PHP 3,000,000.00.\n*   **For violations under Section 4c:** Imprisonment for six (6) months to four (4) years OR a fine of not less than PHP 100,000.00 but not more than PHP 500,000.00, OR both.",
    riskLevel: "high-risk"
  },
  penalty_rule5: {
    label: "Attempting money laundering; non-reporting of attempted transactions",
    info: "This relates to Rule 5. If you try to launder money, or if you don\'t report an attempt by someone else, you could be fully prosecuted under the Anti-Money Laundering Act (AMLA).",
    riskLevel: "high-risk"
  },
  penalty_rule6: {
    label: "Failure to file charges when probable cause is found; delays in prosecution",
    info: "This is about Rule 6. If there\'s a good reason to believe a crime happened but charges aren\'t filed, or if there are delays in taking legal action, this rule applies. While there isn\'t a specific penalty listed here, it means that criminal proceedings under the Anti-Money Laundering Act (AMLA) will start.",
    riskLevel: "medium-risk"
  },
  penalty_rule11: {
    label: "Refusal by a financial institution or its officers to allow inquiry into a bank account (in terrorism cases)",
    info: "This concerns Rule 11. If a financial institution or its staff refuses to let authorities look into a bank account (especially in terrorism-related cases), they could be fined between ₱100,000 and ₱500,000. They might also face criminal charges.",
    riskLevel: "high-risk"
  },
  penalty_rule14a_1_3: {
    label: "Money laundering violations under Sec. 4(a), 4(b), 4(c)",
    info: "This is about breaking Rules 14.a.1 to 14.a.3. If you violate specific parts of the Anti-Money Laundering Act (Sections 4(a), 4(b), or 4(c)), you could go to prison for 6 months to 14 years. You might also have to pay a fine from ₱100,000 up to double the amount of money involved.",
    riskLevel: "high-risk"
  },
  penalty_rule14a_4: {
    label: "Violations of AMLA, IRR, or AMLC issuances",
    info: "This relates to Rule 14.a.4. If you break any rules of the Anti-Money Laundering Act (AMLA), its Implementing Rules and Regulations (IRR), or any orders from the Anti-Money Laundering Council (AMLC), you could face an administrative fine of ₱100,000 to ₱500,000 for each violation.",
    riskLevel: "high-risk"
  },
  penalty_rule14b: {
    label: "Failure to keep and preserve records",
    info: "This is about Rule 14.b. If you don't keep or save records for at least five years as required under Rule 9.b, you could face 6 months to 1 year in prison or pay a fine between ₱100,000 and ₱500,000.",
    riskLevel: "high-risk"
  },
  penalty_rule14c: {
    label: "Malicious or false reporting",
    info: "This concerns Rule 14.c. If you, with malice or in bad faith, report or file a completely unwarranted or false information relative to money laundering transaction against any person, you could face 6 months to 4 years imprisonment and pay a fine between ₱100,000 and ₱500,000. The law explicitly states that offenders are not entitled to avail the benefits of the Probation Law.",
    riskLevel: "high-risk"
  },
  penalty_rule14d: {
    label: "Breach of confidentiality (unauthorized inquiry/disclosure)",
    info: "This relates to Rule 14.d. If you break confidentiality rules by communicating directly or indirectly, in any manner or by any means, to any person, entity, or the media the fact that a covered or suspicious transaction report was made, the contents thereof, or any other information in relation thereto, you could face 3 to 8 years in prison and pay a fine between ₱500,000 and ₱1,000,000.",
    riskLevel: "high-risk"
  },
  penalty_rule14e: {
    label: "Refusal of public official to testify",
    info: "This is about Rule 14.e. If a public official refuses to testify in a case, they could face 3 to 8 years in prison and pay a fine between ₱500,000 and ₱1,000,000.",
    riskLevel: "high-risk"
  },
  penalty_rule14f: {
    label: "Offenses by juridical person, alien, or public official",
    info: "This concerns Rule 14.f. If a corporation, association, partnership or juridical person commits an offense, the penalty shall be imposed upon the responsible officers who participated in or allowed the commission of the crime. The court may suspend or revoke its license. If the offender is an alien, they shall be deported after serving the penalties. If the offender is a public official, they shall suffer perpetual or temporary absolute disqualification from office, in addition to the penalties.",
    riskLevel: "high-risk"
  },
  penalty_rule16: {
    label: "Causing damage via money laundering",
    info: "This relates to Rule 16 of the Anti-Money Laundering Act\'s Implementing Rules and Regulations (IRR), which is about \'Restitution\'. Rule 16 states: \'Restitution for any aggrieved party shall be governed by the provisions of the New Civil Code.\' \n\nIn simple terms, if money laundering activities cause harm or financial loss to someone, the person responsible for the money laundering will be required to pay for those damages. The specific rules for this compensation are found in the New Civil Code.",
    riskLevel: "medium-risk"
  },
  penalty_rule17_1: {
    label: "Malicious or unauthorized disclosure of AMLA-related reports",
    info: "This situation may fall under rules concerning malicious or unauthorized disclosure of Anti-Money Laundering Act (AMLA)-related reports. If you share such reports improperly, especially to cause harm, it could lead to criminal charges. If this involves \'Malicious Reporting\' as detailed in Rule 14.c of the AMLA\'s Implementing Rules and Regulations (IRR) – which means knowingly reporting or filing completely unwarranted or false information about a money laundering transaction against someone – the penalties are:\n\n*   Imprisonment for six (6) months to four (4) years, AND\n*   A fine of not less than PHP 100,000.00 but not more than PHP 500,000.00.\nIt\'s important to note that offenders are not entitled to the benefits of the Probation Law.",
    riskLevel: "high-risk"
  },
  penalty_rule17_2: {
    label: "Breach of confidentiality",
    info: "This concerns Rule 17.2. If you break confidentiality rules, you could face criminal charges and/or administrative penalties.",
    riskLevel: "low-risk"
  },
  penalty_rule17_3: {
    label: "Failure to comply with freeze or preservation orders",
    info: "This relates to Rule 17.3. If you don\'t follow an official order to freeze assets or keep them safe, you could be charged with obstruction of justice (getting in the way of a legal investigation).",
    riskLevel: "low-risk"
  },
  penalty_rule17_5: {
    label: "Failure to report covered/suspicious transactions",
    info: "This is about Rule 17.5. If you don\'t report transactions that you\'re supposed to (either because they are over a certain amount or look suspicious), you could face criminal penalties under the Anti-Money Laundering Act (AMLA).",
    riskLevel: "medium-risk"
  }
};

// Entity types with associated question indices
const entityTypes = [
  { 
    id: "financial", 
    name: "Financial Institution", 
    description: "Banks, insurance companies, securities dealers, money services businesses, and other financial organizations regulated by BSP, SEC, or IC"
  },
  { 
    id: "dnfbp", 
    name: "Designated Non-Financial Business", 
    description: "Lawyers, accountants, real estate agents, jewelry dealers, casinos, and other non-financial businesses with specific AMLA obligations"
  },
  { 
    id: "corporation", 
    name: "Business/Corporation", 
    description: "General business entities, companies, corporations, partnerships, and other commercial enterprises not in the financial or DNFBP categories"
  },
  { 
    id: "individual", 
    name: "Individual Client/Customer", 
    description: "Natural person acting personally, not representing a business, making personal transactions"
  },
  { 
    id: "self_employed", 
    name: "Self-Employed Individual", 
    description: "Freelancers, sole proprietors, independent contractors, and self-employed professionals (not incorporated)"
  }
];

// Map of entity IDs to appropriate Bootstrap icons
const entityIcons = {
  "financial": "bi-bank", // Bank/financial institution icon
  "dnfbp": "bi-clipboard-check", // Legal/professional services icon
  "corporation": "bi-building", // Building/corporation icon
  "individual": "bi-person", // Person icon
  "self_employed": "bi-briefcase" // Briefcase for self-employed
};

// Question filtering by entity type
const entityQuestionMap = {
  "financial": [0, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 27, 29, 31, 33],
  "dnfbp": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 27, 29, 31, 33], // Skip question 2 which asks if they're a DNFBP
  "corporation": [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 27, 29, 31, 33],
  "individual": [4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 27, 29, 31, 33],
  "self_employed": [4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 27, 29, 31, 33]
};

// Track selected entity
let selectedEntityType = null;

let currentQuestionIndex = 0;
let filteredQuestions = [];

// Function to save state to localStorage
function saveState() {
  localStorage.setItem('selectedEntityType', selectedEntityType);
  localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
  localStorage.setItem('filteredQuestions', JSON.stringify(filteredQuestions));
}

// Function to load state from localStorage
function loadState() {
  const savedEntityType = localStorage.getItem('selectedEntityType');
  const savedQuestionIndex = localStorage.getItem('currentQuestionIndex');
  const savedFilteredQuestions = localStorage.getItem('filteredQuestions');

  if (savedEntityType) {
    selectedEntityType = savedEntityType;
  }
  if (savedQuestionIndex) {
    currentQuestionIndex = parseInt(savedQuestionIndex, 10);
  }
  if (savedFilteredQuestions) {
    filteredQuestions = JSON.parse(savedFilteredQuestions);
  }
}

// Wait for DOM to be loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  const questionElement = document.getElementById("question");
  const questionContainer = document.getElementById("questionContainer");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");
  const penaltyDetailsElement = document.getElementById("penaltyDetails");
  const restartButton = document.getElementById("restart");
    // Load state from localStorage when the page loads
  loadState();

  // Function to handle entity selection
  function selectEntity(entityId) {
    selectedEntityType = entityId;
    
    // Filter questions based on entity type
    filteredQuestions = entityQuestionMap[entityId].map(index => ({
      question: questions[index],
      index: index
    }));
    
    // Save state to localStorage
    saveState();
    
    // Add transition to entity selection container
    const entityContainer = document.getElementById("entitySelectionContainer");
    entityContainer.classList.add("hidden");
    
    // Wait for the transition to complete before showing the question container
    setTimeout(() => {
      // Show question container with a delay for smooth transition
      questionContainer.style.opacity = "0";
      questionContainer.style.transform = "translateY(20px)";
      questionContainer.classList.remove("hidden");
      
      // Force reflow to ensure the transition works
      void questionContainer.offsetWidth;
      
      // Trigger transition
      questionContainer.style.opacity = "1";
      questionContainer.style.transform = "translateY(0)";
      
      // Start from the first filtered question
      currentQuestionIndex = 0;
      displayFilteredQuestion();
    }, 400); // Match this delay with the CSS transition duration
  }
  
  // Create a container for entity selection
  const entitySelectionContainer = document.createElement("div");
  entitySelectionContainer.id = "entitySelectionContainer";
  entitySelectionContainer.className = "questionContainer";
  questionContainer.before(entitySelectionContainer);
  
  // Create entity selection header with explanatory text
  const entityHeader = document.createElement("div");
  entityHeader.className = "question";
  entityHeader.innerHTML = `
    <h2 class="entity-header-title">Please select your entity type</h2>
    <p class="entity-header-description">
      Your selection will determine which Anti-Money Laundering requirements apply to your specific situation.
      Different entities have different obligations under the law.
    </p>
  `;
  entitySelectionContainer.appendChild(entityHeader);
  
  // Create entity type sections
  const createEntitySection = (title) => {
    const sectionHeader = document.createElement("h3");
    sectionHeader.className = "entity-section-header";
    sectionHeader.textContent = title;
    return sectionHeader;
  };
  
  // Add business section header
  entitySelectionContainer.appendChild(createEntitySection("Business Entities"));
  
  // Create entity options container for business entities
  const businessOptionsContainer = document.createElement("div");
  businessOptionsContainer.className = "options";
  entitySelectionContainer.appendChild(businessOptionsContainer);
  
  // Add business entities
  const businessEntities = entityTypes.filter(entity => 
    ["financial", "dnfbp", "corporation"].includes(entity.id)
  );
    businessEntities.forEach(entity => {
    const button = document.createElement("button");
    button.className = "entity-card";
    
    // Get the appropriate icon for this entity
    const iconClass = entityIcons[entity.id];
    
    button.innerHTML = `
      <div class="entity-icon">
        <i class="bi ${iconClass}"></i>
      </div>
      <div class="entity-content">
        <h3>${entity.name}</h3>
        <p>${entity.description}</p>
      </div>
    `;
    
    button.setAttribute("data-entity-id", entity.id);
    button.onclick = () => {
      selectEntity(entity.id);
    };
    businessOptionsContainer.appendChild(button);
  });
  
  // Add individual section header
  entitySelectionContainer.appendChild(createEntitySection("Individual Entities"));
  
  // Create entity options container for individual entities
  const individualOptionsContainer = document.createElement("div");
  individualOptionsContainer.className = "options";
  entitySelectionContainer.appendChild(individualOptionsContainer);
  
  // Add individual entities
  const individualEntities = entityTypes.filter(entity => 
    ["individual", "self_employed"].includes(entity.id)
  );
    individualEntities.forEach(entity => {
    const button = document.createElement("button");
    button.className = "entity-card";
    
    // Get the appropriate icon for this entity
    const iconClass = entityIcons[entity.id];
    
    button.innerHTML = `
      <div class="entity-icon">
        <i class="bi ${iconClass}"></i>
      </div>
      <div class="entity-content">
        <h3>${entity.name}</h3>
        <p>${entity.description}</p>
      </div>
    `;
    
    button.setAttribute("data-entity-id", entity.id);
    button.onclick = () => {
      selectEntity(entity.id);
    };
    individualOptionsContainer.appendChild(button);
  });
  
  // Hide the question container initially
  questionContainer.classList.add("hidden");
  
  // Create speech synthesis utterance
  const speech = new SpeechSynthesisUtterance();
  speech.rate = 0.9; // Slightly slower rate for better understanding
  speech.pitch = 1; // Natural pitch
  speech.volume = 1;
  speech.lang = 'en-US'; // Set language to English

  // Set Microsoft Zira voice when available (mature female voice)
  window.speechSynthesis.addEventListener('voiceschanged', () => {
    const voices = window.speechSynthesis.getVoices();
    const ziraVoice = voices.find(voice => voice.name === 'Microsoft Zira Desktop');
    if (ziraVoice) {
      speech.voice = ziraVoice;
    }
  });

  // Create a container for the options that can be shown/hidden
  const optionsContainer = document.createElement("div");
  optionsContainer.className = "options-container hidden";
  optionsElement.appendChild(optionsContainer);
  
  // Create a speaking icon element
  const speakingIcon = document.createElement("div");
  speakingIcon.className = "speaking-icon";
  speakingIcon.style.display = "none"; // Hidden by default, shown during speech
  speakingIcon.innerHTML = `
    <div class="speaking-wave"></div>
    <div class="speaking-wave"></div>
    <div class="speaking-wave"></div>
    <i class="bi bi-mic-fill"></i>
  `;
  optionsElement.appendChild(speakingIcon);
    function speakText(text) {
    try {
      window.speechSynthesis.cancel(); // Stop any ongoing speech
      
      // Show speaking icon, hide options
      if (speakingIcon) {
        speakingIcon.style.display = "flex";
        
        // Add click event to skip the speech and show options
        speakingIcon.onclick = () => {
          window.speechSynthesis.cancel();
          if (speakingIcon) speakingIcon.style.display = "none";
          if (optionsContainer) optionsContainer.className = "options-container visible";
        };
      }
      
      if (optionsContainer) optionsContainer.className = "options-container hidden";
      
      speech.text = text;
      
      // Set up event handlers for speech
      speech.onend = () => {
        // When speech ends, hide icon and show options
        if (speakingIcon) speakingIcon.style.display = "none";
        if (optionsContainer) optionsContainer.className = "options-container visible";
      };
      
      speech.onerror = () => {
        // In case of error, still show the options
        if (speakingIcon) speakingIcon.style.display = "none";
        if (optionsContainer) optionsContainer.className = "options-container visible";
      };
      
      window.speechSynthesis.speak(speech);
    } catch (error) {
      console.error('Text-to-speech failed:', error);
      // In case of exception, still show the options
      if (speakingIcon) speakingIcon.style.display = "none";
      if (optionsContainer) optionsContainer.className = "options-container visible";
    }
  }function displayFilteredQuestion() {
    if (currentQuestionIndex >= filteredQuestions.length) {
      // No more questions, show a default result
      displayResult("result7"); // End Assessment
      return;
    }
    
    const currentQuestion = filteredQuestions[currentQuestionIndex].question;
    const originalIndex = filteredQuestions[currentQuestionIndex].index;
    
    // Get the selected entity name for display
    const selectedEntity = entityTypes.find(entity => entity.id === selectedEntityType);
    const entityName = selectedEntity ? selectedEntity.name : "";
      questionElement.innerHTML = `
      <div class="question-meta">
        Entity: ${entityName} | Question ${currentQuestionIndex + 1} of ${filteredQuestions.length}
      </div>
      <hr class="question-divider">
      <div style="padding-top: 0.5rem;">${currentQuestion.question}</div>
    `;

    // Clear previous options
    optionsElement.innerHTML = "";
    
    // Create a container for the options that can be shown/hidden
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options-container hidden";
    optionsElement.appendChild(optionsContainer);
      // Create a speaking icon element
    const speakingIcon = document.createElement("div");
    speakingIcon.className = "speaking-icon";
    speakingIcon.innerHTML = `
      <div class="speaking-wave" style="animation-duration: 1.5s;"></div>
      <div class="speaking-wave" style="animation-duration: 1.5s; animation-delay: 0.5s;"></div>
      <div class="speaking-wave" style="animation-duration: 1.5s; animation-delay: 1s;"></div>
      <i class="bi bi-mic-fill" style="font-size: 1.5em;"></i>
    `;
    // Add click event to skip the speech and show options
    speakingIcon.addEventListener('click', () => {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      // Hide the speaking icon
      speakingIcon.style.display = "none";
      
      // Show the options
      const optionsContainerElement = optionsElement.querySelector('.options-container');
      if (optionsContainerElement) {
        optionsContainerElement.classList.remove("hidden");
        optionsContainerElement.classList.add("visible");
      }
    });
    optionsElement.appendChild(speakingIcon);    
    
    // Speak the current question after elements are created
    try {
      const speakingIconElement = optionsElement.querySelector('.speaking-icon');
      const optionsContainerElement = optionsElement.querySelector('.options-container');
        // Show speaking icon, hide options initially
      if (speakingIconElement) {
        speakingIconElement.style.display = "flex";
        
        // Add click event to skip the speech and show options immediately
        speakingIconElement.onclick = () => {
          window.speechSynthesis.cancel();
          speakingIconElement.style.display = "none";
          if (optionsContainerElement) {
            optionsContainerElement.classList.remove("hidden");
            optionsContainerElement.classList.add("visible");
          }
        };
      }
      
      if (optionsContainerElement) optionsContainerElement.classList.add("hidden");
      
      window.speechSynthesis.cancel(); // Stop any ongoing speech
      speech.text = currentQuestion.question;
      
      // Set up event handlers for speech
      speech.onend = () => {
        // When speech ends, hide icon and show options
        if (speakingIconElement) speakingIconElement.style.display = "none";
        if (optionsContainerElement) optionsContainerElement.classList.remove("hidden");
        if (optionsContainerElement) optionsContainerElement.classList.add("visible");
      };
      
      speech.onerror = () => {
        // In case of error, still show the options
        if (speakingIconElement) speakingIconElement.style.display = "none";
        if (optionsContainerElement) optionsContainerElement.classList.remove("hidden");
        if (optionsContainerElement) optionsContainerElement.classList.add("visible");
      };
      
      window.speechSynthesis.speak(speech);
    } catch (error) {
      console.error('Text-to-speech failed:', error);
      // In case of exception, still show the options
      const speakingIconElement = optionsElement.querySelector('.speaking-icon');
      const optionsContainerElement = optionsElement.querySelector('.options-container');
      
      if (speakingIconElement) speakingIconElement.style.display = "none";
      if (optionsContainerElement) optionsContainerElement.classList.remove("hidden");
      if (optionsContainerElement) optionsContainerElement.classList.add("visible");
    }
      // Insert new options, but modify how they work to handle filtered questions
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option.text;
      // Center the text in the button
      button.style.textAlign = "center";
      button.onclick = () => {
        window.speechSynthesis.cancel(); // Stop speech when user clicks an option
        
        // Add transition effect when answering
        questionContainer.style.opacity = "0";
        questionContainer.style.transform = "translateY(-20px)";
        
        setTimeout(() => {
          if (option.nextIndex !== undefined) {
            // Find the index in filteredQuestions that corresponds to the next question
            const nextFilteredIndex = filteredQuestions.findIndex(q => q.index === option.nextIndex);
            
            if (nextFilteredIndex !== -1) {
              currentQuestionIndex = nextFilteredIndex;
              
              // Reset position for next question to come in from below
              questionContainer.style.transform = "translateY(20px)";
              
              displayFilteredQuestion();
              
              // Trigger transition for next question
              setTimeout(() => {
                questionContainer.style.opacity = "1";
                questionContainer.style.transform = "translateY(0)";
              }, 50);
            } else {
              // If the next question isn't in our filtered set, go to the next filtered question
              currentQuestionIndex++;
              
              // Reset position for next question
              questionContainer.style.transform = "translateY(20px)";
              
              displayFilteredQuestion();
              
              // Trigger transition for next question
              setTimeout(() => {
                questionContainer.style.opacity = "1";
                questionContainer.style.transform = "translateY(0)";
              }, 50);
            }
          } else if (option.result) {
            displayResult(option.result);
          }
        }, 300); // Shorter transition for questions
      };
      optionsContainer.appendChild(button);
    });
  }
    function displayResult(resultType) {
    // Fade out the question elements first
    questionElement.classList.add("hidden");
    optionsElement.classList.add("hidden");
    questionContainer.classList.add("hidden");
    
    // Wait for the fade-out transition to complete
    setTimeout(() => {      // Prepare the result content before showing it
      const penalty = penalties[resultType];      
      // Get the selected entity name for display
      const selectedEntity = entityTypes.find(entity => entity.id === selectedEntityType);
      const entityName = selectedEntity ? selectedEntity.name : "";
        
      // Determine risk level based on the result
      let riskClass = "";
      
      // Use explicit riskLevel if available
      if (penalty.riskLevel) {
        riskClass = penalty.riskLevel;
      }
      // Otherwise determine risk level based on result content
      else if (penalty.label.includes("Penalty") || 
          penalty.label.includes("Money laundering") || 
          penalty.label.includes("Criminal") ||
          penalty.label.includes("Breach") ||
          penalty.label.includes("failure") ||
          penalty.label.includes("Malicious") ||
          penalty.label.includes("Refusal") ||
          resultType.startsWith("penalty_")) {
        riskClass = "high-risk";
      }      // Check if the result contains medium-risk keywords
      else if (penalty.label.includes("Reporting") || 
               penalty.label.includes("monitoring") ||
               penalty.label.includes("Monitoring") ||
               penalty.label.includes("forfeiture") ||
               penalty.label.includes("Due Diligence") ||
               penalty.label.includes("Vigilant") ||
               penalty.label.includes("Confidentiality") ||
               resultType.endsWith("enhanced")) {
        riskClass = "medium-risk";
      } 
      // Check if the result contains low-risk keywords
      else if (penalty.label.includes("not apply") || 
               penalty.label.includes("End of Assessment") ||
               penalty.label.includes("Not Guilty") ||
               penalty.label.includes("Proactive") ||
               penalty.label.includes("Well Prepared") ||
               penalty.label.includes("Best Practices") ||
               penalty.label.includes("Requirements may not apply")) {
        riskClass = "low-risk";
      }
      
      // Apply the appropriate class to the penalty details div
      penaltyDetailsElement.className = "penaltyDetails " + riskClass;
      
      penaltyDetailsElement.innerHTML = `
        <div class="result-meta">
          Assessment for: ${entityName}
        </div>
        <h3 class="result-title">Determination: ${penalty.label}</h3>
        <p class="result-text">${penalty.info}</p>
      `;
      
      // Prepare the elements for transition in
      resultElement.style.opacity = "0";
      resultElement.style.transform = "translateY(20px)";
      resultElement.classList.remove("hidden");
      
      restartButton.style.opacity = "0";
      restartButton.style.transform = "translateY(20px)";
      restartButton.classList.remove("hidden");
      
      // Force reflow to ensure the transition works
      void resultElement.offsetWidth;
      void restartButton.offsetWidth;
      
      // Trigger transitions
      resultElement.style.opacity = "1";
      resultElement.style.transform = "translateY(0)";
      
      // Add a slight delay to the restart button for a staggered effect
      setTimeout(() => {
        restartButton.style.opacity = "1";
        restartButton.style.transform = "translateY(0)";
      }, 200);
      
    }, 400); // Match this delay with the CSS transition duration

    // Clear state from localStorage
    localStorage.removeItem('selectedEntityType');
    localStorage.removeItem('currentQuestionIndex');
    localStorage.removeItem('filteredQuestions');
  }
});

function restartSystem() {
  window.location.reload();
}
