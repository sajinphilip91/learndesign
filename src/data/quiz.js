export const quizQuestions = [
    {
        id: 1,
        type: 'mcq',
        question: "Which heuristic is violated when a user clicks 'Delete' and the item disappears immediately without confirmation?",
        options: [
            "Visibility of System Status",
            "Error Prevention",
            "User Control and Freedom",
            "Consistency and Standards"
        ],
        correctAnswer: 1, // Error Prevention (or User Control depending on context, but Prevention is best for destructive)
        // Actually, immediate deletion without undo is User Control. Immediate deletion without confirmation is Error Prevention.
        // Let's make it clear.
        explanation: "Error Prevention suggests asking for confirmation before destructive actions. User Control and Freedom suggests providing an 'Undo' option."
    },
    {
        id: 2,
        type: 'mcq',
        question: "A progress bar during a file upload is an example of which heuristic?",
        options: [
            "Match between System and Real World",
            "Visibility of System Status",
            "Aesthetic and Minimalist Design",
            "Flexibility and Efficiency of Use"
        ],
        correctAnswer: 1,
        explanation: "The system should always keep users informed about what is going on, through appropriate feedback within reasonable time."
    },
    {
        id: 3,
        type: 'mcq',
        question: "Using a trash can icon to represent 'Delete' is an example of:",
        options: [
            "Consistency and Standards",
            "Match between System and Real World",
            "Recognition rather than Recall",
            "Help and Documentation"
        ],
        correctAnswer: 1,
        explanation: "The system should speak the users' language, with words, phrases and concepts familiar to the user, rather than system-oriented terms."
    },
    {
        id: 4,
        type: 'mcq',
        question: "Hick's Law states that:",
        options: [
            "Targets should be large and close",
            "Users spend most of their time on other sites",
            "Decision time increases with the number of choices",
            "People perceive complex images as simple forms"
        ],
        correctAnswer: 2,
        explanation: "Hick's Law describes the time it takes for a person to make a decision as a result of the possible choices: increasing the number of choices will increase the decision time."
    },
    {
        id: 5,
        type: 'mcq',
        question: "Which principle suggests that related items should be grouped together visually?",
        options: [
            "Law of Proximity",
            "Law of Closure",
            "Law of Common Region",
            "Law of Continuity"
        ],
        correctAnswer: 0,
        explanation: "The Law of Proximity states that objects that are near or 'proximate' to each other tend to be grouped together."
    }
];
