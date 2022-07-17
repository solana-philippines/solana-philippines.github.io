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
    imgPath: "/assets/images/resources/odin-project.png",
    externalUrl:
      "https://www.theodinproject.com/paths/foundations/courses/foundations",
  },
  {
    title: "The Rust Programming Language",
    tags: ["Rust"],
    description:
      "The Rust Programming Language, an introductory book about Rust. The Rust programming language helps you write faster, more reliable software.",
    imgPath: "/assets/images/resources/rust.png",
    externalUrl: "https://doc.rust-lang.org/book/title-page.html",
  },
  {
    title: "Solana Development Course",
    tags: ["Solana", "Fundamentals", "Course"],
    description:
      "This course is designed to be the absolute best starting point for Web Developers looking to learn Web3 Development.",
    imgPath: "/assets/images/resources/soldev.png",
    externalUrl: "https://soldev.app/course",
  },
  {
    title: "Josh's DevBox: Solana Playlist",
    tags: ["Beginner", "Videos", "Youtube"],
    description:
      "You prefer videos over articles / documentations? Let Josh show you how to develop Solana programs starting from the basics.",
    imgPath: "/assets/images/resources/josh-devbox.png",
    externalUrl: "https://doc.rust-lang.org/book/title-page.html",
  },
];

const INTERMEDIATE_RESOURCES: Resource[] = [
  {
    title: "Solana Cookbook",
    tags: ["Solana", "Tutorials"],
    description:
      "The Solana Cookbook is a developer resource that provides the essential concepts and references for building applications on Solana.",
    imgPath: "/assets/images/resources/solana-cookbook/thumbnail.png",
    externalUrl: "https://solanacookbook.com/",
  },
  {
    title: "Programming on Solana - An Introduction",
    tags: ["Tutorial", "Intermediate"],
    description:
      "This guide is meant to serve as an intro to coding on the Solana (opens new window) Blockchain, using an escrow program as an example.",
    imgPath: "/assets/images/resources/paulx.png",
    externalUrl:
      "https://paulx.dev/blog/2021/01/14/programming-on-solana-an-introduction/",
  },
  {
    title: "Anchor Book",
    tags: ["Anchor", "Reference", "Tutorial"],
    description:
      "This book covers the fundamentals of building Solana programs with Anchor.",
    imgPath: "/assets/images/resources/anchor.png",
    externalUrl: "https://book.anchor-lang.com/introduction/introduction.html",
  },
  {
    title: "Metaplex",
    tags: ["Standards", "Tools", "SDK"],
    description:
      "The fastest & most affordable NFT ecosystem for marketplaces, games, arts & collectibles.",
    imgPath: "/assets/images/resources/metaplex.png",
    externalUrl: "https://www.metaplex.com/",
  },
  {
    title: "Web3 Hacking: Rust-based Chains",
    tags: ["Security", "Rust", "Auditing"],
    description:
      "This Twitter thread covers the fundamentals of hacking on Rust chains by Halborn Security's very own, Timur Guvenkaya.",
    imgPath: "/assets/images/resources/timur.png",
    externalUrl:
      "https://twitter.com/timurguvenkaya/status/1475843655567089676?s=20&t=mSQPMduobCkQQXimDZQJCA",
  },
  {
    title: "Neodyme Blog",
    tags: ["Security"],
    description: "This blogs covers some articles on Solana security.",
    imgPath: "/assets/images/resources/neodyme.png",
    externalUrl: "https://blog.neodyme.io/",
  },
];

const ADVANCE_RESOURCES: Resource[] = [
  {
    title: "Solana Web3.js",
    tags: ["Documentation", "Javascript"],
    description:
      "This is the Solana Javascript API built on the Solana JSON RPC API.",
    imgPath: "/assets/images/solana.png",
    externalUrl: "https://solana-labs.github.io/solana-web3.js/",
  },
  {
    title: "Solana SPL Token",
    tags: ["Documentation", "Javascript"],
    description:
      "A TypeScript library for interacting with the SPL Token program.",
    imgPath: "/assets/images/solana.png",
    externalUrl:
      "https://solana-labs.github.io/solana-program-library/token/js/",
  },
  {
    title: "Metaplex Javascript SDK",
    tags: ["Documentation", "Javascript"],
    description: "The base library for ",
    imgPath: "/assets/images/metaplex.png",
    externalUrl: "https://github.com/metaplex-foundation/js",
  },
  {
    title: "Solana Program",
    tags: ["Documentation", "Rust"],
    description: "The base library for all Solana on-chain Rust programs.",
    imgPath: "/assets/images/solana.png",
    externalUrl: "https://docs.rs/solana-program/latest/solana_program/",
  },
  {
    title: "Solana SDK",
    tags: ["Documentation", "Rust"],
    description: "The base library for Solana",
    imgPath: "/assets/images/solana.png",
    externalUrl: "https://docs.rs/solana-sdk/latest/solana_sdk/",
  },
  {
    title: "SPL Token",
    tags: ["Documentation", "Rust"],
    description: "The base library for Solana SPL Token",
    imgPath: "/assets/images/solana.png",
    externalUrl: "https://docs.rs/spl-token/latest/spl_token/",
  },
  {
    title: "Anchor Framework",
    tags: ["Documentation", "Rust"],
    description: "The base library for Anchor",
    imgPath: "/assets/images/anchor.png",
    externalUrl: "https://docs.rs/anchor-lang/latest/anchor_lang/",
  },
];

export { BEGINNER_RESOURCES, INTERMEDIATE_RESOURCES, ADVANCE_RESOURCES };
