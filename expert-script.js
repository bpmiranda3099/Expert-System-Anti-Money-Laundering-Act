const questions = [
  {
    question: "Are you regulated by an Insurance Company?", //0
    options: [
      { text: "Yes", nextIndex: 1 },
      { text: "No", nextIndex: 1 },
    ],
  },
  {
    question: "Are you involved in Securities and Exchange Commission?", //1
    options: [
      { text: "Yes", nextIndex: 4 },
      { text: "No", nextIndex: 2 },
    ],
  },
  {
    question: "Are you a Designated Non-Financial Business/Profession?", //2
    options: [
      { text: "Yes", nextIndex: 3 },
      { text: "No", result: "result1" },
    ],
  },
  {
    question: "Transaction exceeds 1 Million or suspicious?", //3
    options: [
      { text: "Yes", nextIndex: 4 },
      { text: "No", result: "result1" },
    ],
  },
  {
    question: "High-value or wire transaction?", //4
    options: [
      { text: "Yes", nextIndex: 5 },
      { text: "No", result: "result2" },
    ],
  },
  {
    question:
      "Are you a high-risk client: Politically Exposed Person (PEP), offshore, complex?", //5
    options: [
      { text: "Yes", result: "result3" },
      { text: "No", nextIndex: 6 },
    ],
  },
  {
    question: "Is it covered or suspicious transaction?", //6
    options: [
      { text: "Yes", nextIndex: 7 },
      { text: "No", result: "result4" },
    ],
  },
  {
    question: "Was a freeze order issued?", //7
    options: [
      { text: "Yes", nextIndex: 8 },
      { text: "No", result: "result5" },
    ],
  },
  {
    question:
      "Is the Anti-Money Laundering Council authorized to access bank information?", //8
    options: [
      { text: "Yes", nextIndex: 9 },
      { text: "No", result: "result6" },
    ],
  },
  {
    question: "Any suspicious patterns triggered?", //9
    options: [
      { text: "Yes", nextIndex: 10 },
      { text: "No", result: "result7" },
    ],
  },
  {
    question: "Are forfeiture conditions met?", //10
    options: [
      { text: "Yes", result: "result8" },
      { text: "No", result: "result7" },
    ],
  },
];

//results (no penalties yet based on the flowchart actions)
const penalties = {
  result1: {
    label: "Not Guilty",
    info: "Based on your responses, you are not currently subject to the primary requirements of the Anti-Money Laundering Act. However, it's advisable to stay informed about AML regulations as they may apply to your business in the future."
  },
  result2: {
    label: "Customer Due Diligence not mandatory, but observe",
    info: "While formal Customer Due Diligence (CDD) procedures may not be mandatory in your case, it's recommended to maintain basic Know Your Customer (KYC) practices and observe for any suspicious transactions that might require reporting."
  },
  result3: {
    label: "Apply Enhanced Due Diligence",
    info: "Your situation requires Enhanced Due Diligence (EDD) procedures. This includes more rigorous identity verification, scrutiny of the source of funds, detailed monitoring of transactions, and maintaining comprehensive records of all interactions and transactions."
  },
  result4: {
    label: "Requirements may not apply",
    info: "Based on the nature of your transactions, the full requirements of the Anti-Money Laundering Act may not apply. However, it's advisable to consult with a legal professional to confirm your specific obligations."
  },
  result5: {
    label: "Continue monitoring",
    info: "You should maintain ongoing transaction monitoring to identify and report any suspicious activities. Regular review of client accounts and transactions is recommended to ensure compliance with AML regulations."
  },
  result6: {
    label: "Maintain Confidentiality",
    info: "It's crucial to maintain the confidentiality of all information related to suspicious transaction reports and investigations. Disclosing such information could potentially obstruct justice and may be a violation of the law."
  },
  result7: {
    label: "End of Assessment",
    info: "Based on your responses, no further action is required at this time. Continue to adhere to standard AML compliance practices as applicable to your role or organization."
  },
  result8: {
    label: "Initiate Civil/Asset forfeiture",
    info: "The conditions for civil forfeiture proceedings appear to be met. Assets that are the proceeds of money laundering activities may be subject to freezing and eventual forfeiture under the Anti-Money Laundering Act."
  },
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
  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `
      <div style="margin-bottom: 5px; font-size: 0.9rem; color: #666;">Question ${currentQuestionIndex + 1} of ${questions.length}</div>
      <div>${currentQuestion.question}</div>
    `;

    // Remove previous options
    optionsElement.innerHTML = "";

    // Insert new options
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.onclick = () => {
        // If option has nextIndex rather than result
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
