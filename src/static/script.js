const diseases = [
    {
      disease: "Drug Reaction",
      description: "An adverse drug reaction (ADR) is an injury caused by taking Medication. ADRs may occur Following a single dose or prolonged administration of a drug or result from the combination of two or more drugs.",
      symptom1: "Itching",
      symptom2: "Skin rash",
      symptom3: "Stomach pain",
      symptom4: "Burning micturition",
      symptom5: "Spotting  urination",
      precaution1: "Stop irritation",
      precaution2: "Consult nearest hospita",
      precaution3: "Stop taking drug",
      precaution4: "Follow up"
    },
    {
      disease: "Malaria",
      description: "An infectious disase caused by protozoan parasites from the Plasmodium family that can be transmitted by the bite of the Anopheles mosquito or by a contaminated needle or transfusion. Falciparum malaria is the most deadly type.",
      symptom1: "Chills",
      symptom2: "Vomiting",
      symptom3: "High fever",
      symptom4: "Sweating",
      symptom5: "Headache",
      precaution1: "Consult nearest hospital",
      precaution2: "Avoid oily food",
      precaution3: "Avoid non veg food",
      precaution4: "Keep mosquitoes out"
    },
    {
      disease: "Allergy",
      description: "An allergy is an immune system response to a foreign substance that's not typically harmful to your body.They can include certain foods, pollen, or pet dander. Your immune system's job is to Keep you healthy by fighting harmful pathogens.",
      symptom1: "Continuous sneezing",
      symptom2: "Chills",
      symptom3: "Watering from eyes",
      symptom4: "Shivering",
      symptom5: "",
      precaution1: "Apply calamine",
      precaution2: "Cover area with bandage",
      precaution3: "Use ice to compress Itching",
      precaution4: ""
    },
    {
      disease: "Hypothyroidism",
      description: "Hypothyroidism, also Called underactive thyroid or low thyroid, is a disorder of the endocrine system in which the thyroid gland does not produce enough thyroid hormone.",
      symptom1: "Fatigue",
      symptom2: "Weight gain",
      symptom3: "Cold hands and feets",
      symptom4: "Mood swings",
      symptom5: "Lethargy",
      precaution1: "Reduce stress",
      precaution2: "Exercise",
      precaution3: "Eat healthy",
      precaution4: "Get proper sleep"
    },
    {
      disease: "Psoriasis",
      description: "Psoriasis is a common skin disorder that forms thick, red, bumpy patches covered with silvery scales. They can pop up anywhere, but most appear on the scalp, elbows, knees, and lower Back. Psoriasis can't be passed from person to person. It does sometimes happen in members of the same family.",
      symptom1: "Skin rash",
      symptom2: "Joint pain",
      symptom3: "Skin peeling",
      symptom4: "Inflammatory nails",
      symptom5: "",
      precaution1: "Wash hands with Warm soapy water",
      precaution2: "Stop bleeding using pressure",
      precaution3: "Consult doctor",
      precaution4: "Salt baths"
    },
    {
      disease: "GERD",
      description: "Gastroesophageal reflux disease, or GERD, is a digestive disorder that affects the lower esophageal sphincter (LES), the ring of Muscle between the esophagus and stomach. Many people, including pregnant women, suffer from heartburn or acid Indigestion caused by GERD.",
      symptom1: "Stomach pain",
      symptom2: "Acidity",
      symptom3: "Cough",
      symptom4: "Chest pain",
      symptom5: "Ulcers on tongue",
      precaution1: "Avoid fatty spicy food",
      precaution2: "Avoid lying down after Eating",
      precaution3: "Maintain healthy Weight",
      precaution4: "Exercise"
    },
    {
      disease: "Chronic cholestasis",
      description: "Chronic cholestatic diseases, whether occurring in infancy, childhood or adulthood, are characterized by defective bile acid transport from the liver to the intestine, which is caused by primary damage to the biliary epithelium in most cases",
      symptom1: "Vomiting",
      symptom2: "Yellowish skin",
      symptom3: "Nausea",
      symptom4: "Loss of appetite",
      symptom5: "Itching",
      precaution1: "Cold baths",
      precaution2: "Anti itch medicine",
      precaution3: "Consult doctor",
      precaution4: "Eat healthy"
    },
    {
      disease: "hepatitis A",
      description: "Hepatitis A is a highly contagious liver infection caused by the hepatitis A virus. The virus is one of several types of hepatitis virUses that cause inflammation and affect your liver's ability to function.",
      symptom1: "Joint pain",
      symptom2: "Vomiting",
      symptom3: "Yellowish skin",
      symptom4: "Dark urine",
      symptom5: " Diarrhoea",
      precaution1: "Consult nearest hospital",
      precaution2: "Wash hands through",
      precaution3: "Avoid fatty spicy food",
      precaution4: "Medication"
    },
    {
      disease: "Osteoarthristis",
      description: "Osteoarthritis is the most common form of arthritis, affecting millions of people worldwide. It occurs when the protective cartilage that cushions the ends of your bones wears down over time.",
      symptom1: "Joint pain",
      symptom2: "Neck pain",
      symptom3: "Knee pain",
      symptom4: "Swelling joints",
      symptom5: "Painful walking",
      precaution1: "Acetaminophen",
      precaution2: "Consult nearest hospital",
      precaution3: "Follow up",
      precaution4: "Salt baths"
    },
    {
      disease: "(vertigo) Paroymsal Positional Vertigo",
      description: "Benign paroxysmal positional vertigo (BPPV) is one of the most common causes of vertigo â€” the sudden sensation that you're spinning or that the inside of your head is spinning. Benign paroxysmal positional vertigo causes brief episodes of mild to intense dizziness.",
      symptom1: "Vomiting",
      symptom2: "Headache",
      symptom3: "Nausea",
      symptom4: "Spinning Movements",
      symptom5: "Unsteadiness",
      precaution1: "Lie down",
      precaution2: "Avoid sudden change in body",
      precaution3: "Avoid abrupt head movment",
      precaution4: "Relax"
    },
    {
      disease: "Hypoglycemia",
      description: "Hypoglycemia is a condition in which your blood sugar (glucose) level is lower than normal. Glucose is your body's main energy source. Hypoglycemia is often related to diabetes trEatment. But other drugs and a variety of conditions, many rare, can cause low blood sugar in people who don't have diabetes.",
      symptom1: "Fatigue",
      symptom2: "Anxiety",
      symptom3: "Sweating",
      symptom4: "Palpitations",
      symptom5: "Excessive hunger",
      precaution1: "Lie down on side",
      precaution2: "Check in pulse",
      precaution3: "Drink sugary Drinks",
      precaution4: "Consult doctor"
    },
    {
      disease: "Acne",
      description: "Acne vulgaris is the formation of comedones, papules, pustules, nodules, and/or cysts as a result of obstruction and inflammation of pilosebaceous units (hair follicles and their accompanying sebaceous gland). Acne develops on the face and upper trunk. It most often affects adolescents.",
      symptom1: "Skin rash",
      symptom2: "Pus filled pimples",
      symptom3: "BLackheads",
      symptom4: "Scurring",
      symptom5: "",
      precaution1: "Bath twice",
      precaution2: "Avoid fatty spicy food",
      precaution3: "Drink plenty of water",
      precaution4: "Avoid too many products"
    },
    {
      disease: "Diabetes",
      description: "Diabetes is a disease that occurs when your blood glucose, also Called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you Eat. Insulin, a hormone made by the pancreas, helps glucose from food Get into your cells to be Used for energy.",
      symptom1: "irregular sugar level",
      symptom2: "Obesity",
      symptom3: "Increased appetite",
      symptom4: "Polyuria",
      symptom5: "Lethargy",
      precaution1: "Have balanced diet",
      precaution2: "Exercise",
      precaution3: "Consult doctor",
      precaution4: "Follow up"
    },
    {
      disease: "Impetigo",
      description: "Impetigo (im-puh-TIE-go) is a common and highly contagious skin infection that mainly affects infants and children. Impetigo usually appears as red sores on the face, especially around a child's nose and mouth, and on hands and feet. The sores burst and develop honey-colored crusts.",
      symptom1: "Blister",
      symptom2: "High fever",
      symptom3: "Skin rash",
      symptom4: "Itching",
      symptom5: "",
      precaution1: "Soak affected area in Warm water",
      precaution2: "Use Antibiotics",
      precaution3: "Remove scabs with wet compressed cloth",
      precaution4: "Consult doctor"
    },
    {
      disease: "Hypertension",
      description: "Hypertension (HTN or HT), also known as high blood pressure (HBP), is a long-term medical condition in which the blood pressure in the arteries is persistently elevated. High blood pressure typically does not cause symptoms.",
      symptom1: "Dizziness",
      symptom2: "Lack of concentration",
      symptom3: "Chest pain",
      symptom4: "Headache",
      symptom5: "Loss of balance",
      precaution1: "Meditation",
      precaution2: "Salt baths",
      precaution3: "Reduce stress",
      precaution4: "Get proper sleep"
    },
    {
      disease: "Peptic ulcer disease",
      description: "Peptic ulcer disease (PUD) is a break in the inner lining of the stomach, the first part of the small intestine, or sometimes the lower esophagus. An ulcer in the stomach is called a gastric ulcer, while one in the first part of the intestines is a duodenal ulcer.",
      symptom1: "Vomiting",
      symptom2: "Loss of appetite",
      symptom3: "Abdominal pain",
      symptom4: "Internal Itching",
      symptom5: "Passage of gases",
      precaution1: "Avoid fatty spicy food",
      precaution2: "Consume probiotic food",
      precaution3: "Eliminate milk",
      precaution4: "Limit alcohol"
    },
    {
      disease: "Dimorphic hemorrhoids(piles)",
      description: "Hemorrhoids, also spelled haemorrhoids, are vascular structures in the anal canal. Other names, Haemorrhoids, piles, hemorrhoidal disease .",
      symptom1: "constipation",
      symptom2: "pain in anal region",
      symptom3: "bloody stool",
      symptom4: "Irritation in anus",
      symptom5: "",
      precaution1: "Avoid fatty spicy food",
      precaution2: "Consume witch hazel",
      precaution3: "Warm bath with epsom Salt",
      precaution4: "Consume alovera juice"
    },
    {
      disease: "Common Cold",
      description: "The common cold is a viral infection of your nose and Throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of virUses can cause a common cold.",
      symptom1: "Continuous sneezing",
      symptom2: "Fatigue",
      symptom3: "Cough",
      symptom4: "Phlegm",
      symptom5: "Throat Irritation",
      precaution1: "Drink vitamin c rich Drinks",
      precaution2: "Take vapour",
      precaution3: "Avoid cold food",
      precaution4: "Keep fever in check"
    },
    {
      disease: "Chicken pox",
      description: "Chickenpox is a highly contagious disease caused by the varicella-zoster virus (VZV). It can cause an itchy, Blister-like rash. The rash first appears on the chest, Back, and face, and then spreads over the entire body, causing between 250 and 500 itchy Blisters.",
      symptom1: "Itching",
      symptom2: "Skin rash",
      symptom3: "Lethargy",
      symptom4: "Swelled lymph nodes",
      symptom5: "Malaise",
      precaution1: "Use neem in bathing ",
      precaution2: "Consume neem leaves",
      precaution3: "Take vaccine",
      precaution4: "Avoid public places"
    },
    {
      disease: "Cervical spondylosis",
      description: "Cervical spondylosis is a general term for age-related wear and tear affecting the spinal disks in your neck. As the disks dehydrate and shrink, signs of osteoarthritis develop, including bony projections along the edges of bones (bone spurs).",
      symptom1: "Back pain",
      symptom2: "Weakness in limbs",
      symptom3: "Neck pain",
      symptom4: "Dizziness",
      symptom5: "Loss of balance",
      precaution1: "Use hEating pad or cold pack",
      precaution2: "Exercise",
      precaution3: "Take otc pain reliver",
      precaution4: "Consult doctor"
    },
    {
      disease: "Hyperthyroidism",
      description: "Hyperthyroidism (overactive thyroid) occurs when your thyroid gland produces too much of the hormone thyroxine. Hyperthyroidism can accelerate your body's metabolism, causing unintentional Weight Loss and a rapid or irregular heartbeat.",
      symptom1: "Weight Loss",
      symptom2: "Restlessness",
      symptom3: "Mood swings",
      symptom4: "Excessive hunger",
      symptom5: "abnormal menstruation",
      precaution1: "Eat healthy",
      precaution2: "Massage",
      precaution3: "Use lemon balm",
      precaution4: "Take radioactive iodine trEatment"
    },
    {
      disease: "Urinary tract infection",
      description: "Urinary tract infection: An infection of the kidney, ureter, bladder, or urethra. Abbreviated UTI. Not everyone with a UTI has symptoms, but common symptoms include a frequent urge to urinate and pain or burning when urinating.",
      symptom1: "Bladder discomfort",
      symptom2: "Foul smell of urine",
      symptom3: "Continuous feel of urine",
      symptom4: "burning micturition",
      symptom5: "",
      precaution1: "Drink plenty of water",
      precaution2: "IncrEase vitamin c inTake",
      precaution3: "Drink cranberry juice",
      precaution4: "Take probiotics"
    },
    {
      disease: "Varicose veins",
      description: "A vein that has enlarged and twisted, often appearing as a bulging, blue blood vessel that is clearly visible through the skin. Varicose veins are most common in older adults, particularly women, and occur especially on the legs.",
      symptom1: "Fatigue",
      symptom2: "cramps",
      symptom3: "Swollen legs",
      symptom4: "Bruising",
      symptom5: "Obesity",
      precaution1: "Lie down flat and raise the leg high",
      precaution2: "Use oinments",
      precaution3: "Use vein compression",
      precaution4: "Don't stand still for long"
    },
    {
      disease: "AIDS",
      description: "Acquired immunodeficiency syndrome (AIDS) is a chronic, potentially life-thrEatening condition caused by the human immunodeficiency virus (HIV). By damaging your immune system, HIV interferes with your body's ability to fight infection and disease.",
      symptom1: "Muscle wasting",
      symptom2: "patches in Throat",
      symptom3: "High fever",
      symptom4: "white tongue",
      symptom5: "Skin rash",
      precaution1: "Avoid open cuts",
      precaution2: "wear ppe if possible",
      precaution3: "Consult doctor",
      precaution4: "Follow up"
    },
    {
      disease: "Paralysis (brain hemorrhage)",
      description: "Intracerebral hemorrhage (ICH) is when blood suddenly bursts into brain tissue, causing damage to your brain. Symptoms usually appear suddenly during ICH. They include Headache, Weakness, confusion, and paralysis, particularly on one side of your body.",
      symptom1: "Altered sensorium",
      symptom2: "Headache",
      symptom3: "Vomiting",
      symptom4: "Weakness of one body side",
      symptom5: "",
      precaution1: "Massage",
      precaution2: "Eat healthy",
      precaution3: "Exercise",
      precaution4: "Consult doctor"
    },
    {
      disease: "Typhoid",
      description: "An acute illness characterized by fever caused by infection with the bacterium Salmonella typhi. Typhoid fever has an insidious onset, with fever, Headache, constipation, Malaise,  Chills, and Muscle pain. Diarrhea is uncommon, and Vomiting is not usually severe.",
      symptom1: "Vomiting",
      symptom2: "constipation",
      symptom3: "Nausea",
      symptom4: "Diarrhoea",
      symptom5: "Headache",
      precaution1: "Eat high calorie vegitables",
      precaution2: "antiboitic therapy",
      precaution3: "Consult doctor",
      precaution4: "Medication"
    },
    {
      disease: "Hepatitis B",
      description: "Hepatitis B is an infection of your liver. It can cause scarring of the organ, liver failure, and cancer. It can be fatal if it isn't trEated. It's spread when people come in contact with the blood, open sores, or body fluids of someone who has the hepatitis B virus.",
      symptom1: "Itching",
      symptom2: "Lethargy",
      symptom3: "Malaise",
      symptom4: "Yellow urine",
      symptom5: "Abdominal pain",
      precaution1: "Consult nearest hospital",
      precaution2: "vaccination",
      precaution3: "Eat healthy",
      precaution4: "Medication"
    },
    {
      disease: "Fungal infection",
      description: "In humans, fungal infections occur when an invading fungus Takes over an area of the body and is too much for the immune system to handle. Fungi can live in the air, soil, water, and plants. There are also some fungi that live naturally in the human body. Like many microbes, there are helpful fungi and harmful fungi.",
      symptom1: "Itching",
      symptom2: "Dischromic  patches",
      symptom3: "Skin rash",
      symptom4: "Nodal skin eruptions",
      symptom5: "",
      precaution1: "bath twice",
      precaution2: "Use detol or neem in bathing water",
      precaution3: "Keep infected area dry",
      precaution4: "Use clean cloths"
    },
    {
      disease: "Hepatitis C",
      description: "Inflammation of the liver due to the hepatitis C virus (HCV), which is usually spread via blood transfusion (rare), hemodialysis, and needle sticks. The damage hepatitis C does to the liver can lead to cirrhosis and its complications as well as cancer.",
      symptom1: "Fatigue",
      symptom2: "Nausea",
      symptom3: "Loss of appetite",
      symptom4: "",
      symptom5: "",
      precaution1: "Consult nearest hospital",
      precaution2: "Vaccination",
      precaution3: "Eat healthy",
      precaution4: "Medication"
    },
    {
      disease: "Migraine",
      description: "A migraine can cause severe throbbing pain or a pulsing sensation, usually on one side of the head. It's often accompanied byNausea, Vomiting, and extreme sensitivity to light and sound. Migraine attacks can last for hours to days, and the pain can be so severe that it interferes with your daily activities.",
      symptom1: "Acidity",
      symptom2: "Indigestion",
      symptom3: "Headache",
      symptom4: "Stiff neck",
      symptom5: "Visual disturbances",
      precaution1: "Meditation",
      precaution2: "Reduce stress",
      precaution3: "Use poloroid glasses in sun",
      precaution4: "Consult doctor"
    },
    {
      disease: "Bronchial Asthma",
      description: "Bronchial asthma is a medical condition which causes the airway path of the lungs to swell and narrow. Due to this Swelling, the air path produces excess mucus making it hard to brEathe, which results in Coughing, short brEath, and wheezing. The disease is chronic and interferes with daily working.",
      symptom1: "Fatigue",
      symptom2: "Cough",
      symptom3: "Breathlessness",
      symptom4: "Mucoid sputum",
      symptom5: "",
      precaution1: "Switch to loose cloothing",
      precaution2: "Take deep breaths",
      precaution3: "Get away from trigger",
      precaution4: "Seek help"
    },
    {
      disease: "Alcoholic hepatitis",
      description: "Alcoholic hepatitis is a diseased, inflammatory condition of the liver caused by heavy alcohol consumption over an extended period of time. It's also aggravated by binge Drinking and ongoing alcohol Use. If you develop this condition, you must Stop Drinking alcohol",
      symptom1: "Swelling of stomach",
      symptom2: "Distention of abdomen",
      symptom3: "Yellowish skin",
      symptom4: "Vomiting",
      symptom5: "",
      precaution1: "Stop alcohol consumption",
      precaution2: "Consult doctor",
      precaution3: "Medication",
      precaution4: "Follow up"
    },
    {
      disease: "Jaundice",
      description: "Yellow staining of the skin and sclerae (the whites of the eyes) by abnormally high blood levels of the bile pigment bilirubin. The Yellowing extends to other tissues and body fluids. Jaundice was once Called the 'morbus regius' (the regal disease) in the beLief that only the touch of a king could cure it",
      symptom1: "Weight Loss",
      symptom2: "Yellowish skin",
      symptom3: "Abdominal pain",
      symptom4: "High fever",
      symptom5: "",
      precaution1: "Drink plenty of water",
      precaution2: "Consume milk thistle",
      precaution3: "Eat fruits and high fiberous food",
      precaution4: "Medication"
    },
    {
      disease: "Hepatitis E",
      description: "A rare form of liver inflammation caused by infection with the hepatitis E virus (HEV). It is transmitted via food or Drink handled by an infected person or through infected water suppLies in areas where fecal matter may Get into the water. Hepatitis E does not cause chronic liver disease.",
      symptom1: "Coma",
      symptom2: "Stomach bleeding",
      symptom3: "Nausea",
      symptom4: "Dark urine",
      symptom5: "Yellowish skin",
      precaution1: "Stop alcohol consumption",
      precaution2: "Rest",
      precaution3: "Consult doctor",
      precaution4: "Medication"
    },
    {
      disease: "Dengue",
      description: "an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by Headache, severe Joint pain, and a rash. â€” Called also breakbone fever, dengue fever.",
      symptom1: "Skin rash",
      symptom2: "Back pain",
      symptom3: "High fever",
      symptom4: "Nausea",
      symptom5: "Malaise",
      precaution1: "Drink papaya leaf juice",
      precaution2: "Avoid fatty spicy food",
      precaution3: "Keep mosquitos away",
      precaution4: "Keep hydrated"
    },
    {
      disease: "Hepatitis D",
      description: "Hepatitis D, also known as the hepatitis delta virus, is an infection that causes the liver to become inflamed. This Swelling can impair liver function and cause long-term liver problems, including liver scarring and cancer. The condition is caused by the hepatitis D virus (HDV).",
      symptom1: "Yellowish skin",
      symptom2: "Dark urine",
      symptom3: "Abdominal pain",
      symptom4: "Loss of appetite",
      symptom5: "Joint pain",
      precaution1: "Consult doctor",
      precaution2: "Medication",
      precaution3: "Eat healthy",
      precaution4: "Follow up"
    },
    {
      disease: "Heart attack",
      description: "The death of heart Muscle due to the Loss of blood supply. The Loss of blood supply is usually caused by a complete blockage of a coronary artery, one of the arteries that suppLies blood to the heart Muscle.",
      symptom1: "Chest pain",
      symptom2: "Sweating",
      symptom3: "Breathlessness",
      symptom4: "Vomiting",
      symptom5: "",
      precaution1: "Call ambulance",
      precaution2: "chew or swallow asprin",
      precaution3: "Keep calm",
      precaution4: ""
    },
    {
      disease: "Pneumonia",
      description: "Pneumonia is an infection in one or both lungs. Bacteria, virUses, and fungi cause it. The infection causes inflammation in the air sacs in your lungs, which are Called alveoli. The alveoli fill with fluid or pus, making it difficult to brEathe.",
      symptom1: "Chills",
      symptom2: "Cough",
      symptom3: "High fever",
      symptom4: "Breathlessness",
      symptom5: "Fast heart rate",
      precaution1: "Consult doctor",
      precaution2: "Medication",
      precaution3: "Rest",
      precaution4: "Follow up"
    },
    {
      disease: "Arthritis",
      description: "Arthritis is the Swelling and tenderness of one or more of your joints. The main symptoms of arthritis are Joint pain and Stiffness, which typically worsen with age. The most common types of arthritis are osteoarthritis and rheumatoid arthritis.",
      symptom1: "Muscle Weakness",
      symptom2: "Stiff neck",
      symptom3: "Swelling joints",
      symptom4: "Painful walking",
      symptom5: "Movement stiffness",
      precaution1: "Exercise",
      precaution2: "Use hot and cold therapy",
      precaution3: "Try acupuncture",
      precaution4: "Massage"
    },
    {
      disease: "Gastroenteritis",
      description: "Gastroenteritis is an inflammation of the digestive tract, particularly the stomach, and large and small intestines. Viral and bacterial gastroenteritis are intestinal infections associated with symptoms of diarrhea , Abdominal cramps,Nausea , and Vomiting .",
      symptom1: "Sunken eyes",
      symptom2: "dehydration",
      symptom3: "Vomiting",
      symptom4: "Diarrhoea",
      symptom5: "",
      precaution1: "Stop Eating solid food for while",
      precaution2: "Try taking small sips of water",
      precaution3: "Rest",
      precaution4: "Ease Back into Eating"
    },
    {
      disease: "Tuberculosis",
      description: "Tuberculosis (TB) is an infectious disease usually caused by Mycobacterium tuberculosis (MTB) bacteria. Tuberculosis generally affects the lungs, but can also affect other parts of the body. Most infections show no symptoms, in which case it is known as latent tuberculosis.",
      symptom1: "Vomiting",
      symptom2: "Weight Loss",
      symptom3: "Cough",
      symptom4: "Breathlessness",
      symptom5: "Chest pain",
      precaution1: "Cover mouth",
      precaution2: "Consult doctor",
      precaution3: "Medication",
      precaution4: "Rest"
    },
    {
      disease: "Appendicitis",
      description: "Appendicitis is the painful swelling of the appendix. The appendix is a small, thin pouch about 5 - 10 cm (2 -4 inches) long. It is connected to the large intestine where stools (faeces) are formed. Nobody knows why we have an appendix, but removing it isn't harmful.",
      symptom1: "Coughing",
      symptom2: "Appetite Loss",
      symptom3: "Pain in abdomen",
      symptom4: "Diarrhoea",
      symptom5: "Nausea",
      precaution1: "Remove appendix surgically (appendectomy)",
      precaution2: "Consult doctor",
      precaution3: "Do not use heating pads",
      precaution4: "Do not use any pain remedies"
    }
]

