export const uxLaws = [
    {
        id: 1,
        title: "Hick's Law",
        definition: "The time it takes to make a decision increases with the number and complexity of choices.",
        scientificExplanation: "Hick's Law (or the Hick-Hyman Law) describes the time it takes for a person to make a decision as a result of the possible choices: T = b * log2(n + 1), where n is the number of equally probable choices.",
        realWorldExamples: [
            { title: "Restaurant Menus", description: "Menus with too many options can cause 'analysis paralysis'." },
            { title: "Remote Controls", description: "Universal remotes with fewer buttons are easier to use than complex ones." },
            { title: "Netflix Homepage", description: "Categorized rows help reduce the overwhelming number of choices." },
            { title: "Grocery Aisles", description: "Too many varieties of jam can actually reduce sales." },
            { title: "Car Dashboard", description: "Essential controls are prominent; secondary ones are hidden or grouped." }
        ]
    },
    {
        id: 2,
        title: "Fitts's Law",
        definition: "The time to acquire a target is a function of the distance to and size of the target.",
        scientificExplanation: "Mathematically modeled as T = a + b * log2(2D/W), where D is distance and W is width. Larger and closer targets are faster to hit.",
        realWorldExamples: [
            { title: "Brake Pedal", description: "The brake pedal is larger than the gas pedal to make it easier to hit in emergencies." },
            { title: "Light Switches", description: "Located near doors for easy access upon entering." },
            { title: "Elevator Buttons", description: "Large buttons are easier to press than small ones." },
            { title: "Door Handles", description: "Panic bars on emergency exits are huge targets." },
            { title: "Keyboard Spacebar", description: "The most frequently used key is also the largest." }
        ]
    },
    // Placeholders for others
    ...Array.from({ length: 3 }, (_, i) => ({
        id: i + 3,
        title: ["Jakob's Law", "Law of Proximity", "Miller's Law"][i],
        definition: "Placeholder definition.",
        scientificExplanation: "Placeholder scientific explanation.",
        realWorldExamples: Array.from({ length: 5 }, (_, j) => ({ title: `Example ${j + 1}`, description: "Description." }))
    }))
];
