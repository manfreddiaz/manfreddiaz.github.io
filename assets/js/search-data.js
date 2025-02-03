// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "This is a list of the publications I have been involved listed in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-open-source",
          title: "Open Source",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Short summary of my curriculum vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-propos-of-soft-condorcet-optimization-and-the-elo-rating-system",
      
        title: "A Propos of Soft Condorcet Optimization and The Elo Rating System",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/sco-elo-distill/";
        
      },
    },{id: "news-our-paper-generalization-games-for-reinforcement-learning-has-been-accepted-for-presentation-at-iclr-workshop-on-gamification-and-multiagent-solutions",
          title: 'Our paper Generalization Games for Reinforcement Learning has been accepted for presentation at...',
          description: "",
          section: "News",},{id: "news-i-started-as-a-research-intern-at-j-p-morgan-ai-research-in-london",
          title: 'I started as a Research Intern at J. P. Morgan AI Research in...',
          description: "",
          section: "News",},{id: "news-i-gave-an-invited-talk-on-generalization-games-for-rl-at-berkeley-mals-and-mila-rl-sofa",
          title: 'I gave an invited talk on Generalization Games for RL at Berkeley MALS...',
          description: "",
          section: "News",},{id: "news-i-am-attending-the-cooperative-ai-summer-school-in-london",
          title: 'I am attending the Cooperative AI Summer School in London!',
          description: "",
          section: "News",},{id: "news-excited-to-start-as-an-ai-resident-at-google-x-in-mountain-view",
          title: 'Excited to start as an AI Resident at Google X in Mountain View!...',
          description: "",
          section: "News",},{id: "news-our-work-on-milnor-myerson-games-a-framework-describing-a-multiplayer-interaction-structure-at-the-core-of-machine-ml-has-been-accepted-for-presentation-on-the-finding-the-frame-workshop-at-rlc-2024-see-you-all-in-amherst",
          title: 'Our work on Milnor-Myerson Games, a framework describing a multiplayer interaction structure at...',
          description: "",
          section: "News",},{id: "news-our-work-on-a-cooperative-game-theoretic-approach-to-study-the-teacher-student-curriculum-learning-framework-has-been-accepted-as-is-for-publication-on-tmlr",
          title: 'Our work on a cooperative game-theoretic approach to study the teacher-student curriculum learning...',
          description: "",
          section: "News",},{id: "news-new-paper-out-excited-to-present-soft-condorcet-optimization-a-novel-ranking-method-that-amortizes-the-search-for-condorcet-winners-through-an-approximation-of-the-np-hard-kemmeny-young-voting-method",
          title: 'New paper out! Excited to present Soft Condorcet Optimization, a novel ranking method...',
          description: "",
          section: "News",},{id: "news-proud-to-annouce-that-our-work-on-a-new-theory-of-appropriateness-for-generative-ai-is-finally-out-on-arxiv-massive-multi-year-collaboration-led-by-joel-and-sasha-at-google-deepmind",
          title: 'Proud to annouce that our work on a new theory of appropriateness for...',
          description: "",
          section: "News",},{id: "news-best-paper-nomination-soft-condorcet-optimization-has-been-nominated-for-a-best-paper-award-at-aamas-2025-a-propos-here-are-some-notes-i-developed-while-working-on-sco-to-understand-the-sco-elo-relationship-they-should-come-as-a-blog-post-soon",
          title: 'Best paper nomination! Soft Condorcet Optimization has been nominated for a best paper...',
          description: "",
          section: "News",},{id: "news-aamas-2025-tutorial-together-with-marc-lanctot-kate-larson-and-ian-gemp-we-are-be-presenting-a-tutorial-on-evaluation-of-general-ai-agents-at-aamas-2025-website-and-tutorial-notes-are-coming-soon",
          title: 'AAMAS 2025 Tutorial! Together with Marc Lanctot, Kate Larson and Ian Gemp we...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/manfreddiaz.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%69%61%7A%63%61%62%6D@%6D%69%6C%61.%71%75%65%62%65%63", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/manfreddiaz", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/manfreddiaz", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=z_vFbp8AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
