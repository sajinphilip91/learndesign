import elevatorImg from '../assets/images/real-world/elevator_panel_1765103478079.png';
import compassImg from '../assets/images/real-world/compass_comparison_1765103491815.png';
import exitImg from '../assets/images/real-world/emergency_exit_sign_1765103511002.png';
import trafficImg from '../assets/images/real-world/traffic_light_red_1765103534988.png';
import guardImg from '../assets/images/real-world/road_guard_rail_1765103565060.png';
import choiceImg from '../assets/images/real-world/multiple_choice_test_1765103581446.png';
import chefImg from '../assets/images/real-world/chefs_knife_chopping_1765103603868.png';
import zenImg from '../assets/images/real-world/zen_garden_minimalist_1765103620604.png';
import tireImg from '../assets/images/real-world/spare_tire_trunk_1765103648144.png';
import boothImg from '../assets/images/real-world/airport_info_booth_1765103662566.png';

// Batch 2 Imports
import dashboardImg from '../assets/images/real-world/car_dashboard_digital_1765106632291.png';
import trafficYellowImg from '../assets/images/real-world/traffic_light_yellow_1765106648536.png';
import mailboxImg from '../assets/images/real-world/mailbox_flag_raised_1765106664252.png';
import kettleImg from '../assets/images/real-world/whistling_kettle_steam_1765106682155.png';
import trashImg from '../assets/images/real-world/trash_can_physical_1765106708191.png';
import calculatorImg from '../assets/images/real-world/calculator_solar_1765106722829.png';
import foldersImg from '../assets/images/real-world/file_folders_drawer_1765106741117.png';
import cartImg from '../assets/images/real-world/shopping_cart_aisle_1765106760424.png';
import eraserImg from '../assets/images/real-world/pencil_eraser_macro_1765106784517.png';

// Manual Imports (User Control)
import uturnImg from '../assets/images/real-world/uturn_sign_manual_1.jpg';
import extinguisherImg from '../assets/images/real-world/fire_extinguisher_manual_1.jpg';
import safetyNetImg from '../assets/images/real-world/safety_net_manual_1.jpg';

