// Course Data - full descriptions added from UCC Department list
const courseData = {
    "SOC 101": {
        name: "Introduction to Sociology I",
        description:
            "Introduction to the discipline of Sociology; society, culture, and foundational sociological perspectives. Covers origins and development of sociology, founding fathers and key social problems.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 102": {
        name: "Introduction to Psychology",
        description:
            "Introductory psychology topics relevant to social behaviour (listed on site).",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 103": {
        name: "Introduction to Anthropology I",
        description: "Introductory anthropology topics (listed on site).",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 104": {
        name: "Introduction to Anthropology II",
        description: "Continuation of introductory anthropology (listed on site).",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 201": {
        name: "Foundation and Issues in Sociology",
        description:
            "This course introduces students to the founding fathers of Sociology and their intellectual works and their impact on society. It covers Sociology, society, culture, origin and development of Sociology, and exposes students to social problems such as crime, conflict, and corruption.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 204": {
        name: "Social Structure of Ghana",
        description: "Study of social structures specific to Ghana (listed on site).",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 211": {
        name: "Social Statistics",
        description:
            "The course equips students with requisite analytical skills to make social meanings out of statistical data. Topics include tabulation, graphical presentation, measures of central tendency and dispersion, normal curve, null hypothesis, correlation, regression and chi-square.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 214": {
        name: "Social Psychology",
        description:
            "This course explains the concepts and nature of social psychology and how they apply to social psychological issues. Topics include self and self-perception, attribution, attitudes, persuasion, social influence, social psychology and health, aggression, pro-social behaviour, group behaviour, and leadership.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 301": {
        name: "Sociological Theory I",
        description:
            "This course equips students with the understanding of sociological theories and their application. Topics include Functionalism, Conflict Theory, World Systems Theory, Symbolic Interactionism, Exchange Theory, Ethnomethodology, Phenomenology, Modernity, Postmodernism and related social theories.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 311": {
        name: "Social Research Methods",
        description: "Course on social research methods (listed on site).",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 315": {
        name: "Sociology of Ageing",
        description:
            "This course guides students to distinguish between the various forms and types of ageing process as well as the relevance of ageing to human beings. It examines aging from sociological, psychological and demography perspectives and addresses questions such as: How and why do we age? Is old age necessarily a period of decline? What are the problems of an aging society?",
        credits: "3",
        lecturer: "Dr. Razak Jaha Imoro",
    },
    "SOC 316": {
        name: "Sociology of Health and Medicine",
        description:
            "This course develops a critical understanding of how social forces affect medicine, health and illness behaviour of individuals, groups and societies. It examines medical sociology perspectives and social and psychological factors influencing medical and health care.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 317": {
        name: "Sociology of Sport",
        description:
            "This course motivates students to think critically about sport as part of social life and the relationship between sociology and sport. Sport is examined as a social institution related to media, education, family and the economy, with emphasis on intersections of sport with power relations affecting gender, race and ethnicity.",
        credits: "3",
        lecturer: "Dr. Edgar Takyi Akonor",
    },
    "SOC 318": {
        name: "Work and Occupations",
        description:
            "This course builds students' capacity to critically analyse the functions and meanings of work as well as the factors that influence workers' behaviour. It examines work as a central human activity, discusses theories of work attitudes and motivation, and examines occupational structure and the Ghanaian worker's issues.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 319": {
        name: "Family and Kinship",
        description:
            "This course equips students with the understanding and ability to analyze family and kinship patterns in Africa from a cross-cultural perspective, including changing trends and problems facing African families.",
        credits: "3",
        lecturer: "Dr. Daniel Yaw Fiaveh",
    },
    "SOC 320": {
        name: "Demography I",
        description:
            "This course covers formal demography fundamentals, calculation of basic demographic rates and ratios, and relationships between demographic processes (fertility, mortality, migration) and demographic variables (size, composition, distribution).",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 321": {
        name: "Race, Ethnicity and Ethnic Relations",
        description:
            "Enhances understanding of historical background to race and ethnic compositions and concepts such as race, tribe, ethnic group and ethnicity. Discusses theories of prejudice and stereotypes and historical antecedents of ethnic compositions in African states.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 322": {
        name: "Feminist Theory and Methodology",
        description:
            "Equips students with feminist theories in relation to Africa and feminist research methodologies, covering dominant feminist theories (Radical, Liberal, Social) and the rationale for unique feminist approaches to avoid male and Euro-centered biases.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 323": {
        name: "Social Change in Africa",
        description:
            "Enhances capacity to understand theories of social change and their application to African socio-cultural transformations, focusing on historical and contemporary processes of change.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 324": { name: "placeholder", description: "TBA", credits: "3", lecturer: "TBA" },
    "SOC 325": {
        name: "Society and Development",
        description:
            "Explores development and its context, theoretical constructs of societal development, evolution from pre-industrial to modern times, and analyses developing societies with imperialist, colonialist and neo-colonialist lenses.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 327": {
        name: "Complex Organizations and Bureaucracy",
        description:
            "Familiarizes students with nature and functioning of bureaucratic organisations and complex organisations from a sociological perspective, covering classical and post-classical theories and individual/group relationships within organisations.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 329": {
        name: "Introduction to Gender Studies",
        description:
            "Equips students with understanding of gender issues and identity as shaped by culture, context and institutions; introduces conceptual, theoretical and practical issues relevant to study of women, men and alternative genders.",
        credits: "3",
        lecturer: "Dr. Raymond Kwasi Boasinke",
    },
    "SOC 331": {
        name: "Socialisation",
        description:
            "Covers nature and content of socialisation, psychological and sociological approaches, types and stages of socialisation, socialising agents (family, peers, media, education, religion) and contexts influencing socialisation across the life course.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 332": {
        name: "Sociology of Blue Economy",
        description:
            "The Blue Economy refers to economic activities, industries, and policies centered on ocean and coastal resources. The Sociology of Blue Economy investigates the social structures, relationships, institutions, and processes that shape and are shaped by marine economic activities. It examines how communities, nations, and global systems manage, exploit, and benefit from marine and coastal resources.",
        credits: "3",
        lecturer: "Prof. John Windie Ansah",
    },
    "SOC 341": {
        name: "International Relations",
        description:
            "Enhances understanding of sociological theories applied to international issues: foreign policy, diplomacy, realism/idealism, superpowers, war, cooperation, terrorism, human rights, peacekeeping, and roles of state and non-state actors.",
        credits: "3",
        lecturer: "Dr. Solomon Sika-Bright",
    },
    "SOC 401": {
        name: "Special Problems in Theory Building",
        description:
            "Improves and deepens analytical skills in theory building and formulation; examines nature, procedure and problems in constructing sociological theories and applies theory to social problems.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 403": {
        name: "Gender and Sexuality",
        description:
            "Promotes critical, analytical and multicultural approaches to gender and sexuality; examines how individuals become sexual and gendered beings, cultural limitations on sexual expression, and feminist and sociological perspectives.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 405": {
        name: "Demography II",
        description:
            "Applies demographic knowledge to real-life situations with emphasis on social change and fertility in Ghana; examines how population processes impact social problems and how they can be addressed.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 406": {
        name: "Urban Sociology",
        description:
            "Provides understanding of urbanity and urbanism in sociology; analyzes structure of urban societies, behaviour in urban settlements, theoretical underpinnings, characteristics of urban areas and urban social problems, with focus on developing countries.",
        credits: "3",
        lecturer: "Dr. Micheal Sakyi-Darko",
    },
    "SOC 407": {
        name: "Social Planning",
        description:
            "Teaches concept of social planning, identification of social problems and solutions; covers history and role of social planning, methods and critiques, decentralization and case studies on poverty reduction, health, education and gender.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 412": {
        name: "Population, Health and Development",
        description:
            "Covers issues on population, health and development and debates on their interrelationship; examines relationship between population and health and social factors impacting population change and development.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 414": {
        name: "Organisational Behaviour",
        description:
            "Interrogates behaviour of individuals in organisations from a sociological perspective; covers perception, learning, motivation, attitudes, socialization into organizations, leadership, power and communication.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 416": {
        name: "Women and Development",
        description:
            "Critically appraises women in development discourse; traces WID, WAD, GAD perspectives, differential participation of women and men in development processes, and approaches to gender planning and analysis.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 418": {
        name: "Sociology of Religion",
        description:
            "Equips students to analyse religion from classical and contemporary sociological perspectives and understand religion’s role in cultural, social, economic and political development.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 421": {
        name: "Sociology of Death and Dying",
        description:
            "Introduces sociology of death, dying and bereavement; analyses relationship between life and death, and emphasizes education about death and bereavement to reduce suffering and preserve dignity.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 422": {
        name: "Political Economy I",
        description:
            "Examines relationship between political and economic institutions and development; discusses liberalism, neo-liberalism, Marxism, dependency and their relevance to national and global development; highlights state-market integration and civil society roles.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 423": {
        name: "Sociology of Education",
        description:
            "Examines relationship between the school and society; topics include origins and perspectives of sociology of education, education as social institution, education and social change, mobility, poverty and education in Ghana.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 424": {
        name: "Communication and the Media",
        description:
            "Provides understanding of fundamentals of communication and the role of media in societal development, modern communication techniques and their influence on human interaction.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 425": {
        name: "Chieftaincy and Society",
        description:
            "Analyses the relevance of the chieftaincy institution in Ghanaian society and its role in development; covers origin, dynamics, roles, constitutional issues and interplay with modern governance.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 426": {
        name: "Sociology of Tourism and Recreation",
        description:
            "Studies touristic behaviours and consequences for guests and hosts; covers tourism overview, tourist motivation, impact of tourism and conflict in tourism.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 427": {
        name: "Political Economy II",
        description:
            "Sequel to Political Economy I; situates Africa's developmental concerns in political economy contexts with case studies, regional integration and emerging issues.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 428": {
        name: "Sociology of Law and Criminal Justice",
        description:
            "Examines concept of law and criminal justice systems from sociological perspective; covers structures/processes of criminal justice, classifications of crime, rights, and components of Ghanaian criminal justice system.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 430": {
        name: "Environmental Sociology",
        description:
            "Provides theoretical and practical understanding of interactions between human societies and ecosystems; focuses on ecological crises and roots of scientific paradigms to analyse environmental problems.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 429": {
        name: "Conflict and Conflict Resolution",
        description:
            "Enables students to understand causes and impacts of conflict and equips them with conflict resolution mechanisms, including African Traditional Dispute Resolution and Western ADR.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 431": { name: "placeholder", description: "TBA", credits: "3", lecturer: "TBA" },
    "SOC 437": {
        name: "Criminology",
        description:
            "Explains how criminology and varied methodological approaches are used to study crime; evaluates processes defining crime, agencies of law enforcement, corrections, typologies of crime and measures to control crime.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 438": {
        name: "Sociology of Terrorism",
        description:
            "Develops sociological understanding of terrorism, its history, new terrorism, terrorism and technology, globalization, funding, organization, socialization of terrorists, and social control and theorizing of terrorism.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 309": {
        name: "Victimology",
        description:
            "Victimology is the scientific study of victims of crime and the processes by which individuals become victims. The course examines the consequences of victimization, victim-offender relationships, victim rights and protection, and victim support systems. It also addresses the role of criminal justice systems in addressing victims' needs.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 440": {
        name: "Sociology of Technology",
        description:
            "Examines pervasiveness of technology and its social implications; explores how technologies emerge, spread and are shaped by values and social norms from everyday objects to digital systems.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 441": {
        name: "Sociology of the Internet",
        description:
            "Assesses social, political and economic impact of the Web and basic social network analysis; covers digital divide, virtual communities, online crimes and implications for culture and political participation.",
        credits: "3",
        lecturer: "TBA",
    },
    "SOC 442": {
        name: "Migration Studies",
        description:
            "Introduces current issues in migration studies, drivers and impacts of internal migration, international migration challenges (refugeeism, integration), and interactions with fertility and mortality affecting population composition.",
        credits: "3",
        lecturer: "TBA",
    },
};

const careerData = {
    "SOC 101": {
        analysis:
            "Foundational course building core sociological literacy. Strength: strong conceptual foundation. Weakness: limited practical skills—pair with methods courses.",
        careers: "Social researcher, policy analyst, NGO programme officer, academic",
        links: [
            { text: "UNDP", url: "https://www.undp.org" },
            { text: "World Bank", url: "https://www.worldbank.org" },
        ],
    },
    "SOC 102": {
        analysis:
            "Introduces psychology fundamentals for social understanding. Useful for HR, counselling, and community roles.",
        careers: "HR officer, community development worker, counselor",
        links: [{ text: "ILO", url: "https://www.ilo.org" }],
    },
    "SOC 103": {
        analysis:
            "Anthropological foundations; strong for cultural understanding and heritage work.",
        careers: "Cultural officer, museum/heritage professional, research",
        links: [{ text: "UNESCO", url: "https://www.unesco.org" }],
    },
    "SOC 104": {
        analysis:
            "Advanced anthropology; combines theory with cultural analysis for development and research roles.",
        careers: "Anthropologist, cultural researcher, development specialist",
        links: [{ text: "Anthropology organizations", url: "https://www.aaanet.org" }],
    },
    "SOC 201": {
        analysis:
            "Theoretical depth in classical and contemporary sociology; excellent for academic and policy roles.",
        careers: "Policy analyst, academic researcher, think-tank specialist",
        links: [
            { text: "UNDP", url: "https://www.undp.org" },
            { text: "World Bank", url: "https://www.worldbank.org" },
        ],
    },
    "SOC 204": {
        analysis:
            "Specialized Ghana-context knowledge; valuable for development and governance roles in West Africa.",
        careers: "Development officer, policy advisor, civil society roles",
        links: [
            { text: "Ministry of Planning (Ghana)", url: "https://www.mfep.gov.gh" },
            { text: "Civil Society Organizations", url: "https://www.ngo.org.gh" },
        ],
    },
    "SOC 211": {
        analysis:
            "Essential quantitative skills for data-driven roles. Strength: practical analytics. Weakness: requires software proficiency (SPSS, R, Python).",
        careers: "Data analyst, M&E officer, research assistant, statistician",
        links: [
            { text: "Ghana Statistical Service", url: "https://statsghana.gov.gh" },
            { text: "World Bank Jobs", url: "https://www.worldbank.org/careers" },
        ],
    },
    "SOC 214": {
        analysis:
            "Bridges psychology and sociology; useful for understanding human behavior in organizations and communities.",
        careers: "HR specialist, community psychologist, organizational development officer",
        links: [{ text: "ILO", url: "https://www.ilo.org" }],
    },
    "SOC 301": {
        analysis:
            "Strength: builds conceptual tools for critical thinking and policy analysis. Weakness: theory-heavy content benefits from applied casework or internships.",
        careers: "Policy analyst, NGO programme officer, academic researcher",
        links: [
            { text: "UNDP", url: "https://www.undp.org" },
            { text: "Development Organizations", url: "https://www.devex.com/jobs" },
        ],
    },
    "SOC 304": {
        analysis:
            "Specialized rural development knowledge; excellent for agricultural and rural development projects.",
        careers:
            "Rural development officer, agricultural development specialist, community liaison",
        links: [
            { text: "FAO", url: "https://www.fao.org" },
            { text: "IFAD", url: "https://www.ifad.org" },
        ],
    },
    "SOC 310": {
        analysis:
            "Links political structures to social outcomes; valuable for governance, policy and civic engagement roles.",
        careers: "Political analyst, governance officer, civic engagement specialist",
        links: [
            { text: "International IDEA", url: "https://www.idea.int" },
            { text: "NDI", url: "https://www.ndi.org" },
        ],
    },
    "SOC 311": {
        analysis:
            "Strength: teaches research design, sampling, and quantitative/qualitative techniques—highly practical. Weakness: may need hands-on training with current survey platforms.",
        careers: "Research assistant, data analyst, M&E officer",
        links: [
            { text: "Ghana Statistical Service", url: "https://statsghana.gov.gh" },
            { text: "World Bank Jobs", url: "https://www.worldbank.org/careers" },
        ],
    },
    "SOC 309": {
        analysis:
            "Examines crime victims' experiences and support systems; valuable for justice, victim advocacy and social welfare roles.",
        careers:
            "Victim support officer, legal advocate, justice sector specialist, trauma counselor",
        links: [
            { text: "International Victimology Institute", url: "https://www.victimology.org" },
            { text: "Victim Support Europe", url: "https://www.victim-support.eu" },
        ],
    },
    "SOC 312": {
        analysis:
            "Covers crime, deviance and social responses; bridges sociology with justice and crime prevention sectors.",
        careers: "Crime prevention officer, social worker, justice sector analyst",
        links: [
            { text: "UNODC", url: "https://www.unodc.org" },
            { text: "Ghana Police", url: "https://www.police.gov.gh" },
        ],
    },
    "SOC 313": {
        analysis:
            "Examines inequality and stratification; essential for understanding poverty, development and social mobility.",
        careers: "Social protection officer, poverty analyst, development specialist",
        links: [
            { text: "World Bank", url: "https://www.worldbank.org" },
            { text: "UNDP", url: "https://www.undp.org" },
        ],
    },
    "SOC 314": {
        analysis:
            "Studies social movements and collective action; useful for civil society, advocacy and community organizing.",
        careers: "Advocacy officer, community organizer, civil society specialist",
        links: [
            { text: "Amnesty International", url: "https://www.amnesty.org" },
            { text: "Global Witness", url: "https://www.globalwitness.org" },
        ],
    },
    "SOC 315": {
        analysis:
            "Specialized knowledge useful for community development and social care. Combine with policy or management skills.",
        careers: "Community development officer, social care coordinator, gerontology specialist",
        links: [{ text: "HelpAge International", url: "https://www.helpage.org" }],
    },
    "SOC 316": {
        analysis:
            "Strength: links social determinants to health outcomes—very useful for public health roles. Weakness: may require extra training in epidemiology for technical roles.",
        careers: "Public health officer, health policy analyst, NGO health programmes",
        links: [
            { text: "World Health Organization", url: "https://www.who.int" },
            { text: "Ministry of Health (Ghana)", url: "https://www.moh.gov.gh" },
        ],
    },
    "SOC 317": {
        analysis:
            "Useful for sport programme coordination, event management and community engagement roles.",
        careers: "Sport programme coordinator, community engagement officer, event manager",
        links: [
            { text: "Ghana Sports Authority", url: "https://www.ghanasports.gov.gh" },
            { text: "Olympic Solidarity", url: "https://www.olympicsolidarity.org" },
        ],
    },
    "SOC 318": {
        analysis:
            "Analyzes work, motivation and occupational structures; valuable for HR, labor and organizational roles.",
        careers: "HR manager, labor relations officer, organizational development specialist",
        links: [
            { text: "ILO", url: "https://www.ilo.org" },
            { text: "Ghana Labour Board", url: "https://www.nlb.gov.gh" },
        ],
    },
    "SOC 319": {
        analysis:
            "Analyzes family patterns and kinship in African context; useful for social protection, welfare and development programs.",
        careers: "Social protection officer, family welfare specialist, development programmer",
        links: [
            { text: "UNICEF", url: "https://www.unicef.org" },
            { text: "World Vision", url: "https://www.wvi.org" },
        ],
    },
    "SOC 320": {
        analysis:
            "Covers demographic measurement and analysis; essential for population planning and development roles.",
        careers: "Demographer, population analyst, development planner",
        links: [
            { text: "Ghana Statistical Service", url: "https://statsghana.gov.gh" },
            { text: "UNFPA", url: "https://www.unfpa.org" },
        ],
    },
    "SOC 321": {
        analysis:
            "Examines race and ethnicity through historical and theoretical lenses; valuable for governance and inclusion work.",
        careers: "Diversity and inclusion officer, governance specialist, civil society roles",
        links: [
            { text: "International Crisis Group", url: "https://www.crisisgroup.org" },
            { text: "Minority Rights Group", url: "https://www.minorityrights.org" },
        ],
    },
    "SOC 322": {
        analysis:
            "Equips with feminist theory and methodology; essential for gender-focused research, advocacy and policy roles.",
        careers: "Gender officer, feminist researcher, women's rights advocate",
        links: [
            { text: "UN Women", url: "https://www.unwomen.org" },
            { text: "Oxfam", url: "https://www.oxfam.org" },
        ],
    },
    "SOC 323": {
        analysis:
            "Analyzes social transformations in Africa; valuable for understanding development and change processes.",
        careers: "Social change analyst, development specialist, policy advisor",
        links: [
            { text: "UNDP", url: "https://www.undp.org" },
            { text: "African Development Bank", url: "https://www.afdb.org" },
        ],
    },
    "SOC 325": {
        analysis:
            "Strong grounding in development theory; practical project management and fundraising skills improve NGO employability.",
        careers: "Development officer, project manager, policy advisor",
        links: [
            { text: "UNDP", url: "https://www.undp.org" },
            { text: "CARE International", url: "https://www.care.org" },
        ],
    },
    "SOC 327": {
        analysis:
            "Studies bureaucratic organizations and management; useful for public sector, NGO management and organizational roles.",
        careers: "Organization development officer, public sector manager, NGO administrator",
        links: [{ text: "Public Service Commission (Ghana)", url: "https://www.pscghana.org" }],
    },
    "SOC 329": {
        analysis:
            "Covers gender issues and identity; valuable for gender-focused policy, advocacy and organizational roles.",
        careers: "Gender officer, diversity specialist, women's rights advocate",
        links: [
            { text: "UN Women", url: "https://www.unwomen.org" },
            { text: "Amnesty International", url: "https://www.amnesty.org" },
        ],
    },
    "SOC 331": {
        analysis:
            "Examines socialization processes across the life course; useful for education, development and social protection roles.",
        careers: "Education officer, social development specialist, researcher",
        links: [
            { text: "UNESCO", url: "https://www.unesco.org" },
            { text: "Save the Children", url: "https://www.savethechildren.org" },
        ],
    },
    "SOC 332": {
        analysis:
            "Examines social dimensions of marine and coastal economic activities; valuable for maritime policy, coastal development, and environmental sociology roles. Combines economic sociology with environmental and development perspectives.",
        careers:
            "Maritime policy analyst, coastal development officer, environmental sociologist, marine resource manager, blue economy consultant",
        links: [
            { text: "UN Ocean Conference", url: "https://www.un.org/en/conferences/ocean" },
            {
                text: "World Bank Blue Economy",
                url: "https://www.worldbank.org/en/topic/oceans-fisheries-and-coastal-economies",
            },
            { text: "FAO Fisheries", url: "https://www.fao.org/fisheries/en" },
        ],
    },
    "SOC 341": {
        analysis:
            "Applies sociology to international affairs; valuable for diplomacy, conflict resolution and international development roles.",
        careers:
            "International relations officer, diplomat, conflict analyst, peacebuilding specialist",
        links: [
            { text: "UN", url: "https://www.un.org/careers" },
            { text: "International Crisis Group", url: "https://www.crisisgroup.org" },
        ],
    },
    "SOC 401": {
        analysis:
            "Advanced theory building; excellent for academic roles and sophisticated policy analysis.",
        careers: "Academic researcher, policy analyst, think-tank specialist",
        links: [
            { text: "UNDP", url: "https://www.undp.org" },
            { text: "World Bank", url: "https://www.worldbank.org" },
        ],
    },
    "SOC 403": {
        analysis:
            "Critical analysis of gender and sexuality; valuable for LGBTQ+ rights, health and advocacy organizations.",
        careers: "LGBTQ+ rights advocate, health officer, gender specialist",
        links: [
            { text: "ILGA", url: "https://ilga.org" },
            { text: "Amnesty International", url: "https://www.amnesty.org" },
        ],
    },
    "SOC 405": {
        analysis:
            "Applies demographic analysis to social problems; valuable for population policy and social planning roles.",
        careers: "Population analyst, policy officer, development planner",
        links: [
            { text: "UNFPA", url: "https://www.unfpa.org" },
            { text: "Ghana Statistical Service", url: "https://statsghana.gov.gh" },
        ],
    },
    "SOC 406": {
        analysis:
            "Analyzes urban social problems; excellent for city planning, urban development and municipal roles.",
        careers: "Urban development officer, city planner, municipal administrator",
        links: [
            { text: "UN-Habitat", url: "https://unhabitat.org" },
            { text: "African Center for Cities", url: "https://www.africacities.org" },
        ],
    },
    "SOC 407": {
        analysis:
            "Teaches social planning methods for development; directly applicable to project design and implementation.",
        careers: "Social planner, project manager, development officer",
        links: [
            { text: "UNDP", url: "https://www.undp.org" },
            { text: "World Bank", url: "https://www.worldbank.org" },
        ],
    },
    "SOC 412": {
        analysis:
            "Connects population dynamics to health and development; valuable for health, demographic and social policy roles.",
        careers: "Health officer, population specialist, policy analyst",
        links: [
            { text: "WHO", url: "https://www.who.int" },
            { text: "UNFPA", url: "https://www.unfpa.org" },
        ],
    },
    "SOC 414": {
        analysis:
            "Analyzes behavior in organizations; valuable for HR, management consulting and organizational development.",
        careers: "HR manager, organizational development specialist, management consultant",
        links: [{ text: "ILO", url: "https://www.ilo.org" }],
    },
    "SOC 416": {
        analysis:
            "Critically examines women in development discourse; essential for gender-focused development and advocacy roles.",
        careers: "Gender officer, development specialist, women's rights advocate",
        links: [
            { text: "UN Women", url: "https://www.unwomen.org" },
            { text: "Oxfam", url: "https://www.oxfam.org" },
        ],
    },
    "SOC 418": {
        analysis:
            "Analyzes religion's role in society; valuable for interfaith dialogue, development and social cohesion roles.",
        careers: "Religion and society officer, interfaith coordinator, development specialist",
        links: [
            { text: "Pew Research Center", url: "https://www.pewresearch.org" },
            { text: "United Religions Initiative", url: "https://uri.org" },
        ],
    },
    "SOC 421": {
        analysis:
            "Examines death, dying and bereavement; valuable for palliative care, social services and psychology roles.",
        careers: "Palliative care officer, social worker, counselor, health specialist",
        links: [
            { text: "WHO", url: "https://www.who.int" },
            { text: "Hospice Africa", url: "https://www.hospiceafrica.or.ug" },
        ],
    },
    "SOC 422": {
        analysis:
            "Links political and economic institutions; valuable for policy and consulting roles but benefits from quantitative economics.",
        careers: "Economic policy analyst, think-tank researcher, governance advisor",
        links: [
            { text: "IMF", url: "https://www.imf.org" },
            { text: "African Development Bank", url: "https://www.afdb.org" },
        ],
    },
    "SOC 423": {
        analysis:
            "Analyzes education and society relationships; valuable for education policy, planning and development roles.",
        careers: "Education policy officer, curriculum specialist, development programmer",
        links: [
            { text: "UNESCO", url: "https://www.unesco.org" },
            { text: "World Bank Education", url: "https://www.worldbank.org" },
        ],
    },
    "SOC 424": {
        analysis:
            "Examines communication and media impact; valuable for communication roles, advocacy and development campaigns.",
        careers: "Communications officer, media specialist, advocacy coordinator",
        links: [{ text: "International Media Support", url: "https://www.mediasupport.org" }],
    },
    "SOC 425": {
        analysis:
            "Analyzes chieftaincy institution in Ghana; valuable for governance, traditional authority liaison and cultural roles.",
        careers: "Governance officer, cultural liaison, chieftaincy affairs specialist",
        links: [
            { text: "Ghana National House of Chiefs", url: "https://www.houseofchiefs.gov.gh" },
        ],
    },
    "SOC 426": {
        analysis:
            "Examines tourism and its social impacts; useful for tourism development, hospitality management and community roles.",
        careers: "Tourism development officer, community coordinator, cultural tourism specialist",
        links: [
            { text: "Ghana Tourism Authority", url: "https://www.tourismauthority.gov.gh" },
            { text: "UNWTO", url: "https://www.unwto.org" },
        ],
    },
    "SOC 427": {
        analysis:
            "Applies political economy to African development; good for continental-level policy and regional integration work.",
        careers: "Policy analyst, regional integration specialist, governance advisor",
        links: [
            { text: "African Development Bank", url: "https://www.afdb.org" },
            { text: "African Union", url: "https://au.int" },
        ],
    },
    "SOC 428": {
        analysis:
            "Examines law and criminal justice systems; valuable for legal reform, justice sector and crime prevention roles.",
        careers: "Justice sector officer, legal reform specialist, crime prevention coordinator",
        links: [
            { text: "UNODC", url: "https://www.unodc.org" },
            { text: "Ghana Justice Sector", url: "https://www.moj.gov.gh" },
        ],
    },
    "SOC 429": {
        analysis:
            "Covers conflict causes and resolution mechanisms; essential for peacebuilding, mediation and reconciliation roles.",
        careers: "Peacebuilding officer, conflict mediator, reconciliation coordinator",
        links: [
            { text: "International Peace Institute", url: "https://www.ipinst.org" },
            { text: "United Nations Peacekeeping", url: "https://peacekeeping.un.org" },
        ],
    },
    "SOC 430": {
        analysis:
            "Analyzes human-environment interactions; valuable for environmental management, sustainability and climate roles.",
        careers: "Environmental officer, sustainability specialist, climate change coordinator",
        links: [
            { text: "UNEP", url: "https://www.unep.org" },
            { text: "Ghana Environmental Protection Agency", url: "https://www.epa.gov.gh" },
        ],
    },
    "SOC 437": {
        analysis:
            "Insights into crime systems and prevention. Operational roles may require accreditation or practical training.",
        careers: "Probation officer, justice researcher, crime prevention advisor",
        links: [
            { text: "Ghana Police Service", url: "https://www.police.gov.gh" },
            { text: "UNODC", url: "https://www.unodc.org" },
        ],
    },
    "SOC 438": {
        analysis:
            "Covers terrorism history and prevention strategies; useful for security, counterterrorism and policy roles.",
        careers: "Security analyst, counterterrorism officer, policy specialist",
        links: [
            { text: "International Security Council", url: "https://www.un.org/securitycouncil" },
            { text: "START", url: "https://www.start.umd.edu" },
        ],
    },
    "SOC 440": {
        analysis:
            "Examines technology and society; useful for technology policy, digital development and innovation roles.",
        careers:
            "Technology policy officer, digital development specialist, innovation coordinator",
        links: [
            { text: "ITU", url: "https://www.itu.int" },
            { text: "GSMA Intelligence", url: "https://www.gsmaintelligence.com" },
        ],
    },
    "SOC 441": {
        analysis:
            "Develops digital sociological literacy; field moves fast so continual learning of platforms and tools needed.",
        careers: "Social media analyst, UX researcher, digital engagement officer",
        links: [
            { text: "Tech Companies", url: "https://www.linkedin.com/jobs" },
            { text: "Digital Marketing", url: "https://www.ama.org" },
        ],
    },
    "SOC 442": {
        analysis:
            "Understands migration drivers and responses; internships in migration agencies strengthen employability.",
        careers: "Migration policy analyst, refugee programme officer, research roles",
        links: [
            { text: "IOM", url: "https://www.iom.int" },
            { text: "UNHCR", url: "https://www.unhcr.org" },
        ],
    },
};

// Faculty Data - Organized by Hierarchy (Associate Professors → Senior Lecturers → Lecturers → Research Assistants)
const facultyData = {
    // ASSOCIATE PROFESSORS
    "Prof. Georgina Yaa Oduro": {
        title: "Associate Professor",
        position: "Head of Department",
        email: "gyoduro@ucc.edu.gh",
        photo: "prof-georgina.jpg",
        bio: "Prof. Georgina Yaa Oduro is an Associate Professor and the current Head of the Department of Sociology and Anthropology, University of Cape Coast, Ghana. She is the immediate past Director (2019-2023) of the Centre for Gender Research, Advocacy and Documentation (CEGRAD) of the same university. She also served as Head of Oguaa Hall (the premier Hall of Residence for students) of the university.",
        specializations: ["Adolescence and the Youth", "Gender and the Blue Economy"],
        interests: [
            "Gender Issues",
            "Race and Ethnicity",
            "Sexuality",
            "Tangible and Intangible Heritage in Ocean Governance",
            "Youth and Popular Cultures",
        ],
        profileUrl: "https://directory.ucc.edu.gh/p/georgina-yaa-oduro",
    },
    "Prof. John Windie Ansah": {
        title: "Associate Professor",
        position: "Academic Advisor",
        email: "john.ansah@ucc.edu.gh",
        photo: "https://directory.ucc.edu.gh/media/secure/3592",
        bio: "Prof. John Windie Ansah is an Associate Professor in the Department of Sociology and Anthropology. He serves as Academic Advisor and is a leading expert in political economy and public policy analysis, with particular focus on ocean governance and the blue economy.",
        specializations: ["Blue Economy", "Coastal Sociology", "Political Economy"],
        interests: ["Political Economy and Public Policy Analysis"],
        profileUrl: "https://directory.ucc.edu.gh/p/john-windie-ansah",
    },
    "Prof. Daniel Yaw Fiaveh": {
        title: "Associate Professor",
        position: "Research Coordinator, CEGRAD",
        email: "dfiaveh@ucc.edu.gh",
        photo: "https://directory.ucc.edu.gh/media/secure/10274",
        bio: "Prof. Daniel Yaw Fiaveh is a Ghanaian sociologist-turned-anthropologist and an Associate Professor in studies of men, gender, and sexuality at the University of Cape Coast. He was the Research Coordinator at the Centre for Gender, Research, Advocacy, and Documentation (CEGRAD) from August 2022 to July 2024. His research examines masculinities, sexual cultures and intimate relationships.",
        specializations: [
            "Gender Studies",
            "Masculinity",
            "Qualitative Research Methodology",
            "Sex Studies",
            "Sexuality",
        ],
        interests: [
            "Anthropology/Sociology of Sex",
            "Men and Masculinities",
            "Sex and Culture",
            "Sexual Health",
            "Sexuality Education",
        ],
        profileUrl: "https://directory.ucc.edu.gh/p/daniel-yaw-fiaveh",
    },
    "Prof. Nancy Lundgren": {
        title: "Associate Professor",
        position: "Associate Professor",
        email: "nancy.lundgren@ucc.edu.gh",
        photo: "",
        bio: "Prof. Nancy Lundgren is an Associate Professor in the Department of Sociology and Anthropology, bringing international perspectives to the study of culture, society, and anthropological research.",
        specializations: ["Anthropology", "Cultural Studies"],
        interests: ["Cross-Cultural Research", "Cultural Anthropology"],
        profileUrl: "https://directory.ucc.edu.gh/p/nancy-lundgren",
    },
    "Prof. Alex Somuah Obeng": {
        title: "Associate Professor",
        position: "Associate Professor",
        email: "alex.obeng@ucc.edu.gh",
        photo: "",
        bio: "Prof. Alex Somuah Obeng is an Associate Professor in the Department of Sociology and Anthropology, specializing in social theory and contemporary social issues in Ghana and Africa.",
        specializations: ["Social Theory", "African Sociology"],
        interests: ["Social Change", "Contemporary Social Issues"],
        profileUrl: "https://directory.ucc.edu.gh/p/alex-somuah-obeng",
    },
    "Prof. (Mrs.) Henrietta Abane": {
        title: "Associate Professor",
        position: "Associate Professor",
        email: "henrietta.abane@ucc.edu.gh",
        photo: "",
        bio: "Prof. (Mrs.) Henrietta Abane is an Associate Professor in the Department of Sociology and Anthropology with extensive research experience in gender, development, and social issues.",
        specializations: ["Gender Studies", "Development Studies"],
        interests: ["Women and Development", "Gender Equality", "Social Policy"],
        profileUrl: "https://directory.ucc.edu.gh/p/henrietta-abane",
    },

    // SENIOR LECTURERS
    "Dr. Razak Jaha Imoro": {
        title: "Senior Lecturer",
        position: "Senior Lecturer",
        email: "razak.imoro@ucc.edu.gh",
        photo: "https://directory.ucc.edu.gh/media/secure/3587",
        bio: "Dr. Razak Jaha Imoro is a Senior Lecturer at the Department of Sociology and Anthropology. He holds a Ph.D. in Development Studies from the Institute of Development Studies, University of Cape Coast. His research focuses on conflict management, migration studies, and development issues in Africa.",
        specializations: ["Conflict and Conflict Resolution", "Development Studies", "Migration"],
        interests: [
            "Conflict Management",
            "Development",
            "Environment and Development",
            "Migration",
            "Migration Studies",
        ],
        profileUrl: "https://directory.ucc.edu.gh/p/razak-jaha-imoro",
    },
    "Dr. Edgar Takyi Akonor": {
        title: "Senior Lecturer",
        position: "Academic Advisor",
        email: "eakonor@ucc.edu.gh",
        photo: "https://directory.ucc.edu.gh/media/secure/3588",
        bio: "Dr. Edgar Takyi Akonor is a Senior Lecturer in the Department of Sociology and Anthropology. He serves as Academic Advisor and specializes in sociology of sport, examining how sport functions as a social institution and its intersections with power, gender, and ethnicity.",
        specializations: ["Sociology of Sport", "Social Institutions"],
        interests: ["Sport and Society", "Social Structures"],
        profileUrl: "https://directory.ucc.edu.gh/p/edgar-takyi-akonor",
    },
    "Dr. Solomon Sika-Bright": {
        title: "Senior Lecturer",
        position: "Senior Lecturer",
        email: "solomon.sika-bright@ucc.edu.gh",
        photo: "https://directory.ucc.edu.gh/media/secure/4522",
        bio: "Dr. Solomon Sika-Bright is a Senior Lecturer specializing in social demography and sociology of health and medicine. His research interests include international relations, social deviance and crime, and sociological theory.",
        specializations: ["Social Demography", "Sociology of Health and Medicine"],
        interests: [
            "International Relations",
            "Social Demography",
            "Social Deviance and Crime",
            "Sociological Theory",
        ],
        profileUrl: "https://directory.ucc.edu.gh/p/solomon-sika-bright",
    },
    "Dr. (Mrs.) Naa Adjeley Suta Alakija Sekyi": {
        title: "Senior Lecturer",
        position: "Senior Lecturer",
        email: "naa.sekyi@ucc.edu.gh",
        photo: "",
        bio: "Dr. (Mrs.) Naa Adjeley Suta Alakija Sekyi is a Senior Lecturer in the Department of Sociology and Anthropology, with expertise in gender, development, and social research methodologies.",
        specializations: ["Gender Studies", "Development"],
        interests: ["Women and Development", "Social Research", "Gender Equality"],
        profileUrl: "https://directory.ucc.edu.gh/p/naa-adjeley-suta-alakija-sekyi",
    },
    "Dr. Brempong Osei-Tutu": {
        title: "Senior Lecturer",
        position: "Senior Lecturer",
        email: "brempong.osei-tutu@ucc.edu.gh",
        photo: "",
        bio: "Dr. Brempong Osei-Tutu is a Senior Lecturer in the Department of Sociology and Anthropology with extensive experience in sociological research and teaching.",
        specializations: ["Sociology", "Social Research"],
        interests: ["Social Theory", "Research Methods"],
        profileUrl: "https://directory.ucc.edu.gh/p/brempong-osei-tutu",
    },
    "Dr. Joseph Kingsley Adjei": {
        title: "Senior Lecturer",
        position: "Senior Lecturer",
        email: "joseph.adjei@ucc.edu.gh",
        photo: "",
        bio: "Dr. Joseph Kingsley Adjei is a Senior Lecturer in the Department of Sociology and Anthropology with research interests in social development and community studies.",
        specializations: ["Development Studies", "Community Sociology"],
        interests: ["Social Development", "Community Development"],
        profileUrl: "https://directory.ucc.edu.gh/p/joseph-kingsley-adjei",
    },

    // LECTURERS
    "Dr. Raymond Kwasi Boasinke": {
        title: "Lecturer",
        position: "Departmental Registration & Exams Officer",
        email: "raymond.boasinke@ucc.edu.gh",
        photo: "https://directory.ucc.edu.gh/media/secure/642",
        bio: "Dr. Raymond Kwasi Boasinke is a Lecturer in the Department of Sociology and Anthropology and serves as the Departmental Registration & Exams Officer. His research focuses on sociology of development, gender studies, and social transformation in African contexts.",
        specializations: ["Sociology of Development", "Gender Studies"],
        interests: ["Development", "Gender Issues", "Social Change"],
        profileUrl: "https://directory.ucc.edu.gh/p/raymond-kwasi-boasinke",
    },
    "Dr. Micheal Sakyi-Darko": {
        title: "Lecturer",
        position: "Lecturer",
        email: "msakyi-darko@ucc.edu.gh",
        photo: "https://directory.ucc.edu.gh/media/secure/643",
        bio: "Dr. Micheal Sakyi-Darko is a Lecturer in the Department of Sociology and Anthropology, specializing in urban sociology and the study of urban settlements, social problems in developing countries, and urbanization processes.",
        specializations: ["Urban Sociology", "Development Studies"],
        interests: ["Urbanization", "Social Problems", "Urban Development"],
        profileUrl: "https://directory.ucc.edu.gh/p/michael-sakyi-darko",
    },
    "Dr. Emmanuel Asante": {
        title: "Lecturer",
        position: "Lecturer",
        email: "emmanuel.asante@ucc.edu.gh",
        photo: "",
        bio: "Dr. Emmanuel Asante is a Lecturer in the Department of Sociology and Anthropology, contributing to teaching and research in various sociological and anthropological topics.",
        specializations: ["Sociology", "Social Research"],
        interests: ["Social Issues", "African Society"],
        profileUrl: "https://directory.ucc.edu.gh/p/emmanuel-asante",
    },
    "Dr. Albert Annang": {
        title: "Lecturer",
        position: "Lecturer",
        email: "albert.annang@ucc.edu.gh",
        photo: "",
        bio: "Dr. Albert Annang is a Lecturer in the Department of Sociology and Anthropology, contributing to research and teaching in sociological studies.",
        specializations: ["Sociology", "Social Analysis"],
        interests: ["Social Research", "Social Problems"],
        profileUrl: "https://directory.ucc.edu.gh/p/albert-annang",
    },
    "Dr. Francis Aning Anokye": {
        title: "Lecturer",
        position: "Lecturer",
        email: "francis.anokye@ucc.edu.gh",
        photo: "",
        bio: "Dr. Francis Aning Anokye is a Lecturer in the Department of Sociology and Anthropology, engaged in teaching and research across various sociological topics.",
        specializations: ["Sociology", "Social Research"],
        interests: ["Social Issues", "Research Methodology"],
        profileUrl: "https://directory.ucc.edu.gh/p/francis-aning-anokye",
    },
    "Dr. Daniel Ampem Darko-Asumadu": {
        title: "Lecturer",
        position: "Lecturer",
        email: "daniel.darko-asumadu@ucc.edu.gh",
        photo: "",
        bio: "Dr. Daniel Ampem Darko-Asumadu is a Lecturer in the Department of Sociology and Anthropology, contributing to the academic and research mission of the department.",
        specializations: ["Sociology", "Social Studies"],
        interests: ["Social Research", "Community Studies"],
        profileUrl: "https://directory.ucc.edu.gh/p/daniel-ampem-darko-asumadu",
    },
    "Dr. Dorothy Takyiakwaa": {
        title: "Lecturer",
        position: "Lecturer",
        email: "dorothy.takyiakwaa@ucc.edu.gh",
        photo: "",
        bio: "Dr. Dorothy Takyiakwaa is a Lecturer in the Department of Sociology and Anthropology, engaged in teaching and research in sociological and anthropological studies.",
        specializations: ["Sociology", "Anthropology"],
        interests: ["Social Issues", "Cultural Studies"],
        profileUrl: "https://directory.ucc.edu.gh/p/dorothy-takyiakwaa",
    },

    // RESEARCH ASSISTANTS & OTHER STAFF
    "Ms. Dilys Amoabeng": {
        title: "Principal Research Assistant (Teaching Associate)",
        position: "Senior Staff",
        email: "dilys.amoabeng@ucc.edu.gh",
        photo: "",
        bio: "Ms. Dilys Amoabeng is a Principal Research Assistant and Teaching Associate in the Department of Sociology and Anthropology, supporting teaching and research activities.",
        specializations: ["Research Support", "Teaching"],
        interests: ["Social Research", "Student Support"],
        profileUrl: "https://directory.ucc.edu.gh/p/dilys-amoabeng",
    },
};

/**
 * Creates modal close handlers with focus trap (close button, outside click, ESC key)
 * @param {HTMLElement} modal - The modal element
 * @param {HTMLElement} closeBtn - The close button element
 */
function createModalCloser(modal, closeBtn) {
    if (!modal) return;

    let lastFocusedElement = null;

    // Get all focusable elements in modal
    function getFocusableElements() {
        return modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
    }

    // Trap focus inside modal
    function trapFocus(e) {
        if (modal.style.display !== "block") return;

        const focusableElements = getFocusableElements();
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.key === "Tab") {
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }

    // Close modal function
    function closeModal() {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
        // Return focus to element that opened modal
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
        document.removeEventListener("keydown", trapFocus);
    }

    // Open modal function (to be called when modal opens)
    modal.openModal = function () {
        lastFocusedElement = document.activeElement;
        modal.style.display = "block";
        modal.setAttribute("aria-hidden", "false");
        // Focus first focusable element or close button
        const focusableElements = getFocusableElements();
        if (closeBtn) {
            closeBtn.focus();
        } else if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
        document.addEventListener("keydown", trapFocus);
    };

    // Close button click
    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    // Click outside modal
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESC key
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "block") {
            closeModal();
        }
    });
}

// Modal functionality
const modal = document.getElementById("courseModal");
const closeBtn = modal ? modal.querySelector(".close") : null;
createModalCloser(modal, closeBtn);

// Course click handler
document.querySelectorAll(".course-list li").forEach((courseItem) => {
    // Make keyboard accessible
    courseItem.setAttribute("tabindex", "0");
    courseItem.setAttribute("role", "button");

    // Click handler
    courseItem.addEventListener("click", function () {
        try {
            const codeSpan = this.querySelector(".course-code");
            const courseCode = codeSpan ? codeSpan.textContent.trim() : null;

            // Helper to populate modal fields
            function openModal(payload) {
                const code = payload.code || "";
                const extra = careerData && careerData[code] ? careerData[code] : null;

                document.getElementById("modalCourseCode").textContent = code;
                document.getElementById("modalCourseName").textContent = payload.name || "";
                document.getElementById("modalDescription").textContent =
                    payload.description || "Description not available.";
                document.getElementById("modalCredits").textContent = payload.credits
                    ? payload.credits + " hours"
                    : "TBA";
                document.getElementById("modalLecturer").textContent = payload.lecturer || "TBA";

                document.getElementById("modalAnalysis").textContent =
                    (extra && extra.analysis) ||
                    payload.analysis ||
                    "No critical analysis available.";
                document.getElementById("modalCareers").textContent =
                    (extra && extra.careers) ||
                    payload.careers ||
                    "See career options related to this course in the Jobs section.";

                // Render links (prefer careerData.links over payload.links)
                const links = (extra && extra.links) || payload.links || [];
                const linksEl = document.getElementById("modalLinks");
                if (linksEl) {
                    linksEl.innerHTML = "";
                    if (Array.isArray(links) && links.length) {
                        links.forEach((l, i) => {
                            const a = document.createElement("a");
                            a.href = l.url;
                            a.target = "_blank";
                            a.rel = "noopener noreferrer";
                            a.textContent = l.text;
                            linksEl.appendChild(a);
                            if (i < links.length - 1) {
                                const sep = document.createTextNode(" • ");
                                linksEl.appendChild(sep);
                            }
                        });
                    } else {
                        linksEl.textContent = "No resources available.";
                    }
                }

                if (modal) {
                    if (modal.openModal) {
                        modal.openModal();
                    } else {
                        modal.style.display = "block";
                        if (closeBtn) {
                            closeBtn.focus();
                        }
                    }
                }
            }

            if (courseCode && courseData[courseCode]) {
                openModal(Object.assign({ code: courseCode }, courseData[courseCode]));
                return;
            }

            // Try to extract a course code pattern from the item's text (e.g., "SOC 315")
            const text = this.textContent.replace(/\s+/g, " ").trim();
            const codeMatch = text.match(/\b[A-Z]{2,}\s?\d{3}\b/);

            if (codeMatch && courseData[codeMatch[0]]) {
                openModal(Object.assign({ code: codeMatch[0] }, courseData[codeMatch[0]]));
                return;
            }

            // If no code found or no data available, show the list item's text as the name
            openModal({ name: text });
        } catch (error) {
            console.error("Error opening course modal:", error);
            // Show error in modal instead of alert
            if (modal) {
                document.getElementById("modalCourseCode").textContent = "Error";
                document.getElementById("modalCourseName").textContent = "Unable to Load Course";
                document.getElementById("modalDescription").textContent =
                    "Sorry, there was an error loading course information. Please try again.";
                modal.style.display = "block";
            }
        }
    });

    // Keyboard support for Enter and Space keys
    courseItem.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this.click();
        }
    });

    // Add pointer cursor
    courseItem.style.cursor = "pointer";
});

// Faculty Modal functionality
const facultyModal = document.getElementById("facultyModal");
const facultyCloseBtn = facultyModal ? facultyModal.querySelector(".close") : null;
createModalCloser(facultyModal, facultyCloseBtn);

function openFacultyModal(faculty) {
    if (!facultyModal) return;

    const modalTitle = document.getElementById("modalFacultyName");
    const modalPosition = document.getElementById("modalFacultyPosition");
    const modalEmail = document.getElementById("modalFacultyEmail");
    const modalBio = document.getElementById("modalFacultyBio");
    const modalSpecializations = document.getElementById("modalSpecializations");
    const modalInterests = document.getElementById("modalInterests");
    const modalProfile = document.getElementById("modalProfileLink");
    const modalPhoto = document.getElementById("modalFacultyPhoto");

    if (modalTitle) modalTitle.textContent = faculty.name || "Faculty Member";
    if (modalPosition)
        modalPosition.textContent = `${faculty.title || ""} ${
            faculty.position ? "| " + faculty.position : ""
        }`.trim();
    if (modalEmail) {
        modalEmail.innerHTML = faculty.email
            ? `<a href="mailto:${faculty.email}">${faculty.email}</a>`
            : "Email not available";
    }
    if (modalBio) modalBio.textContent = faculty.bio || "Biography information not available.";

    // Display faculty photo if available
    if (modalPhoto) {
        if (faculty.photo) {
            modalPhoto.src = faculty.photo;
            modalPhoto.alt = faculty.name || "Faculty Photo";
            modalPhoto.style.display = "block";
        } else {
            modalPhoto.style.display = "none";
        }
    }

    if (modalSpecializations) {
        if (faculty.specializations && faculty.specializations.length > 0) {
            modalSpecializations.innerHTML = faculty.specializations
                .map((spec) => `<span class="tag">${spec}</span>`)
                .join("");
        } else {
            modalSpecializations.textContent = "Not specified";
        }
    }

    if (modalInterests) {
        if (faculty.interests && faculty.interests.length > 0) {
            modalInterests.innerHTML = faculty.interests
                .map((interest) => `<span class="tag">${interest}</span>`)
                .join("");
        } else {
            modalInterests.textContent = "Not specified";
        }
    }

    if (modalProfile && faculty.profileUrl) {
        modalProfile.href = faculty.profileUrl;
        modalProfile.style.display = "inline-block";
    } else if (modalProfile) {
        modalProfile.style.display = "none";
    }

    if (facultyModal.openModal) {
        facultyModal.openModal();
    } else {
        facultyModal.style.display = "block";
        if (facultyCloseBtn) {
            facultyCloseBtn.focus();
        }
    }
}

// Add click listeners to faculty cards
const facultyCards = document.querySelectorAll(".faculty-card");
facultyCards.forEach((card) => {
    // Make keyboard accessible
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");

    card.addEventListener("click", function () {
        const facultyName = this.querySelector("h3")?.textContent.trim();
        if (facultyName && facultyData[facultyName]) {
            openFacultyModal(Object.assign({ name: facultyName }, facultyData[facultyName]));
        }
    });

    // Keyboard support
    card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this.click();
        }
    });

    // Add pointer cursor and hover effect
    card.style.cursor = "pointer";
    card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-5px)";
    });
    card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        const isActive = navMenu.classList.toggle("active");
        hamburger.setAttribute("aria-expanded", isActive ? "true" : "false");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-menu a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
        });
    });
}

// Dropdown Menu Functionality - Touch-friendly with ARIA
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

if (dropdown && dropdownToggle && dropdownMenu) {
    let isTouch = false;

    // Detect if device supports touch
    window.addEventListener(
        "touchstart",
        function detectTouch() {
            isTouch = true;
            window.removeEventListener("touchstart", detectTouch);
        },
        { passive: true }
    );

    // Toggle dropdown on click for touch devices and mobile
    dropdownToggle.addEventListener("click", (e) => {
        if (isTouch || window.innerWidth <= 768) {
            e.preventDefault();
            const isOpen = dropdown.classList.toggle("active");
            dropdownToggle.setAttribute("aria-expanded", isOpen);
            dropdownMenu.setAttribute("aria-hidden", !isOpen);
        }
    });

    // Keyboard support - Enter/Space to toggle
    dropdownToggle.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            const isOpen = dropdown.classList.toggle("active");
            dropdownToggle.setAttribute("aria-expanded", isOpen);
            dropdownMenu.setAttribute("aria-hidden", !isOpen);
        } else if (e.key === "Escape") {
            dropdown.classList.remove("active");
            dropdownToggle.setAttribute("aria-expanded", "false");
            dropdownMenu.setAttribute("aria-hidden", "true");
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("active");
            dropdownToggle.setAttribute("aria-expanded", "false");
            dropdownMenu.setAttribute("aria-hidden", "true");
        }
    });

    // Close dropdown when clicking a dropdown item
    document.querySelectorAll(".dropdown-menu a").forEach((link) => {
        link.addEventListener("click", () => {
            dropdown.classList.remove("active");
            dropdownToggle.setAttribute("aria-expanded", "false");
            dropdownMenu.setAttribute("aria-hidden", "true");
        });
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// Contact Form Submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        try {
            // Get form values
            const nameInput = this.querySelector('input[type="text"]');
            const emailInput = this.querySelector('input[type="email"]');
            const messageInput = this.querySelector("textarea");
            const submitBtn = this.querySelector(".submit-btn");

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            // Client-side validation (server-side validation is REQUIRED if you add a backend)
            if (!name || name.length < 2) {
                nameInput.setCustomValidity("Please enter a valid name (at least 2 characters).");
                nameInput.reportValidity();
                nameInput.focus();
                return;
            }

            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                emailInput.setCustomValidity("Please enter a valid email address.");
                emailInput.reportValidity();
                emailInput.focus();
                return;
            }

            if (!message || message.length < 10) {
                messageInput.setCustomValidity("Please enter a message (at least 10 characters).");
                messageInput.reportValidity();
                messageInput.focus();
                return;
            }

            // Sanitize inputs - remove potential XSS characters (basic client-side only)
            // NOTE: This is NOT sufficient for production - you MUST have server-side sanitization
            const sanitizedName = name.replace(/[<>]/g, "");
            const sanitizedMessage = message.replace(/[<>]/g, "");

            // Disable button and show loading state
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = "Sending...";

            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Show success message
                submitBtn.textContent = "✓ Message Sent!";
                submitBtn.style.background = "var(--accent-green)";

                // Reset form
                this.reset();

                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = "";
                }, 3000);

                // TODO: Replace setTimeout with actual form submission to a secure backend endpoint
                // Example:
                // fetch('/api/contact', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify({ name: sanitizedName, email, message: sanitizedMessage })
                // })
                // .then(response => response.json())
                // .then(data => { /* handle success */ })
                // .catch(error => { /* handle error */ });
            }, 500);
        } catch (error) {
            console.error("Error submitting form:", error);
            const submitBtn = this.querySelector(".submit-btn");
            if (submitBtn) {
                submitBtn.textContent = "✗ Error - Try Again";
                submitBtn.style.background = "#d32f2f";
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = "Send Message";
                    submitBtn.style.background = "";
                }, 3000);
            }
        }
    });
}

// Add scroll effect to header
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.2)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
});

// CTA Button Scroll to Programs
const ctaBtn = document.querySelector(".cta-btn");
if (ctaBtn) {
    ctaBtn.addEventListener("click", function () {
        const programsSection = document.querySelector("#programs");
        if (programsSection) {
            programsSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Add fade-in animation to cards
document.querySelectorAll(".program-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
});

document.querySelectorAll(".faculty-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
});

// Folder cards with href will open automatically via HTML links
// Cards without href (coming soon) are handled by CSS and aria-label

// Materials Tab Switching - removed (not used in current HTML structure)

// Hero Carousel Functionality
(function () {
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.querySelector(".carousel-prev");
    const nextBtn = document.querySelector(".carousel-next");
    let currentSlide = 0;
    let autoSlideInterval;

    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach((slide) => slide.classList.remove("active"));

        // Add active class to current slide
        slides[index].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            nextSlide();
            resetAutoSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            prevSlide();
            resetAutoSlide();
        });
    }

    // Pause on hover
    const carousel = document.querySelector(".hero-carousel");
    if (carousel) {
        carousel.addEventListener("mouseenter", () => {
            clearInterval(autoSlideInterval);
        });
        carousel.addEventListener("mouseleave", () => {
            startAutoSlide();
        });
    }

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
            prevSlide();
            resetAutoSlide();
        } else if (e.key === "ArrowRight") {
            nextSlide();
            resetAutoSlide();
        }
    });

    // Touch/Swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50;

    if (carousel) {
        carousel.addEventListener(
            "touchstart",
            (e) => {
                touchStartX = e.changedTouches[0].screenX;
            },
            { passive: true }
        );

        carousel.addEventListener(
            "touchend",
            (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            },
            { passive: true }
        );

        function handleSwipe() {
            const swipeDistance = touchEndX - touchStartX;
            if (Math.abs(swipeDistance) > minSwipeDistance) {
                if (swipeDistance > 0) {
                    // Swipe right - go to previous
                    prevSlide();
                } else {
                    // Swipe left - go to next
                    nextSlide();
                }
                resetAutoSlide();
            }
        }
    }

    // Start auto-slide
    startAutoSlide();
})();

// Scholarship Carousel Functionality
(function () {
    const scholarshipsGrid = document.querySelector(".scholarships-grid");
    const scholarshipCards = document.querySelectorAll(".scholarship-card");
    const prevBtn = document.querySelector(".scholarship-carousel-prev");
    const nextBtn = document.querySelector(".scholarship-carousel-next");

    if (!scholarshipsGrid || !scholarshipCards.length || !prevBtn || !nextBtn) {
        return; // Exit if elements don't exist
    }

    let currentIndex = 0;
    const cardsPerView = getCardsPerView();
    const totalCards = scholarshipCards.length;
    let autoScrollInterval;

    function getCardsPerView() {
        const width = window.innerWidth;
        if (width > 1200) return 4;
        if (width > 900) return 3;
        if (width > 600) return 2;
        return 1;
    }

    function updateCarousel() {
        const cardsPerView = getCardsPerView();
        const maxIndex = Math.max(0, totalCards - cardsPerView);

        // Ensure currentIndex is within bounds
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }
        if (currentIndex < 0) {
            currentIndex = 0;
        }

        // Scroll to show current cards
        if (scholarshipCards.length > 0) {
            const cardWidth = scholarshipCards[0].offsetWidth + 30; // card width + gap
            scholarshipsGrid.scrollTo({
                left: currentIndex * cardWidth,
                behavior: "smooth",
            });
        }

        // Update button visibility
        prevBtn.style.display = currentIndex === 0 ? "none" : "flex";
        nextBtn.style.display = currentIndex >= maxIndex ? "none" : "flex";
    }

    function nextScholarship() {
        const cardsPerView = getCardsPerView();
        const maxIndex = Math.max(0, totalCards - cardsPerView);
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    }

    function prevScholarship() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            const cardsPerView = getCardsPerView();
            const maxIndex = Math.max(0, totalCards - cardsPerView);
            if (currentIndex >= maxIndex) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            updateCarousel();
        }, 6000); // Change every 6 seconds
    }

    function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        startAutoScroll();
    }

    // Event listeners
    nextBtn.addEventListener("click", () => {
        nextScholarship();
        resetAutoScroll();
    });

    prevBtn.addEventListener("click", () => {
        prevScholarship();
        resetAutoScroll();
    });

    // Pause on hover
    scholarshipsGrid.addEventListener("mouseenter", () => {
        clearInterval(autoScrollInterval);
    });

    scholarshipsGrid.addEventListener("mouseleave", () => {
        startAutoScroll();
    });

    // Handle window resize
    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            currentIndex = 0;
            updateCarousel();
        }, 250);
    });

    // Initialize
    updateCarousel();
    startAutoScroll();

    // Hide buttons on mobile
    function updateButtonVisibility() {
        if (window.innerWidth <= 768) {
            prevBtn.style.display = "none";
            nextBtn.style.display = "none";
        } else {
            updateCarousel();
        }
    }

    window.addEventListener("resize", () => {
        updateButtonVisibility();
    });

    updateButtonVisibility();
})();