const domElements = {
    main: document.querySelector('.main'),
    searchBar: document.querySelector('.search-container'),
    searchInput: document.querySelector('.search-keyword'),
    seeList: document.querySelector('.see-list'),
    modal: document.getElementById('modal'),
    close: document.querySelector('.close'),
    title: document.querySelector('h3'),
    description: document.querySelector('.description'),
    symptoms: document.querySelector('.symptoms-list'),
    prec1: document.querySelector('.precaution1'),
    prec2: document.querySelector('.precaution2'),
    prec3: document.querySelector('.precaution3'),
    prec4: document.querySelector('.precaution4')
}


window.getDiseases = () => {
    diseases.forEach(item => {
        const itemCon = document.createElement('div');
        itemCon.classList.add('item-container');

        const diseaseTitle = document.createElement('h4');
        diseaseTitle.textContent = item.disease;

        const sympList = document.createElement('ul');
        sympList.classList.add('symptoms');

        const symp1 = document.createElement('li');
        symp1.textContent = item.symptom1;

        const symp2 = document.createElement('li');
        symp2.textContent = item.symptom2;

        const symp3 = document.createElement('li');
        symp3.textContent = item.symptom3;

        const symp4 = document.createElement('li');
        symp4.textContent = item.symptom4;

        sympList.append(symp1);
        sympList.append(symp2);
        sympList.append(symp3);
        sympList.append(symp4);

        const infoLink = document.createElement('a');
        infoLink.classList.add('more-info');
        infoLink.href = "#";
        infoLink.textContent = "Click for more info";

        itemCon.append(diseaseTitle);
        itemCon.append(sympList);
        itemCon.append(infoLink);

        domElements.main.append(itemCon);

        infoLink.addEventListener('click', (e) => {
            const name = e.target.parentElement.firstChild.textContent;
            console.log(name);

            if(name === item.disease) {
                domElements.title.textContent = item.disease;
                domElements.description.textContent = item.description;
                domElements.symptoms.textContent = `${item.symptom1}, ${item.symptom2}, ${item.symptom3}, ${item.symptom4}, ${item.symptom5}`;
                domElements.prec1.textContent = item.precaution1;
                domElements.prec2.textContent = item.precaution2;
                domElements.prec3.textContent = item.precaution3;
                domElements.prec4.textContent = item.precaution4;
            }

            domElements.modal.classList.add('show');
            domElements.main.classList.add('hide');
            domElements.searchBar.classList.add('hide');
            domElements.seeList.classList.add('hide');
        });


    });
}


