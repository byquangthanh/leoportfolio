import LogoPage from "@/modules/LogoPage";
import Navbar from "@/modules/Navbar";
import { notFound } from "next/navigation";
import Image from "next/image";
const projects = {
  seventyfour: {
    id: "seventyfour",
    title: "Seventyfour Collective",
    subtitle: "Branding + Visual Identity",
    description:
      "The Seventyfour Collective is a collective of creatives. The main focus is put on audio-visual practices, ranging from cinematography, music, to creating brandings and graphic design works. Putting an emphasis on blending creativity and art with commerce.",
    images: [
      "frame_6_delay-0.5s.webp",
      "frame_2_delay-0.5s.webp",
      "frame_1_delay-0.5s.webp",
      "frame_0_delay-0.5s.webp",
      "frame_3_delay-0.5s.webp",
      "frame_4_delay-0.5s.webp",
      "frame_5_delay-0.5s.webp",
    ],
  },

  jun: {
    id: "jun",
    title: "Jun",
    subtitle: "Branding + Visual Identity",
    description:
      "Matcha bar in the centre of Prague, differentiates itself from others with their playful visual appearance. The key visual component for this brand is the logo, funky font and the color green.",
    images: [
      "jun 1.webp",
      "jun 2.webp",
      "jun 3.webp",
      "jun 4.webp",
      "jun 5.webp",
      "jun 6.webp",
    ],
  },

  topgal_u: {
    id: "topgal_u",
    title: "Topgal U",
    subtitle: "Branding + Visual Identity",
    description:
      "Topgal U is a sub-brand of the well known backpack company Topgal. The goal of Topgal U is to shift their target audience, from children to older children to almost adults. This is accomplished by inviting the individuals to express themselves by customizing the backpacks.",
    images: [
      "topgal u 1.webp",
      "topgal u 2.webp",
      "topgal u 3.webp",
      "topgal u 4.webp",
      "topgal u 5.webp",
      "topgal u 6.webp",
      "topgal u 7.webp",
    ],
  },

  famufest: {
    id: "famufest",
    title: "Famu Fest",
    subtitle: "Branding + Visual Identity",
    description:
      "This visual identity proposal responds to the festival’s theme “Happy End” by embracing the innocence and imagination of childhood. Through the use of authentic children’s drawings and colorful, hand-drawn typography, the concept creates a playful yet meaningful visual language. It contrasts the weight of serious topics with a lighthearted aesthetic that celebrates creativity, optimism, and the dreams of growing up.",
    images: [
      "famufest 1.webp",
      "famufest 2.webp",
      "famufest 3.webp",
      "famufest 4.webp",
      "famufest 5.webp",
      "famufest 6.webp",
      "famufest 7.webp",
    ],
  },

  mnml: {
    id: "mnml",
    title: "Mnml",
    subtitle: "Logo",
    description:
      "Mnml is a minimalist coffee bar focused on one thing only: serving great coffee. No clutter, no noise, no unnecessary choices - just a quiet, refined space for pure coffee enjoyment.",
    images: [
      "mnml 1.webp",
      "mnml 2.webp",
      "mnml 3.webp",
      "mnml 4.webp",
      "mnml 5.webp",
    ],
  },

  pepino: {
    id: "pepino",
    title: "Pepino",
    subtitle: "Packaging + Logo",
    description:
      "Pepino is a well-known condom brand in the Czech and Slovak markets. It speaks to a younger generation through playfulness, openness, and a modern take on sexuality, encouraging self-expression and confidence.",
    images: [
      "pepino 1.webp",
      "pepino 2.webp",
      "pepino 3.webp",
      "pepino 4.webp",
      "pepino 5.webp",
      "pepino 6.webp",
      "pepino 7.webp",
    ],
  },

  hostivio: {
    id: "hostivio",
    title: "Hostivio",
    subtitle: "Logo",
    description:
      "Hostivio is a system designed for short-term rental management that automates routine tasks, allowing hosts to focus on guest experience. From foreigner reporting to fee calculation, it simplifies the administrative process.",
    images: ["hostivio 1.webp", "hostivio 2.webp", "hostivio 3.webp"],
  },

  notz: {
    id: "notz",
    title: "The Notz",
    subtitle: "Logo",
    description:
      "Notz is an AI-powered app that records lectures or meetings and automatically generates detailed notes. It streamlines the process of capturing and organizing key information, making it easier for users to stay focused and productive during sessions.",
    images: ["notz 1.webp", "notz 2.webp", "notz 3.webp"],
  },
};
interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects[id as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <LogoPage />

      <section className="p-8 z-10 bg-white/0 min-h-screen w-screen absolute flex flex-col sm:flex-row sm:items-center">
        <div className="flex-col sm:flex-row flex  sm:gap-[8vw] sm:fixed pt-24 sm:pt-0">
          <p className="text-black text-lg font-bold pb-8 sm:pb-20 leading-6">
            {project.title} <br />
            {project.subtitle}
          </p>
          <div className="text-black text-lg  pb-20 leading-6   sm:max-w-[25vw] w-full">
            <p className="whitespace-pre-line">{project.description}</p>
          </div>
        </div>

        <div className=" flex  justify-end flex-col right-8 gap-8 items-center  sm:absolute">
          {project.images.map((item, index) => {
            return (
              <Image
                key={index}
                className="w-[70vw] h-[70vw] sm:h-[32vw] sm:w-[32vw] object-contain"
                src={`/assets/${item}`}
                alt="project pic"
                width={500}
                height={500}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(projects).map((id) => ({
    id: id,
  }));
}
