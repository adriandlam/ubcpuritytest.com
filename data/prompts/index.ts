const GENERAL = [
  // ACADEMIC LIFE (19 questions)
  "Got above an 85 without showing up to class",
  "Missed an exam",
  "Been on academic probation",
  "Failed an exam",
  "Failed a course and had to retake it",
  "Skipped an 8AM class for an entire term",
  "Fallen asleep in the IKB silent section",
  "Submitted an assignment to Canvas less than 1 minute before deadline",
  "Used ChatGPT to write an entire essay",
  "Changed your major more than once",
  "Attended lecture hungover or drunk",
  "Studied for 24+ hours straight during finals season",
  "Had a mental breakdown in a library during finals week",
  "Skipped a midterm because you were too hungover",
  "Cheated on an exam and got away with it",
  "Made a Reddit post complaining about an exam",
  "Complained 5+ times about Workday",
  "Saw an ex in class",
  "Had sex in an IKB study room",

  // RESIDENCE & CAMPUS LIFE (15 questions)
  "Lived in a student residence building for more than one year",
  "Set off the fire alarm in residence while cooking",
  "Pulled a fire alarm in first year dorms",
  "Stolen dining hall food",
  "Been kicked out of a campus building for staying too late",
  "Had a roommate conflict that required an RA to mediate",
  "Lived in the 'worst' residence building (Vanier/Gage)",
  "Slept in a campus building because you missed the last bus home",
  "Made instant ramen in your dorm kettle",
  "Stolen food from the dining hall",
  "Snuck alcohol into the dorms",
  "Hooked up in your dorm while your roommate was sleeping",
  "Hooked up with someone who lived in your residence building",
  "Stolen something from the UBC Bookstore",
  "Had less than $100 in your bank account",

  // TRANSPORTATION & COMMUTING (5 questions)
  "Taken the 25/33/49/R4 while packed in the morning to campus",
  "Been skipped by a bus that was too packed",
  "Been late to class because of transit",
  "Gotten completely soaked walking to class because you forgot an umbrella",
  "Made a Reddit post complaining about having no friends",

  // ICONIC UBC EXPERIENCES (13 questions)
  "Taken a photo with the UBC sign at University Boulevard",
  "Participated in Storm the Wall",
  "Did Storm the Wall",
  "Slid down the hill by the Rose Garden on a lunch tray after it snowed",
  "Witnessed the Engineer's red dye in the fountain prank",
  "Joined the UBC undie run",
  "Met Kip (R.I.P.)",
  "Gone swimming in the fountain",
  "Poured dish soap into the fountain",
  "Vandalized the engineering sign",
  "Streaked across Main Mall",
  "Done a cherry blossom photoshoot",
  "Had your food eaten/attacked by seagulls",

  // WRECK BEACH (3 questions)
  "Joined the UBC Polar Bear Swim at Wreck Beach",
  "Gone skinny dipping at Wreck Beach",
  "Cold plunged at Wreck",
  "Hooked up at Wreck Beach",

  // DATING & HOOKUPS (14 questions)
  "Hooked up with someone from your faculty",
  "Matched with a classmate on a dating app",
  "Had a walk of shame across campus in last night's clothes",
  "Done a walk of shame across campus",
  "Been caught by campus security while getting intimate",
  "Downloaded dating apps just to find UBC students",
  "Matched with a TA or professor on a dating app",
  "Hooked up with more than 3 people in one term",
  "Had someone slide into your UBC Canvas DMs",
  "Caught feelings for your study buddy",
  "Had a relationship end because of faculty rivalry (Eng vs. Arts, etc.)",
  "Made out with someone at Rose Garden",
  "Been with a guy shorter than 5'6, or a girl taller than 6'0",
  "Had more than 2 partners in a school year",

  // PARTY & NIGHTLIFE (14 questions)
  "Attended a frat party",
  "Been to The Pit 3+ weeks in a row",
  "Made out with someone at The Pit",
  "Made out with someone at Koerner's Pub",
  "Blacked out at the club",
  "Used a fake ID to get into the Pit",
  "Pre-gamed before a UBC sporting event",
  "Participated in Arts Week/Science Week/Engineering Week drinking events",
  "Thrown up in a campus bathroom from drinking too much",
  "Gone on a St. Patty's/Halloween bender for more than 3 days",
  "Done the UBC bar crawl (Pit, Koerner's, Gallery)",
  "Partied in the magic forest",
  "Went to the Pit on a Wednesday night",
  "Bought the beer tower at Browns",

  // FOOD & DINING (7 questions)
  "Ate only Tim Hortons for an entire day",
  "Eaten at Uncle Fatih's after 2 AM",
  "Ordered bubble tea delivery to campus more than once a week",
  "Done multiple Big Way runs in a week",
  "Used and deleted Fantuan for a boba deal",
  "Used and deleted Hinbor for a boba deal",
  "Are the 'go-to' person for restaurant recommendations",

  // VANCOUVER & BEYOND (6 questions)
  "Hiked the Grouse Grind hungover",
  "Skipped class to go to Whistler",
  "Spent over $200 at a downtown club in one night",
  "Witnessed a movie being filmed on campus",
  "Complained about housing prices for more than 30 minutes straight",
  "Been caught in the rain without an umbrella more than 5 times",
  "Gotten a haircut from the Nest barber",

  // CAMPUS BUILDINGS & SPACES (2 questions)
  "Hooked up in a campus building after hours",
];