const searchByKeyword = () => {
    domElements.main.innerHTML = "";
    let value = domElements.searchInput.value.toLowerCase();

    const returnedData = diseases.filter(function(word) {
        let filtered = word.symptom1.toLowerCase().includes(value) || word.symptom2.toLowerCase().includes(value) || word.symptom3.toLowerCase().includes(value) || word.symptom4.toLowerCase().includes(value) || word.symptom5.toLowerCase().includes(value);
        return filtered;
    });

    returnedData.forEach(data => {
        const itemCon = document.createElement('div');
        itemCon.classList.add('item-container');

        const diseaseTitle = document.createElement('h4');
        diseaseTitle.textContent = data.disease;

        const sympList = document.createElement('ul');
        sympList.classList.add('symptoms');

        const symp1 = document.createElement('li');
        symp1.textContent = data.symptom1;

        const symp2 = document.createElement('li');
        symp2.textContent = data.symptom2;

        const symp3 = document.createElement('li');
        symp3.textContent = data.symptom3;

        const symp4 = document.createElement('li');
        symp4.textContent = data.symptom4;

        sympList.append(symp1);
        sympList.append(symp2);
        sympList.append(symp3);
        sympList.append(symp4);

        const infoLink = document.createElement('a');
        infoLink.classList.add('more-info');
        infoLink.href = "#";
        infoLink.textContent = "Click for more info";

        itemCon.append(diseaseTitle);
        itemCon.append(sympList);
        itemCon.append(infoLink);

        domElements.main.append(itemCon);

        infoLink.addEventListener('click', (e) => {
            const name = e.target.parentElement.firstChild.textContent;
            console.log(name);

            if(name === data.disease) {
                domElements.title.textContent = data.disease;
                domElements.description.textContent = data.description;
                domElements.symptoms.textContent = `${data.symptom1}, ${data.symptom2}, ${data.symptom3}, ${data.symptom4}, ${data.symptom5}`;
                domElements.prec1.textContent = data.precaution1;
                domElements.prec2.textContent = data.precaution2;
                domElements.prec3.textContent = data.precaution3;
                domElements.prec4.textContent = data.precaution4;
            }

            domElements.modal.classList.add('show');
            domElements.main.classList.add('hide');
            domElements.searchBar.classList.add('hide');
            domElements.seeList.classList.add('hide');
        })
    });
}

window.addEventListener('load', getDiseases);
domElements.searchBar.addEventListener('input', searchByKeyword);

domElements.close.addEventListener('click', () => {
    domElements.modal.classList.toggle('show');
    domElements.main.classList.toggle('hide');
    domElements.searchBar.classList.toggle('hide');
    domElements.seeList.classList.toggle('hide');
});