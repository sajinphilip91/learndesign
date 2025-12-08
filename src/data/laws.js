export const laws = [
    {
        id: "aesthetic-usability-effect",
        title: "1. Aesthetic-Usability Effect",
        description: "Users often perceive aesthetically pleasing design as design that's more usable.",
        whyItMatters: "Aesthetically pleasing design can make users more tolerant of minor usability issues.",
        bestPractices: [
            "Create an aesthetically pleasing design to improve user satisfaction.",
            "Use visuals to communicate brand personality.",
            "Don't compromise usability for aesthetics."
        ],
        digitalExample: {
            title: "Apple Products",
            description: "Apple's success is largely due to the perceived usability of their beautiful interfaces.",
            whyItMatters: "High aesthetic quality builds trust and perceived value."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2670&auto=format&fit=crop",
            title: "Vintage Electronics",
            description: "Classic Braun designs are timeless because they look as good as they work.",
            whyItMatters: "Beauty creates an emotional connection that enhances the user experience."
        }
    },
    {
        id: "doherty-threshold",
        title: "2. Doherty Threshold",
        description: "Productivity soars when a computer and its users interact at a pace (<400ms) that ensures that neither has to wait on the other.",
        whyItMatters: "Keeping response times under 400ms keeps users in the 'flow' state.",
        bestPractices: [
            "Provide system feedback within 400ms.",
            "Use progress bars for longer tasks to make wait times feel shorter.",
            "Pre-render content to perceive speed."
        ],
        digitalExample: {
            title: "Skeleton Screens",
            description: "Showing a skeleton layout immediately makes the app feel faster than a blank screen.",
            whyItMatters: "It reduces the perceived wait time."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2670&auto=format&fit=crop",
            title: "Jazz Improvisation",
            description: "Musicians flow together instantly. A 400ms delay would ruin the rhythm.",
            whyItMatters: "Instant feedback keeps the interaction engaging."
        }
    },
    {
        id: "fitts-law",
        title: "3. Fitts's Law",
        description: "The time to acquire a target is a function of the distance to and size of the target.",
        whyItMatters: "Make interactive elements large enough and close enough to be easily selectable.",
        bestPractices: [
            "Make touch targets at least 44x44 pixels.",
            "Place important actions in easy-to-reach areas.",
            "Increase the size of smaller buttons."
        ],
        digitalExample: {
            title: "Call to Action Buttons",
            description: "Primary buttons are large and easy to click.",
            whyItMatters: "It reduces the effort required to complete a goal."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1597762696602-532729c4db2f?q=80&w=2670&auto=format&fit=crop",
            title: "Brake Pedal",
            description: "The brake pedal is the largest pedal because you can't afford to miss it.",
            whyItMatters: "Critical controls must be impossible to miss."
        }
    },
    {
        id: "goal-gradient-effect",
        title: "4. Goal-Gradient Effect",
        description: "The tendency to approach a goal increases with proximity to the goal.",
        whyItMatters: "Users are more motivated to complete a task as they get closer to the finish line.",
        bestPractices: [
            "Show progress bars to indicate how close users are to completion.",
            "Visually highlight the final steps.",
            "Start users with some progress (e.g., 'Profile 20% complete')."
        ],
        digitalExample: {
            title: "Coffee Loyalty Cards",
            description: "A card with 2 steps already stamped is more likely to be completed.",
            whyItMatters: "Artificial advancement motivates users to finish the task."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=2670&auto=format&fit=crop",
            title: "The Finish Line",
            description: "Runners unconsciously speed up when the finish line is in sight.",
            whyItMatters: "Visualizing the end boosts performance."
        }
    },
    {
        id: "hicks-law",
        title: "5. Hick's Law",
        description: "The time it takes to make a decision increases with the number and complexity of choices.",
        whyItMatters: "Simplify choices for the user to reduce decision fatigue.",
        bestPractices: [
            "Minimize choices when response times are critical.",
            "Break complex tasks into smaller steps.",
            "Highlight recommended options."
        ],
        digitalExample: {
            title: "Google Search",
            description: "A single search bar is the ultimate simplification of infinite choices.",
            whyItMatters: "It removes all distraction and focuses on the primary task."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1577308856961-8e9ec50d0c67?q=80&w=2670&auto=format&fit=crop",
            title: "Complex Remotes",
            description: "A remote with 50 buttons makes it harder to just turn on the TV.",
            whyItMatters: "Too many options paralyze the user."
        }
    },
    {
        id: "jakobs-law",
        title: "6. Jakob's Law",
        description: "Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know.",
        whyItMatters: "Don't reinvent the wheel. Familiar patterns are easier to learn.",
        bestPractices: [
            "Follow standard design patterns.",
            "Use common icons and navigation structures.",
            "Don't change standard behaviors without a good reason."
        ],
        digitalExample: {
            title: "E-commerce Cart",
            description: "The shopping cart icon is universally understood.",
            whyItMatters: "Users know exactly where to find their items."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1626260840502-d922a893c54c?q=80&w=2670&auto=format&fit=crop",
            title: "Desire Paths",
            description: "People walk the shortest path across the grass, ignoring the paved sidewalk.",
            whyItMatters: "Users follow their mental models, not your design."
        }
    },
    {
        id: "law-of-common-region",
        title: "7. Law of Common Region",
        description: "Elements tend to be perceived into groups if they are sharing an area with a clearly defined boundary.",
        whyItMatters: "Use boundaries to group related information.",
        bestPractices: [
            "Use borders or background colors to define regions.",
            "Group related controls together.",
            "Separate distinct sections clearly."
        ],
        digitalExample: {
            title: "Card UI",
            description: "Content within a card is perceived as a single unit.",
            whyItMatters: "It organizes complex information into digestible chunks."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2670&auto=format&fit=crop",
            title: "Bento Box",
            description: "Different foods are kept separate by the container's walls.",
            whyItMatters: "Physical boundaries define the relationship of the elements inside."
        }
    },
    {
        id: "law-of-proximity",
        title: "8. Law of Proximity",
        description: "Objects that are near, or proximate to each other, tend to be grouped together.",
        whyItMatters: "Spacing is a powerful tool for establishing relationships between elements.",
        bestPractices: [
            "Place related elements close together.",
            "Use whitespace to separate unrelated groups.",
            "Ensure labels are close to their inputs."
        ],
        digitalExample: {
            title: "Form Labels",
            description: "Labels placed close to their input fields are easier to scan.",
            whyItMatters: "It prevents confusion about which label belongs to which field."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=2670&auto=format&fit=crop",
            title: "Culinary Prep",
            description: "Ingredients for a specific dish are grouped together (Mise en place).",
            whyItMatters: "Proximity implies they belong to the same recipe."
        }
    },
    {
        id: "law-of-pragnanz",
        title: "9. Law of Pragnanz",
        description: "People will perceive and interpret ambiguous or complex images as the simplest form possible, because it is the interpretation that requires the least cognitive effort.",
        whyItMatters: "Design simple, iconic forms that are easy to recognize.",
        bestPractices: [
            "Use simple shapes and icons.",
            "Avoid unnecessary visual complexity.",
            "Design for quick recognition."
        ],
        digitalExample: {
            title: "Logos",
            description: "The best logos (like Apple or Nike) are simple shapes.",
            whyItMatters: "They are instantly memorable and recognizable."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2670&auto=format&fit=crop",
            title: "Modern Architecture",
            description: "We interpret this complex building as a set of simple geometric shapes.",
            whyItMatters: "Our minds try to make sense of chaos by finding simple forms."
        }
    },
    {
        id: "law-of-similarity",
        title: "10. Law of Similarity",
        description: "The human eye tends to perceive similar elements in a design as a complete picture, shape, or group, even if those elements are separated.",
        whyItMatters: "Use consistent styles for related elements.",
        bestPractices: [
            "Style links and buttons consistently.",
            "Use color code to indicate function.",
            "Create visual patterns for repeated content."
        ],
        digitalExample: {
            title: "Navigation Links",
            description: "When all menu items look the same, we know they function the same.",
            whyItMatters: "It reduces the learning curve for the interface."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1533425502699-27c95a5fef2e?q=80&w=2670&auto=format&fit=crop",
            title: "Auditorium Seats",
            description: "Rows of identical seats are instantly recognized as a single functional group.",
            whyItMatters: "Visual similarity establishes group identity."
        }
    },
    {
        id: "law-of-uniform-connectedness",
        title: "11. Law of Uniform Connectedness",
        description: "Elements that are visually connected are perceived as more related than elements with no connection.",
        whyItMatters: "Use lines or containers to connect related steps or items.",
        bestPractices: [
            "Use lines to connect steps in a wizard.",
            "Group related options in a container.",
            "Use arrows to show flow."
        ],
        digitalExample: {
            title: "Stepper",
            description: "A line connecting step 1 to step 2 shows progression.",
            whyItMatters: "It visually guides the user through a sequence."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2670&auto=format&fit=crop",
            title: "Train Cars",
            description: "The physical coupling proves these carriages move as one unit.",
            whyItMatters: "Physical connection implies functional unity."
        }
    },
    {
        id: "millers-law",
        title: "12. Miller's Law",
        description: "The average person can only keep 7 (plus or minus 2) items in their working memory.",
        whyItMatters: "Organize content into smaller chunks to help users process, understand, and memorize easily.",
        bestPractices: [
            "Chunk complex information into smaller groups.",
            "Limit menu items to 5-9 options.",
            "Break long forms into steps."
        ],
        digitalExample: {
            title: "Phone Numbers",
            description: "Phone numbers are chunked (e.g., 555-0199) to make them memorable.",
            whyItMatters: "It overcomes the limitations of short-term memory."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=2670&auto=format&fit=crop",
            title: "Juggling",
            description: "You can only juggle so many balls before dropping one.",
            whyItMatters: "Chunking allows for quick reading and verification."
        }
    },
    {
        id: "occams-razor",
        title: "13. Occam's Razor",
        description: "Among competing hypotheses, the one with the fewest assumptions should be selected.",
        whyItMatters: "The simplest solution is usually the best one.",
        bestPractices: [
            "Remove unnecessary features.",
            "Choose the simplest implementation.",
            "Don't make assumptions about user behavior."
        ],
        digitalExample: {
            title: "Login Screen",
            description: "Username and Password. No extra fluff.",
            whyItMatters: "Simplicity reduces the chance of error."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1541728472741-03e45a58cf88?q=80&w=2670&auto=format&fit=crop",
            title: "Paperclip",
            description: "A simple bent wire is the perfect solution. No springs, no complexity.",
            whyItMatters: "It solves the problem perfectly without overengineering."
        }
    },
    {
        id: "pareto-principle",
        title: "14. Pareto Principle",
        description: "The Pareto principle states that, for many events, roughly 80% of the effects come from 20% of the causes.",
        whyItMatters: "Focus on the 20% of features that provide 80% of the value.",
        bestPractices: [
            "Identify and optimize the most used features.",
            "Don't waste time perfecting rarely used settings.",
            "Simplify the UI for the majority use case."
        ],
        digitalExample: {
            title: "MS Word Toolbar",
            description: "The most used buttons (Bold, Italic) are prominent.",
            whyItMatters: "It optimizes the interface for the most common tasks."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1551488852-7a337079e961?q=80&w=2670&auto=format&fit=crop",
            title: "Your Wardrobe",
            description: "You likely wear 20% of your clothes 80% of the time.",
            whyItMatters: "Keep essentials accessible."
        }
    },
    {
        id: "parkinsons-law",
        title: "15. Parkinson's Law",
        description: "Work expands so as to fill the time available for its completion.",
        whyItMatters: "Constraints can actually improve performance and focus.",
        bestPractices: [
            "Set clear deadlines or time limits.",
            "Reduce the time required to complete a task.",
            "Auto-fill data to save time."
        ],
        digitalExample: {
            title: "Session Timeouts",
            description: "Limited time to complete a secure transaction encourages focus.",
            whyItMatters: "It creates urgency and prevents procrastination."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=2670&auto=format&fit=crop",
            title: "The Hourglass",
            description: "Work expands to fill the time available. Constraints force focus.",
            whyItMatters: "Time boxing improves efficiency."
        }
    },
    {
        id: "peak-end-rule",
        title: "16. Peak-End Rule",
        description: "People judge an experience largely based on how they felt at its peak and at its end, rather than the total sum or average of every moment of the experience.",
        whyItMatters: "Design for the highlights and the final impression.",
        bestPractices: [
            "Celebrate success states (e.g., confetti).",
            "Make error recovery smooth (the low peak).",
            "Ensure the checkout process (the end) is delightful."
        ],
        digitalExample: {
            title: "Game Victory",
            description: "The explosion of rewards at the end of a level makes the grind worth it.",
            whyItMatters: "It leaves a lasting positive memory."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?q=80&w=2670&auto=format&fit=crop",
            title: "The Grand Finale",
            description: "We remember the fireworks at the end of the show more than the lull in the middle.",
            whyItMatters: "It's the last thing you remember."
        }
    },
    {
        id: "postels-law",
        title: "17. Postel's Law",
        description: "Be conservative in what you do, be liberal in what you accept from others.",
        whyItMatters: "Accept flexible input from users, but output consistent, reliable data.",
        bestPractices: [
            "Auto-format phone numbers and dates.",
            "Accept various file types.",
            "Correct minor typos in search."
        ],
        digitalExample: {
            title: "Search Inputs",
            description: "Google understands 'resturant' means 'restaurant'.",
            whyItMatters: "It reduces user friction and frustration."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1555617778-02518510b9fa?q=80&w=2670&auto=format&fit=crop",
            title: "Universal Adaptors",
            description: "It accepts almost any plug format (liberal input) and powers your device (strict output).",
            whyItMatters: "Adaptability facilitates interaction."
        }
    },
    {
        id: "serial-position-effect",
        title: "18. Serial Position Effect",
        description: "Users have a propensity to best remember the first and last items in a series.",
        whyItMatters: "Place important information at the beginning and end.",
        bestPractices: [
            "Put key links at the start and end of menus.",
            "Place critical info in the header and footer.",
            "Start and end presentations with your main points."
        ],
        digitalExample: {
            title: "Navigation Menus",
            description: "Home is first, Contact is last. The middle is often forgotten.",
            whyItMatters: "It leverages natural memory patterns."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?q=80&w=2670&auto=format&fit=crop",
            title: "The Queue",
            description: "You remember who was first in line and who was last.",
            whyItMatters: "Information structure affects recall."
        }
    },
    {
        id: "teslers-law",
        title: "19. Tesler's Law",
        description: "Tesler's Law, also known as The Law of Conservation of Complexity, states that for any system there is a certain amount of complexity which cannot be reduced.",
        whyItMatters: "Don't hide complexity to the point of confusion. Manage it.",
        bestPractices: [
            "Balance simplicity with power.",
            "Shift complexity from the user to the system.",
            "Don't oversimplify critical detailed controls."
        ],
        digitalExample: {
            title: "Buying a House",
            description: "The process is inherently complex. A good UI guides you, but can't make it 1-click.",
            whyItMatters: "Acknowledging complexity allows for better management of it."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
            title: "Cockpit",
            description: "Flying is inherently complex. The controls must match that complexity.",
            whyItMatters: "Oversimplification can be dangerous in complex systems."
        }
    },
    {
        id: "von-restorff-effect",
        title: "20. Von Restorff Effect",
        description: "The Von Restorff effect, also known as The Isolation Effect, predicts that when multiple similar objects are present, the one that differs from the rest is most likely to be remembered.",
        whyItMatters: "Make important elements stand out.",
        bestPractices: [
            "Use a contrasting color for Call to Action buttons.",
            "Highlight the selected plan in pricing tables.",
            "Use size or shape to differentiate key items."
        ],
        digitalExample: {
            title: "Pricing Tables",
            description: "The 'Pro' plan is highlighted and larger.",
            whyItMatters: "It draws attention to the preferred option."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1?q=80&w=2670&auto=format&fit=crop",
            title: "The Red Umbrella",
            description: "In a sea of black umbrellas, the red one catches your eye immediately.",
            whyItMatters: "Contrast commands attention."
        }
    },
    {
        id: "zeigarnik-effect",
        title: "21. Zeigarnik Effect",
        description: "People remember uncompleted or interrupted tasks better than completed tasks.",
        whyItMatters: "Use incomplete tasks to motivate engagement.",
        bestPractices: [
            "Show progress bars for incomplete profiles.",
            "Remind users of items left in their cart.",
            "Use cliffhangers to encourage return visits."
        ],
        digitalExample: {
            title: "LinkedIn Profile",
            description: "'Your profile is 85% complete' makes you want to reach 100%.",
            whyItMatters: "The mental tension of incompletion drives action."
        },
        realWorldExample: {
            image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=2670&auto=format&fit=crop",
            title: "Missing Piece",
            description: "A puzzle with one missing piece creates a mental tension to find it.",
            whyItMatters: "Unresolved narratives stick in the mind."
        }
    }
];