// dropped CPSC 110 because it was too hard
// failed CPSC 110
const SCIENCES = [
  // Core Science Experiences (15 questions)
  "Failed a required science course and had to retake it",
  "Changed your major within Science at least once",
  "Cried in a science building bathroom over a midterm or final",
  "Pulled an all-nighter in the Life Sciences Building (LSB)",
  "Spent over 8 consecutive hours in a lab",
  "Had a mental breakdown over organic chemistry",
  "Memorized the periodic table for fun, not just for a test",
  "Slept in the Abdul Ladha Science Student Centre during finals week",
  "Studied in the Beaty Biodiversity Museum to avoid crowds",
  "Calculated your required exam mark to pass a course",
  "Had to drop a course after bombing the first midterm",
  "Been on academic probation in Sciences",
  "Switched from Sciences to another faculty entirely and then came back",
  "Deliberately avoided telling people your major because you were scared of the stereotype",
  "Submitted an assignment at 11:59pm with less than a minute to spare",

  // Faculty Buildings & Locations (12 questions)
  "Spent more than 5 hours in the LIFE/Hennings/LSC/Chemistry/MATH/BIOL buildings in one day",
  "Spent a full night in the Woodward library during finals",
  "Taken a nap on the couches in the Integrated Sciences Building (ISB)",
  "Explored the weird tunnel between the Chemistry and Physics buildings",
  "Studied at the Physics & Astronomy reading room",
  "Crashed in the Abdul Ladha Science Student Centre when everywhere else was full",
  "Spent more time in your lab than your actual residence",
  "Eaten lunch at the Triple O's by Sauder more than 10 times in a term",
  "Gotten lost in the basement of the Chemistry building",
  "Used the secret bathrooms in the Undergraduate Chemistry Society (UCS) lounge",
  "Found a hidden/quiet study spot in a science building that you've kept secret",
  "Used the TRIUMF particle accelerator",

  // Lab & Research Experiences (15 questions)
  "Broken laboratory equipment worth over $100",
  "Lost track of time in a lab and realized you missed dinner",
  "Accidentally created a foul smell during an experiment that cleared the lab",
  "Spilled something on yourself that required an emergency shower",
  "Pipetted with your mouth despite being told never to do so",
  "Used lab equipment for non-academic purposes (like making food)",
  "Operated lab equipment while sleep-deprived",
  "Faked lab data when your experiment didn't work",
  "Worked as a lab assistant/TA for a science course",
  "Presented research at an undergraduate conference",
  "Been an author on a scientific publication",
  "Conducted independent research with a professor",
  "Made a major calculation error that ruined your entire experiment",
  "Spent a summer doing research on campus instead of going home",
  "Had to redo an entire lab because you forgot to save your data",

  // Science Courses & Academics (15 questions)
  "Taken CHEM 233 (Organic Chemistry)",
  "Failed a MATH course",
  "Taken more than 5 lab courses in one year",
  "Intentionally registered for a specific professor's section",
  "Avoided a specific professor's section at all costs",
  "Taken more than 18 credits in one term",
  "Actually enjoyed a statistics course",
  "Used ChatGPT to write a lab report",
  "Studied for an exam while walking to the exam",
  "Cheated on a science exam and didn't get caught",
  "Took a bird course outside of sciences for an easy A",
  "Complained about pre-med students to your friends",
  "Been to more than 3 professor office hours in one week",
  "Attended a lecture you weren't registered for because the professor was better",
  "Corrected a professor during a lecture",

  // UBC Science Culture (13 questions)
  "Participated in Science Week events",
  "Attended a Science Undergraduate Society (SUS) event",
  "Been involved with your departmental club (MathSoc, BIOSOC, PHYSSOC, etc.)",
  "Worn a lab coat outside of lab to look cool",
  "Explained a complex science concept to someone at a party",
  "Made a joke about Arts students having it easy",
  "Bond with someone over how difficult your shared science course is",
  "Been part of Science Frosh/Imagine Day",
  "Used the phrase 'I have lab' to get out of social plans",
  "Participated in the Science Case Competition",
  "Attended a science-related conference at UBC",
  "Been to the Physics Orchestra performance",
  "Lived in Totem/Vanier/Place Vanier because of its proximity to science buildings",

  // Health & Coping Mechanisms (10 questions)
  "Consumed dangerous amounts of caffeine during finals season",
  "Developed an unhealthy meal schedule due to lab timing",
  "Had a panic attack about career/grad school prospects",
  "Calculated exactly how many points you need on the final to pass",
  "Stress-bought science merchandise from the UBC Bookstore",
  "Skipped multiple meals because you were studying",
  "Explained to your parents why your GPA dropped below 3.5",
  "Used the UBC Wellness Centre services because of academic stress",
  "Changed your sleep schedule completely to accommodate a morning lab",
  "Taken caffeine pills to stay awake for studying",

  // Science Social Life (10 questions)
  "Dated someone in your program",
  "Hooked up with someone you met in a science class",
  "Formed a study group that became actual friends",
  "Developed a crush on your TA",
  "Attended a science department social event just for the free food",
  "Participated in the Science Formal/Ball",
  "Made friends with someone specifically because they had good notes",
  "Gone straight from lab to a party without changing clothes",
  "Recognized someone from your 400-person lecture at a party",
  "Used a science pick-up line on someone and it actually worked",

  // Science Pride & Traditions (10 questions)
  "Own UBC Science merchandise (hoodie, t-shirt, etc.)",
  "Participated in Science Olympics",
  "Attended the Great Science Debate",
  "Taken part in the Chemistry Magic Show",
  "Volunteered for Science outreach programs",
  "Joined a Science student delegation to an external competition",
  "Helped organize a Science department event",
  "Represented UBC Sciences at a high school recruitment event",
  "Been featured on the UBC Science social media",
  "Participated in a departmental traditions (Physics Beer Garden, Chem social, etc.)",
];

