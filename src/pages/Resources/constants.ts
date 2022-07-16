interface Resource {
  title: string;
  tags: string[];
  description: string;
  imgPath: string;
  externalUrl: string;
}

const BEGINNER_RESOURCES: Resource[] = [
  {
    title: "The Odin Project: Foundations",
    tags: ["Web2", "HTML", "CSS", "Javascript"],
    description:
      "Learn the basics of Web Development to prepare you for Frontend Development.",
    imgPath: "/assets/images/resources/odin-project/thumbnail.png",
    externalUrl:
      "https://www.theodinproject.com/paths/foundations/courses/foundations",
  },
  {
    title: "The Rust Programming Language",
    tags: ["Rust"],
    description:
      "The Rust Programming Language, an introductory book about Rust. The Rust programming language helps you write faster, more reliable software.",
    imgPath: "/assets/images/resources/rust/thumbnail.png",
    externalUrl: "https://doc.rust-lang.org/book/title-page.html",
  },
  {
    title: "Solana Development Course",
    tags: ["Solana", "Fundamentals"],
    description:
      "This course is designed to be the absolute best starting point for Web Developers looking to learn Web3 Development.",
    imgPath: "/assets/images/resources/soldev/thumbnail.png",
    externalUrl: "https://doc.rust-lang.org/book/title-page.html",
  },
];

export { BEGINNER_RESOURCES };