export const heuristics = [
    {
        id: "visibility-of-system-status",
        title: "1. Visibility of System Status",
        description: "The design should always keep users informed about what is going on, through appropriate feedback within a reasonable amount of time.",
        whyItMatters: "When users know the current system status, they learn the outcome of their prior interactions and determine next steps. Predictable interactions create trust in the product as well as the brand.",
        digitalExample: {
            title: "File Upload Status",
            description: "A clear progress indicator shows the user exactly what is happening and how long it will take.",
            whyItMatters: "Without this, users might think the app has frozen or failed.",
        },
        realWorldExample: [
            {
                image: elevatorImg,
                title: "Elevator Floor Indicator",
                description: "Elevators show you exactly which floor you are on and which direction you are going.",
                whyItMatters: "Imagine being in an elevator with no lights or numbers. You would feel trapped and anxious."
            },
            {
                image: dashboardImg,
                title: "Car Dashboard",
                description: "The dashboard provides real-time feedback on speed, fuel, and engine temperature.",
                whyItMatters: "Drivers need immediate status updates to operate the vehicle safely and avoid running out of gas."
            },
            {
                image: trafficYellowImg,
                title: "Traffic Lights",
                description: "Red, yellow, and green lights communicate the status of the intersection to all drivers.",
                whyItMatters: "Clear status signals prevent accidents and organize the flow of traffic efficiently."
            },
            {
                image: mailboxImg,
                title: "Mailbox Flag",
                description: "A raised flag on a mailbox indicates to the postal worker that there is outgoing mail.",
                whyItMatters: "It's a simple binary status indicator (mail vs. no mail) that saves time and effort."
            },
            {
                image: kettleImg,
                title: "Whistling Kettle",
                description: "The whistle of a tea kettle is an audible status update that the water has reached boiling point.",
                whyItMatters: "It alerts you that the process is complete even if you aren't looking at the device."
            }
        ],
        designerNotes: [
            "Use progress bars for actions taking longer than 1 second.",
            "Use spinners for quick loading states (under 1 second).",
            "Always provide success or error feedback after an action.",
        ],
    },
    {
        id: "match-between-system-and-real-world",
        title: "2. Match Between System and Real World",
        description: "The design should speak the users' language. Use words, phrases, and concepts familiar to the user, rather than internal jargon.",
        whyItMatters: "Users shouldn't have to look up definitions to use your product. Familiar concepts make the interface intuitive.",
        digitalExample: {
            title: "Trash Can Icon",
            description: "Using a trash can icon for deleting files is a metaphor from the physical world.",
            whyItMatters: "Everyone knows what a trash can is for. 'Purge Database Record' would be confusing.",
        },
        realWorldExample: [
            {
                image: compassImg,
                title: "Compass vs. Maps",
                description: "Digital maps use the same north-up orientation and cardinal directions as a physical compass.",
                whyItMatters: "Using established real-world conventions helps users orient themselves instantly."
            },
            {
                image: trashImg,
                title: "Physical Trash Can",
                description: "The recycle bin icon mimics a physical trash can, indicating where deleted items go.",
                whyItMatters: "It leverages existing knowledge: you throw things in the trash, but you can dig them out if needed."
            },
            {
                image: calculatorImg,
                title: "Physical Calculator",
                description: "Digital calculators mimic the layout and button arrangement of handheld calculators.",
                whyItMatters: "Users don't need to relearn how to perform calculations because the interface is familiar."
            },
            {
                image: foldersImg,
                title: "File Folders",
                description: "Computer file systems use the folder metaphor to organize documents, just like a filing cabinet.",
                whyItMatters: "It makes abstract data storage understandable and manageable for non-technical users."
            },
            {
                image: cartImg,
                title: "Shopping Cart",
                description: "E-commerce sites use a shopping cart metaphor for collecting items before purchase.",
                whyItMatters: "It mirrors the physical experience of shopping in a store, making the process intuitive."
            }
        ],
        designerNotes: [
            "Avoid technical jargon (e.g., use 'Remove' instead of 'Deallocate').",
            "Use icons that resemble their physical counterparts.",
            "Follow real-world conventions (e.g., red for stop/danger).",
        ],
    },
    {
        id: "user-control-and-freedom",
        title: "3. User Control and Freedom",
        description: "Users often perform actions by mistake. They need a clearly marked 'emergency exit' to leave the unwanted state without having to go through an extended process.",
        whyItMatters: "When it's easy to back out of a process or undo an action, users feel more confident exploring the interface.",
        digitalExample: {
            title: "Undo Delete",
            description: "Allowing users to undo a destructive action immediately.",
            whyItMatters: "Mistakes happen. 'Undo' saves users from the fear of permanent error.",
        },
        realWorldExample: [
            {
                image: exitImg,
                title: "Emergency Exit",
                description: "A clearly marked fire exit allows people to leave a building quickly in an emergency.",
                whyItMatters: "It provides a safe way out without requiring complex procedures or permission."
            },
            {
                image: eraserImg,
                title: "Pencil Eraser",
                description: "The eraser on a pencil allows you to immediately undo mistakes while writing.",
                whyItMatters: "It gives the user the freedom to make mistakes and correct them without penalty."
            },
            {
                image: uturnImg,
                title: "U-Turn Sign",
                description: "Road signs permitting U-turns allow drivers to correct navigation errors.",
                whyItMatters: "It offers a legal and safe way to reverse direction if you missed a turn."
            },
            {
                image: extinguisherImg,
                title: "Fire Extinguisher",
                description: "Accessible safety equipment allows anyone to take immediate control in a fire emergency.",
                whyItMatters: "It empowers individuals to act quickly to prevent a small problem from becoming a disaster."
            },
            {
                image: safetyNetImg,
                title: "Safety Net",
                description: "A trapeze safety net provides a fail-safe mechanism if a performer falls.",
                whyItMatters: "It reduces the risk of catastrophic failure, allowing performers to take calculated risks."
            }
        ],
        designerNotes: [
            "Support Undo and Redo.",
            "Provide a clear 'Cancel' button in wizards or forms.",
            "Make sure the 'Back' button works as expected.",
        ],
    },
    {
        id: "consistency-and-standards",
        title: "4. Consistency and Standards",
        description: "Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform and industry conventions.",
        whyItMatters: "Jakob's Law states that users spend most of their time on other sites. They expect your site to work the same way as all the other sites they already know.",
        digitalExample: {
            title: "Button Placement",
            description: "Standard button placement and styling reduces cognitive load.",
            whyItMatters: "If 'Submit' is red and on the left, users will be confused because standard convention is blue/primary and on the right.",
        },
        realWorldExample: [
            {
                image: trafficImg,
                title: "Traffic Lights",
                description: "Red always means stop, and green always means go, no matter where you drive.",
                whyItMatters: "Standardized signals allow drivers to react instantly without thinking."
            },
            {
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop",
                title: "Hotel Check-in",
                description: "The process of checking into a hotel is consistent worldwide: ID, credit card, get key.",
                whyItMatters: "Travelers know exactly what to expect and what to do upon arrival."
            },
            {
                image: "https://images.unsplash.com/photo-1587829741301-dc798b91add1?q=80&w=2665&auto=format&fit=crop",
                title: "QWERTY Keyboard",
                description: "The QWERTY layout is the standard for typing, used on almost all keyboards.",
                whyItMatters: "Typists rely on muscle memory; changing the layout would destroy productivity."
            },
            {
                image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=2576&auto=format&fit=crop",
                title: "Door Knobs",
                description: "Door knobs are consistently placed at the same height and operate by turning.",
                whyItMatters: "You don't need to search for the handle or figure out how to open every door."
            },
            {
                image: "https://images.unsplash.com/photo-1556634202-129a41c93843?q=80&w=2574&auto=format&fit=crop",
                title: "Electrical Outlets",
                description: "Plugs and sockets follow strict regional standards for shape and voltage.",
                whyItMatters: "Standardization ensures safety and compatibility for all electronic devices."
            }
        ],
        designerNotes: [
            "Follow platform guidelines (iOS vs Android).",
            "Use standard icons (e.g., magnifying glass for search).",
            "Maintain internal consistency (same colors/fonts across pages).",
        ],
    },
    {
        id: "error-prevention",
        title: "5. Error Prevention",
        description: "Good error messages are important, but the best designs carefully prevent problems from occurring in the first place.",
        whyItMatters: "Users get frustrated when they make mistakes. Preventing them saves time and builds confidence.",
        digitalExample: {
            title: "Smart Constraints",
            description: "Using a date picker instead of a text field prevents formatting errors.",
            whyItMatters: "Typing 'Feb 30' is an error. Selecting it from a calendar is impossible.",
        },
        realWorldExample: [
            {
                image: guardImg,
                title: "Guard Rails",
                description: "Guard rails on winding roads prevent cars from accidentally driving off the edge.",
                whyItMatters: "They act as a physical barrier to prevent a simple steering error from becoming fatal."
            },
            {
                image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2630&auto=format&fit=crop",
                title: "Child Safety Caps",
                description: "Medicine bottles require a specific push-and-turn motion to open.",
                whyItMatters: "This constraint prevents children from accidentally ingesting harmful substances."
            },
            {
                image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?q=80&w=2670&auto=format&fit=crop",
                title: "Microwave Interlock",
                description: "Microwaves automatically stop running as soon as you open the door.",
                whyItMatters: "This prevents accidental exposure to harmful radiation."
            },
            {
                image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop",
                title: "Overflow Drain",
                description: "Sinks have a secondary hole near the rim to drain water if the main drain is plugged.",
                whyItMatters: "It prevents water from overflowing onto the floor if the tap is left running."
            },
            {
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop",
                title: "Circuit Breaker",
                description: "Circuit breakers automatically cut power when the system is overloaded.",
                whyItMatters: "They prevent electrical fires caused by overheating wires."
            }
        ],
        designerNotes: [
            "Use constraints (e.g., sliders, pickers) instead of free text.",
            "Offer suggestions/autocomplete.",
            "Ask for confirmation before destructive actions.",
        ],
    },
    {
        id: "recognition-rather-than-recall",
        title: "6. Recognition Rather Than Recall",
        description: "Minimize the user's memory load by making elements, actions, and options visible. The user should not have to remember information from one part of the dialogue to another.",
        whyItMatters: "Humans have limited short-term memory. It's easier to recognize something than to recall it from scratch.",
        digitalExample: {
            title: "Recent Searches",
            description: "Showing recent searches helps users pick up where they left off without typing.",
            whyItMatters: "Users don't have to remember what they were looking for; they just see it and click.",
        },
        realWorldExample: [
            {
                image: choiceImg,
                title: "Multiple Choice Test",
                description: "It's easier to pick the right answer from a list than to write an essay from memory.",
                whyItMatters: "Recognition (picking) is faster and less cognitively demanding than Recall (writing)."
            },
            {
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop",
                title: "Restaurant Menu",
                description: "Photos of food help you choose what you want without knowing the exact name.",
                whyItMatters: "Visuals trigger recognition, helping users make decisions faster."
            },
            {
                image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
                title: "App Icons",
                description: "We click the colorful Instagram icon instantly, without reading the label.",
                whyItMatters: "We recognize the logo shape and color faster than we can read the text."
            },
            {
                image: "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=2667&auto=format&fit=crop",
                title: "Speed Dial",
                description: "Seeing a photo of your friend is faster than remembering their phone number.",
                whyItMatters: "Faces are highly recognizable, whereas numbers are abstract and hard to recall."
            },
            {
                image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=2574&auto=format&fit=crop",
                title: "Supermarket Aisles",
                description: "Signs and product packaging help you find items without memorizing aisle numbers.",
                whyItMatters: "You don't need to know where the milk is; you just need to scan for the dairy section."
            }
        ],
        designerNotes: [
            "Use 'Recently Viewed' or 'History' sections.",
            "Show search suggestions as users type.",
            "Visible menus are better than hidden commands.",
        ],
    },
    {
        id: "flexibility-and-efficiency-of-use",
        title: "7. Flexibility and Efficiency of Use",
        description: "Accelerators—unseen by the novice user—may often speed up the interaction for the expert user such that the system can cater to both inexperienced and experienced users.",
        whyItMatters: "Novices need guidance, but experts need speed. A good interface serves both without overwhelming either.",
        digitalExample: {
            title: "Keyboard Shortcuts",
            description: "Allowing users to use keyboard shortcuts (like Ctrl+C) instead of menus.",
            whyItMatters: "Shortcuts allow power users to work much faster than clicking through menus.",
        },
        realWorldExample: [
            {
                image: chefImg,
                title: "Chef's Knife",
                description: "A chef uses a knife differently than a home cook. The tool supports both skill levels.",
                whyItMatters: "The same tool can be used slowly and carefully or quickly and efficiently depending on skill."
            },
            {
                image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=2672&auto=format&fit=crop",
                title: "Express Lane",
                description: "Supermarkets have express lanes for customers with few items.",
                whyItMatters: "Dedicated paths for simple tasks prevent small jobs from getting stuck behind big ones."
            },
            {
                image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=2574&auto=format&fit=crop",
                title: "Car Seat Memory",
                description: "Buttons that instantly restore your preferred seat and mirror positions.",
                whyItMatters: "Personalization saves time by automating repetitive adjustments."
            },
            {
                image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2528&auto=format&fit=crop",
                title: "Camera Modes",
                description: "Cameras offer 'Auto' for beginners and 'Manual' for professionals.",
                whyItMatters: "Flexibility allows the system to grow with the user's skill level."
            },
            {
                image: "https://images.unsplash.com/photo-1449824913929-4bba42b31615?q=80&w=2574&auto=format&fit=crop",
                title: "City Shortcuts",
                description: "Locals know shortcuts to avoid traffic, while tourists stick to main roads.",
                whyItMatters: "Expert knowledge allows for faster navigation without changing the infrastructure."
            }
        ],
        designerNotes: [
            "Provide keyboard shortcuts for common actions.",
            "Allow customization of the interface.",
            "Enable 'Advanced Mode' for complex features.",
        ],
    },
    {
        id: "aesthetic-and-minimalist-design",
        title: "8. Aesthetic and Minimalist Design",
        description: "Interfaces should not contain information which is irrelevant or rarely needed. Every extra unit of information competes with the relevant units of information and diminishes their relative visibility.",
        whyItMatters: "Clutter increases cognitive load. A clean design helps users focus on their primary goal.",
        digitalExample: {
            title: "Clutter Reduction",
            description: "Removing unnecessary elements to focus on the content.",
            whyItMatters: "Users can scan and understand the content much faster when it's not buried in noise.",
        },
        realWorldExample: [
            {
                image: zenImg,
                title: "Zen Garden",
                description: "A space designed with only essential elements to promote peace and focus.",
                whyItMatters: "Visual noise creates mental noise. Minimalism creates clarity."
            },
            {
                image: "https://images.unsplash.com/photo-1518998053901-5348d3969105?q=80&w=2574&auto=format&fit=crop",
                title: "Museum Gallery",
                description: "Art is displayed with ample white space to let each piece stand out.",
                whyItMatters: "Removing distractions allows the user (viewer) to focus on the content (art)."
            },
            {
                image: "https://images.unsplash.com/photo-1560179707-f14e90ef3dab?q=80&w=2574&auto=format&fit=crop",
                title: "Modern Interior",
                description: "Clean lines and open spaces create a sense of calm and order.",
                whyItMatters: "A clutter-free environment reduces stress and improves usability."
            },
            {
                image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?q=80&w=2574&auto=format&fit=crop",
                title: "Fine Dining",
                description: "Small portions, artistically arranged with negative space on the plate.",
                whyItMatters: "Presentation and quality matter more than overwhelming quantity."
            },
            {
                image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2670&auto=format&fit=crop",
                title: "Traffic Signs",
                description: "High contrast and simple symbols allow for instant recognition at speed.",
                whyItMatters: "Only the most critical information is presented to prevent cognitive overload."
            }
        ],
        designerNotes: [
            "Remove anything that isn't essential.",
            "Use whitespace to group related elements.",
            "Follow the signal-to-noise ratio principle.",
        ],
    },
    {
        id: "help-users-recognize-diagnose-and-recover-from-errors",
        title: "9. Help Users Recognize, Diagnose, and Recover from Errors",
        description: "Error messages should be expressed in plain language (no codes), precisely indicate the problem, and constructively suggest a solution.",
        whyItMatters: "Cryptic error messages leave users feeling helpless and frustrated. Good errors empower users to fix the problem.",
        digitalExample: {
            title: "Helpful Error Messages",
            description: "Comparing a generic error code with a helpful, actionable message.",
            whyItMatters: "Telling users 'Error 500' is useless. Telling them 'Server is busy, try again in 5 mins' is helpful.",
        },
        realWorldExample: [
            {
                image: tireImg,
                title: "Spare Tire",
                description: "A flat tire is an error. A spare tire is a built-in recovery mechanism.",
                whyItMatters: "Systems should provide the tools to fix problems when they inevitably occur."
            },
            {
                image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2630&auto=format&fit=crop",
                title: "First Aid Kit",
                description: "Accidents happen. A first aid kit helps you diagnose and treat minor injuries immediately.",
                whyItMatters: "Quick recovery prevents minor errors from becoming major disasters."
            },
            {
                image: "https://images.unsplash.com/photo-1525785967371-87ba44b3e6cf?q=80&w=2673&auto=format&fit=crop",
                title: "Detour Signs",
                description: "When a road is blocked, signs clearly guide drivers to an alternative route.",
                whyItMatters: "Don't just say 'Road Closed'. Tell users where to go instead."
            },
            {
                image: "https://images.unsplash.com/photo-1585185163071-9acb5d57d2d8?q=80&w=2667&auto=format&fit=crop",
                title: "Fire Extinguisher",
                description: "A clearly labeled tool to suppress a fire before it spreads.",
                whyItMatters: "Emergency recovery tools must be visible and easy to use under stress."
            },
            {
                image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=2670&auto=format&fit=crop",
                title: "Pencil Eraser",
                description: "Allows you to easily correct mistakes without starting over.",
                whyItMatters: "Forgiving systems encourage exploration and reduce the fear of making errors."
            }
        ],
        designerNotes: [
            "Use plain language, not error codes.",
            "Be polite and non-blaming.",
            "Suggest a solution (e.g., 'Did you mean...?').",
        ],
    },
    {
        id: "help-and-documentation",
        title: "10. Help and Documentation",
        description: "Even though it is better if the system can be used without documentation, it may be necessary to provide help and documentation. Any such information should be easy to search, focused on the user's task, list concrete steps to be carried out, and not be too large.",
        whyItMatters: "Sometimes users get stuck. Good help is there when they need it, without getting in the way when they don't.",
        digitalExample: {
            title: "Contextual Tooltips",
            description: "Providing help right where the user needs it, instead of forcing them to read a manual.",
            whyItMatters: "Users don't want to leave their task to find answers. Tooltips provide instant clarification.",
        },
        realWorldExample: [
            {
                image: boothImg,
                title: "Information Booth",
                description: "A dedicated place to ask questions when you're lost or confused.",
                whyItMatters: "Human help is the ultimate fallback when self-service fails."
            },
            {
                image: "https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=2670&auto=format&fit=crop",
                title: "Quick Start Guide",
                description: "A simple card with essential instructions, not a 100-page manual.",
                whyItMatters: "Users want to get started immediately, not study a textbook."
            },
            {
                image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2670&auto=format&fit=crop",
                title: "Dictionary",
                description: "A reference tool to look up unknown terms without disrupting reading.",
                whyItMatters: "Contextual definitions help users understand complex content."
            },
            {
                image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop",
                title: "Pilot's Checklist",
                description: "A mandatory list of steps to ensure safety before takeoff.",
                whyItMatters: "Even experts need documentation to ensure critical tasks aren't missed."
            },
            {
                image: "https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=2668&auto=format&fit=crop",
                title: "Emergency Exit Map",
                description: "Clear, visual instructions located exactly where they might be needed.",
                whyItMatters: "Documentation must be accessible in the moment of need."
            }
        ],
        designerNotes: [
            "Use tooltips for unfamiliar icons.",
            "Provide onboarding for new features.",
            "Make help documentation searchable.",
        ],
    },
    // ... (I will add more as we implement them, keeping it simple for now to start)
];
