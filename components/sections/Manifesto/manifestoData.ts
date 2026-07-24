import { ManifestoData } from "./types";

export const manifesto: ManifestoData = {
  badge: "CAMPAIGN MANIFESTO",

  title: "The Kajiado Blueprint",

  description:
    "A practical roadmap for building a stronger, more prosperous Kajiado County through accountable leadership, sustainable development, and people-centered policies.",

  groups: [
    {
      title: "People First",

      description:
        "Putting every family at the heart of development through quality healthcare, education, clean water, and inclusive opportunities.",

      pillars: [
        {
          icon: "heart",

          title: "Healthcare",

          subtitle: "Healthy Families, Strong Communities",

          summary:
            "Healthcare is the foundation of a thriving county. Every resident deserves access to quality, affordable, and timely medical care. Our administration will strengthen health systems, improve emergency response, expand maternal healthcare, and ensure that every family receives quality medical services.",

          commitments: [
            "Upgrade county hospitals and health centres",
            "Improve maternal and child healthcare",
            "Recruit qualified healthcare professionals",
            "Ensure availability of essential medicines",
          ],
        },

        {
          icon: "education",

          title: "Education",

          subtitle: "Empowering the Next Generation",

          summary:
            "Education opens the door to opportunity. Our administration will invest in schools, teachers, digital learning, and vocational training to prepare young people with the knowledge and skills needed for the future.",

          commitments: [
            "Improve ECDE centres",
            "Expand bursary programmes",
            "Support vocational training",
            "Invest in digital learning",
          ],
        },

        {
          icon: "water",

          title: "Water & Sanitation",

          subtitle: "Clean Water for Every Community",

          summary:
            "Reliable access to clean water improves health, agriculture, and economic growth. We will expand water infrastructure while protecting our natural resources for future generations.",

          commitments: [
            "Increase access to clean water",
            "Develop boreholes",
            "Improve sanitation services",
            "Protect water resources",
          ],
        },

        {
          icon: "people",

          title: "Youth & Women",

          subtitle: "Leaving No One Behind",

          summary:
            "The future of Kajiado depends on empowering young people and women. We will expand opportunities through skills development, entrepreneurship, innovation, and equal participation in county development.",

          commitments: [
            "Expand skills development programmes",
            "Support innovation and entrepreneurship",
            "Increase access to enterprise financing",
            "Promote inclusive opportunities",
          ],
        },
      ],
    },

    {
      title: "Growth & Governance",

      description:
        "Driving economic growth through modern infrastructure, environmental stewardship, job creation, and transparent leadership.",

      pillars: [
        {
          icon: "infrastructure",

          title: "Infrastructure",

          subtitle: "Connecting Communities",

          summary:
            "Modern infrastructure drives economic growth. Better roads, markets, public facilities, and digital connectivity will improve service delivery and unlock opportunities across Kajiado County.",

          commitments: [
            "Upgrade county road networks",
            "Modernize public markets",
            "Expand digital infrastructure",
            "Improve public facilities",
          ],
        },

        {
          icon: "jobs",

          title: "Jobs & Economy",

          subtitle: "Creating Opportunity",

          summary:
            "A thriving local economy creates employment and improves livelihoods. We will support entrepreneurs, strengthen agriculture, promote tourism, and attract investment into Kajiado County.",

          commitments: [
            "Support local entrepreneurs",
            "Promote tourism investment",
            "Strengthen agricultural value chains",
            "Create employment opportunities",
          ],
        },

        {
          icon: "environment",

          title: "Environment",

          subtitle: "Protecting Our Future",

          summary:
            "Protecting our environment is essential for sustainable development. Responsible conservation today will preserve Kajiado's natural heritage while supporting agriculture, tourism, and future generations.",

          commitments: [
            "Promote tree planting initiatives",
            "Strengthen climate resilience",
            "Support sustainable land management",
            "Protect natural resources",
          ],
        },

        {
          icon: "governance",

          title: "Good Governance",

          subtitle: "Leadership You Can Trust",

          summary:
            "Good governance is built on integrity, transparency, and accountability. Every decision should serve the public interest while ensuring prudent management of public resources and meaningful citizen participation.",

          commitments: [
            "Promote transparency and accountability",
            "Encourage public participation",
            "Improve county service delivery",
            "Ensure responsible use of public resources",
          ],
        },
      ],
    },
  ],
};