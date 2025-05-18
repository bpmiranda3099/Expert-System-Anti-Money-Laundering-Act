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
      { text: "No", result: "result1" },
    ],
  },
  {
    question: "Are you dealing with a transaction that is over 1 Million Pesos OR seems suspicious?", //3
    options: [
      { text: "Yes", nextIndex: 4 },
      { text: "No", result: "result1" },
    ],
  },
  {
    question: "Is this a high-value transaction or a wire transfer?", //4
    options: [
      { text: "Yes", nextIndex: 5 },
      { text: "No", result: "result2" },
    ],
  },
  {
    question:
      "Is the client considered high-risk (e.g., a Politically Exposed Person (PEP), involved in offshore accounts, or part of a complex business structure)?", //5
    options: [
      { text: "Yes", result: "result3" },
      { text: "No", nextIndex: 6 },
    ],
  },
  {
    question: "Is the transaction a 'covered transaction' (generally over PHP 500,000 in one day) OR a 'suspicious transaction' (seems unusual or without clear legal/economic purpose)?", //6
    options: [
      { text: "Yes", nextIndex: 7 },
      { text: "No", result: "result4" },
    ],
  },
  {
    question: "Has a court or the Anti-Money Laundering Council (AMLC) issued an order to freeze assets related to this situation?", //7
    options: [
      { text: "Yes", nextIndex: 8 },
      { text: "No", result: "result5" },
    ],
  },
  {
    question:
      "Has the Anti-Money Laundering Council (AMLC) been authorized by a court to look into bank information related to this situation?", //8
    options: [
      { text: "Yes", nextIndex: 9 },
      { text: "No", result: "result6" },
    ],
  },
  {
    question: "Have any patterns or activities been noticed that seem suspicious or out of the ordinary for the client/transaction?", //9
    options: [
      { text: "Yes", nextIndex: 10 },
      { text: "No", result: "result7" },
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
    question: "If your business is required to report certain transactions (covered or suspicious) to the AMLC, have you failed to do so on time?", //12
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
  },
  {
    question: "Have you failed to follow an official order to freeze or preserve assets related to an AMLA investigation?", //15
    options: [
      { text: "Yes", result: "penalty_rule17_3" },
      { text: "No", result: "result7" }, 
    ],
  }
];