const SAUDER = [
  // ACADEMIC LIFE (20 questions)
  "Been told by a prof to put your lid down",
  "Skipped over 3 classes despite the syllabus saying you'd fail",
  "Relied on Wize prep to pass a class",
  "Failed MATH 100/104",
  "Failed MATH 101/105",
  "Got below a 60 in either MATH 100 or MATH 101",
  "Failed a written exam",
  "Never been to office hours",
  "Passed a class because of ChatGPT",
  "Been part of a WeChat group that shares exam answers",
  "Had to give Berkowitz chocolate for being late",
  "Did nothing for a group project and still got credit",
  "Got rejected from your first choice specialization",
  "Had trouble calculating the slope of a line on an exam",
  "Studied at CLC for 2+ hours and got absolutely nothing done",
  "Average has dropped 25%+ since highschool",
  "Slept overnight in Sauder",
  "Given a presentation hungover",
  "Given a presentation on under 6 hours of sleep",
  "Underdressed for your COMM 101 presentation",

  // SAUDER SPACES (16 questions)
  "Studied at the treadmill desk in CLC",
  "Been kicked out of CLC by the flashing lights",
  "Been kicked out of the CLC computer lab by the librarian",
  "Kicked someone out of a study room you didn't book",
  "Been called out by the librarian for eating food in CLC",
  "Used the Henry Angus elevator just to avoid walking up one flight of stairs",
  "Tried to use the coffee machine while it was broken",
  "Cried in a bathroom stall",
  "Purchased food from the Sauder store",
  "Bought coffee from Loafe at least once per day",
  "Bought coffee from Tims at least once per day",
  "Waited over 30 minutes at Tims",
  "Purchased Sauder merch",
  "Taken food from HEWE without registering",
  "Gambled in CLC",
  "Done a coffee chat in Loafe",

  // POITS CULTURE (4 questions)
  "Been to POITS",
  "Been to POITS more than 2 times",
  "Been to POITS more than 5 times",
  "Blacked out at POITS",
  "Taken someone home from POITS",

  // SOCIAL LIFE & DATING (7 questions)
  "Matched with a Sauder student on a dating app",
  "Matched with a TA on a dating app",
  "Attended a case comp just to hook up",
  "Actually hooked up with someone at a case comp",
  "Attended an orgy at a case comp",
  "Coffee chatted someone you thought was cute",
  "Took detailed notes at a social gathering",

  // CAREER & NETWORKING (19 questions)
  "Humble bragged about your internship in class",
  "Logged into iClicker when you weren't in class",
  "Done more than 3 coffee chats in a day",
  "Done more than 3 interviews in a day",
  "Been ghosted by an upper-year student on LinkedIn",
  "Ghosted a lower-year student asking for advice on LinkedIn",
  "Used a free CUS headshot as your LinkedIn profile pic",
  "Faked your LinkedIn experiences",
  "Made it to fourth year without an internship",
  "Done an unpaid internship",
  "Been fired from an internship",
  "Lied in a co-op interview",
  "Lied in a job interview",
  "Introduced yourself by bragging about where you've worked",
  "Stalked someone on LinkedIn",
  "Have bragged about how much money you make",
  "Claimed your summer 'consulting' job wasn't just data entry",
  "Added someone on LinkedIn immediately after meeting them",
  "Brought a company-branded water bottle to campus",

  // RESUME & CLUB LIFE (7 questions)
  "Been rejected by every club you applied for",
  "Been asked to do a panel for a Sauder class",
  "Added a club role to your resume despite not doing anything",
  "Have more clubs than internships on your resume",
  "Won a case competition",
  "Waited over 2 months for the CUS to process a refund",
  "Paid for co-op and still couldn't get a job",

  // BUSINESS CULTURE & STEREOTYPES (24 questions)
  "Pitched a business idea at a party",
  "Described yourself as a 'go-getter' or 'self-starter' in a non-ironic way",
  "Avoided telling people you're in Sauder",
  "Been called a 'Sauder Snake'",
  "Have an American Express card",
  "Used the phrase 'circle back' or 'touch base' unironically",
  "Gambled in class",
  "In a fantasy league",
  "Own 3+ quarter zips",
  "Used an acronym like 'EOD' in a casual conversation",
  "Decorated your room with motivational quotes",
  "Send a calendar invite or used Calendly for a friendly hangout",
  "Actually joined the business frat",
  "Attended a business frat event",
  "Have mentioned your parents pay for school without being asked",
  "Group roasted someone's LinkedIn profile",
  "Made fun of Arts students for being jobless",
  "Made a personal budget spreadsheet",
  "Can use Excel without a mouse",
  "Wanted to work at one of: Deloitte, PWC, KPMG, EY",
  "Talked about dropping out to start a 'startup'",
  "Own a Marc Jacobs tote bag",
  "Own a Goyard tote bag",
  "Own a Canada Goose jacket",
  "Own an Arcteryx jacket or vest",
  "Own a Patagonia vest",
];

export { GENERAL, SCIENCES, SAUDER };