//results (no penalties yet based on the flowchart actions)
const penalties = {
  result1: {
    label: "Not Guilty",
    info: "Good news! Based on your answers, the main rules of the Anti-Money Laundering Act don\'t seem to apply to you right now. Still, it\'s a good idea to keep an eye on these rules, as they might affect your business later on."
  },
  result2: {
    label: "Customer Due Diligence not mandatory, but observe",
    info: "You might not need to do a full Customer Due Diligence (CDD) right now, but it\'s smart to still do basic checks on your customers (Know Your Customer - KYC). Also, watch out for any unusual transactions that you might need to report."
  },
  result3: {
    label: "Apply Enhanced Due Diligence",
    info: "Your situation calls for a closer look. This means you\'ll need to do more thorough checks on who your clients are, where their money comes from, keep a close eye on their transactions, and keep detailed records of everything."
  },
  result4: {
    label: "Requirements may not apply",
    info: "Because of the kinds of transactions you\'re dealing with, the full Anti-Money Laundering Act rules might not apply to you. However, it\'s best to check with a lawyer to be sure about what you need to do."
  },
  result5: {
    label: "Continue monitoring",
    info: "Keep watching your transactions to spot and report anything that looks suspicious. It\'s a good idea to regularly check client accounts and transactions to make sure you\'re following Anti-Money Laundering rules."
  },
  result6: {
    label: "Maintain Confidentiality",
    info: "It\'s very important to keep all information about suspicious transaction reports and investigations private. Sharing this kind of information could get in the way of justice and might even be against the law."
  },
  result7: {
    label: "End of Assessment",
    info: "Based on your answers, you don\'t need to do anything more at this time. Just keep following the usual Anti-Money Laundering practices that apply to your job or organization."
  },
  result8: {
    label: "Initiate Civil/Asset forfeiture",
    info: "It looks like there are reasons for a civil forfeiture case. This means that assets that came from money laundering could be frozen and eventually taken away, according to the Anti-Money Laundering Act."
  },
  penalty_rule4: {
    label: "Money laundering acts (transacting, facilitating, or failing to report unlawful proceeds)",
    info: "This is about breaking Rule 4 of the Anti-Money Laundering Act\'s Implementing Rules and Regulations (IRR), which defines what money laundering is. If you\'re involved in money laundering – like knowingly making transactions with illegal money, helping with such transactions, or failing to report them as required by the Anti-Money Laundering Council (AMLC) – you could face serious criminal charges. According to Rule 14 of the IRR, the specific penalties are:\n\n*   **For knowingly transacting with proceeds of unlawful activity (a violation of Section 4a of the AMLA):** Imprisonment for seven (7) to fourteen (14) years AND a fine of not less than PHP 3,000,000.00 but not more than twice the value of the monetary instrument or property involved.\n*   **For knowingly facilitating money laundering (a violation of Section 4b of the AMLA):** Imprisonment for four (4) to seven (7) years AND a fine of not less than PHP 1,500,000.00 but not more than PHP 3,000,000.00.\n*   **For knowingly failing to disclose or file required reports with the AMLC (a violation of Section 4c of the AMLA):** Imprisonment for six (6) months to four (4) years OR a fine of not less than PHP 100,000.00 but not more than PHP 500,000.00, OR both."
  },
  penalty_rule5: {
    label: "Attempting money laundering; non-reporting of attempted transactions",
    info: "This relates to Rule 5. If you try to launder money, or if you don\'t report an attempt by someone else, you could be fully prosecuted under the Anti-Money Laundering Act (AMLA)."
  },
  penalty_rule6: {
    label: "Failure to file charges when probable cause is found; delays in prosecution",
    info: "This is about Rule 6. If there\'s a good reason to believe a crime happened but charges aren\'t filed, or if there are delays in taking legal action, this rule applies. While there isn\'t a specific penalty listed here, it means that criminal proceedings under the Anti-Money Laundering Act (AMLA) will start."
  },
  penalty_rule11: {
    label: "Refusal by a financial institution or its officers to allow inquiry into a bank account (in terrorism cases)",
    info: "This concerns Rule 11. If a financial institution or its staff refuses to let authorities look into a bank account (especially in terrorism-related cases), they could be fined between ₱100,000 and ₱500,000. They might also face criminal charges."
  },
  penalty_rule14a_1_3: {
    label: "Money laundering violations under Sec. 4(a), 4(b), 4(c)",
    info: "This is about breaking Rules 14.a.1 to 14.a.3. If you violate specific parts of the Anti-Money Laundering Act (Sections 4(a), 4(b), or 4(c)), you could go to prison for 6 months to 14 years. You might also have to pay a fine from ₱100,000 up to double the amount of money involved."
  },
  penalty_rule14a_4: {
    label: "Violations of AMLA, IRR, or AMLC issuances",
    info: "This relates to Rule 14.a.4. If you break any rules of the Anti-Money Laundering Act (AMLA), its Implementing Rules and Regulations (IRR), or any orders from the Anti-Money Laundering Council (AMLC), you could face an administrative fine of ₱100,000 to ₱500,000 for each violation."
  },
  penalty_rule14b: {
    label: "Failure to keep and preserve records",
    info: "This is about Rule 14.b. If you don\'t keep or save records as required, you could face 6 months to 1 year in prison or pay a fine between ₱100,000 and ₱500,000."
  },
  penalty_rule14c: {
    label: "Malicious or false reporting",
    info: "This concerns Rule 14.c. If you knowingly make a false report about money laundering, or report someone without a good reason, you could go to prison for 6 months to 4 years. You might also have to pay a fine between ₱100,000 and ₱500,000."
  },
  penalty_rule14d: {
    label: "Breach of confidentiality (unauthorized inquiry/disclosure)",
    info: "This relates to Rule 14.d. If you break confidentiality rules (like looking into something you shouldn\'t or sharing private information without permission), you could face 3 to 8 years in prison and pay a fine between ₱500,000 and ₱1,000,000."
  },
  penalty_rule14e: {
    label: "Refusal of public official to testify",
    info: "This is about Rule 14.e. If a public official refuses to testify in a case, they could face 3 to 8 years in prison and pay a fine between ₱500,000 and ₱1,000,000."
  },
  penalty_rule14f: {
    label: "Offenses by juridical person, alien, or public official",
    info: "This concerns Rule 14.f. If a company, a foreigner, or a public official commits an offense, the officers of the company can be held personally responsible, the company\'s license can be taken away, a foreigner can be deported, and a public official can be permanently banned from holding public office."
  },
  penalty_rule16: {
    label: "Causing damage via money laundering",
    info: "This relates to Rule 16 of the Anti-Money Laundering Act\'s Implementing Rules and Regulations (IRR), which is about \'Restitution\'. Rule 16 states: \'Restitution for any aggrieved party shall be governed by the provisions of the New Civil Code.\' \n\nIn simple terms, if money laundering activities cause harm or financial loss to someone, the person responsible for the money laundering will be required to pay for those damages. The specific rules for this compensation are found in the New Civil Code."
  },
  penalty_rule17_1: {
    label: "Malicious or unauthorized disclosure of AMLA-related reports",
    info: "This situation may fall under rules concerning malicious or unauthorized disclosure of Anti-Money Laundering Act (AMLA)-related reports. If you share such reports improperly, especially to cause harm, it could lead to criminal charges. If this involves \'Malicious Reporting\' as detailed in Rule 14.c of the AMLA\'s Implementing Rules and Regulations (IRR) – which means knowingly reporting or filing completely unwarranted or false information about a money laundering transaction against someone – the penalties are:\n\n*   Imprisonment for six (6) months to four (4) years, AND\n*   A fine of not less than PHP 100,000.00 but not more than PHP 500,000.00.\nIt\'s important to note that offenders are not entitled to the benefits of the Probation Law."
  },
  penalty_rule17_2: {
    label: "Breach of confidentiality",
    info: "This concerns Rule 17.2. If you break confidentiality rules, you could face criminal charges and/or administrative penalties."
  },
  penalty_rule17_3: {
    label: "Failure to comply with freeze or preservation orders",
    info: "This relates to Rule 17.3. If you don\'t follow an official order to freeze assets or keep them safe, you could be charged with obstruction of justice (getting in the way of a legal investigation)."
  },
  penalty_rule17_5: {
    label: "Failure to report covered/suspicious transactions",
    info: "This is about Rule 17.5. If you don\'t report transactions that you\'re supposed to (either because they are over a certain amount or look suspicious), you could face criminal penalties under the Anti-Money Laundering Act (AMLA)."
  }
};

let currentQuestionIndex = 0;

// Wait for DOM to be loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  const questionElement = document.getElementById("question");
  const questionContainer = document.getElementById("questionContainer");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");
  const penaltyDetailsElement = document.getElementById("penaltyDetails");
  const restartButton = document.getElementById("restart");
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

  function speakText(text) {
    try {
      window.speechSynthesis.cancel(); // Stop any ongoing speech
      speech.text = text;
      window.speechSynthesis.speak(speech);
    } catch (error) {
      console.error('Text-to-speech failed:', error);
    }
  }

  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `
      <div style="margin-bottom: 5px; font-size: 0.9rem; color: #666;">Question ${currentQuestionIndex + 1} of ${questions.length}</div>
      <div>${currentQuestion.question}</div>
    `;

    // Speak the current question
    speakText(currentQuestion.question);

    // Remove previous options
    optionsElement.innerHTML = "";

    // Insert new options
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.onclick = () => {
        window.speechSynthesis.cancel(); // Stop speech when user clicks an option
        
        if (option.nextIndex !== undefined) {
          currentQuestionIndex = option.nextIndex;
          displayQuestion();
        } else if (option.result) {
          displayResult(option.result);
        }
      };
      optionsElement.appendChild(button);
    });
  }
  function displayResult(resultType) {
    questionElement.classList.add("hidden");
    optionsElement.classList.add("hidden");
    questionContainer.classList.add("hidden");
    resultElement.classList.remove("hidden");
    restartButton.classList.remove("hidden");

    const penalty = penalties[resultType];
    penaltyDetailsElement.innerHTML = `
      <h3 style="color: #2c3e50; margin-top: 0;">Determination: ${penalty.label}</h3>
      <p style="margin-bottom: 15px;">${penalty.info}</p>
    `;
  }

  // Initialize the expert system
  displayQuestion();
});

function restartSystem() {
  window.location.reload();
}
