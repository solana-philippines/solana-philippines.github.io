interface Resource {
  title: string;
  tags: string[];
  description: string;
  externalUrl: string;
}

const BEGINNER_RESOURCES: Resource[] = [
  {
    title: "The Odin Project: Foundations",
    tags: ["Web2", "HTML", "CSS", "Javascript"],
    description:
      "Learn the basics of Web Development to prepare you for Frontend Development.",
    externalUrl:
      "https://www.theodinproject.com/paths/foundations/courses/foundations",
  },
  {
    title: "The Rust Programming Language",
    tags: ["Rust"],
    description:
      "The Rust Programming Language, an introductory book about Rust. The Rust programming language helps you write faster, more reliable software.",
    externalUrl: "https://doc.rust-lang.org/book/title-page.html",
  },
  {
    title: "Solana Development Course",
    tags: ["Solana", "Fundamentals", "Course"],
    description:
      "This course is designed to be the absolute best starting point for Web Developers looking to learn Web3 Development.",
    externalUrl: "https://soldev.app/course",
  },
  {
    title: "Josh's DevBox: Solana Playlist",
    tags: ["Beginner", "Videos", "Youtube"],
    description:
      "You prefer videos over articles / documentations? Let Josh show you how to develop Solana programs starting from the basics.",
    externalUrl: "https://doc.rust-lang.org/book/title-page.html",
  },
];

const INTERMEDIATE_RESOURCES: Resource[] = [
  {
    title: "Solana Cookbook",
    tags: ["Solana", "Tutorials"],
    description:
      "The Solana Cookbook is a developer resource that provides the essential concepts and references for building applications on Solana.",
    externalUrl: "https://solanacookbook.com/",
  },
  {
    title: "Programming on Solana - An Introduction",
    tags: ["Tutorial", "Intermediate"],
    description:
      "This guide is meant to serve as an intro to coding on the Solana (opens new window) Blockchain, using an escrow program as an example.",
    externalUrl:
      "https://paulx.dev/blog/2021/01/14/programming-on-solana-an-introduction/",
  },
  {
    title: "Anchor Book",
    tags: ["Anchor", "Reference", "Tutorial"],
    description:
      "This book covers the fundamentals of building Solana programs with Anchor.",
    externalUrl: "https://book.anchor-lang.com/introduction/introduction.html",
  },
  {
    title: "Metaplex",
    tags: ["Standards", "Tools", "SDK"],
    description:
      "The fastest & most affordable NFT ecosystem for marketplaces, games, arts & collectibles.",
    externalUrl: "https://www.metaplex.com/",
  },
  {
    title: "Web3 Hacking: Rust-based Chains",
    tags: ["Security", "Rust", "Auditing"],
    description:
      "This Twitter thread covers the fundamentals of hacking on Rust chains by Halborn Security's very own, Timur Guvenkaya.",
    externalUrl:
      "https://twitter.com/0xsanny/status/1508868586890223626?s=20&t=OWf0WEsb7W7Y1i-v_c82tw",
  },
  {
    title: "Neodyme Blog",
    tags: ["Security"],
    description: "This blogs covers some articles on Solana security.",
    externalUrl: "https://blog.neodyme.io/",
  },
];

const ADVANCE_RESOURCES: Resource[] = [
  {
    title: "Solana Web3.js",
    tags: ["Documentation", "Javascript"],
    description:
      "This is the Solana Javascript API built on the Solana JSON RPC API.",
    externalUrl: "https://solana-labs.github.io/solana-web3.js/",
  },
  {
    title: "Solana SPL Token",
    tags: ["Documentation", "Javascript"],
    description:
      "A TypeScript library for interacting with the SPL Token program.",
    externalUrl:
      "https://solana-labs.github.io/solana-program-library/token/js/",
  },
  {
    title: "Metaplex Javascript SDK",
    tags: ["Documentation", "Javascript"],
    description:
      "This SDK helps developers get started with the on-chain tools provided by Metaplex.",
    externalUrl: "https://github.com/metaplex-foundation/js",
  },
  {
    title: "Solana Program",
    tags: ["Documentation", "Rust"],
    description: "The base library for all Solana on-chain Rust programs.",
    externalUrl: "https://docs.rs/solana-program/latest/solana_program/",
  },
  {
    title: "Solana SDK",
    tags: ["Documentation", "Rust"],
    description: "The base library for Solana SDK.",
    externalUrl: "https://docs.rs/solana-sdk/latest/solana_sdk/",
  },
  {
    title: "SPL Token",
    tags: ["Documentation", "Rust"],
    description: "The base library for Solana SPL Token",
    externalUrl: "https://docs.rs/spl-token/latest/spl_token/",
  },
  {
    title: "Anchor Framework",
    tags: ["Documentation", "Rust"],
    description: "The base library for Anchor",
    externalUrl: "https://docs.rs/anchor-lang/latest/anchor_lang/",
  },
];

export { BEGINNER_RESOURCES, INTERMEDIATE_RESOURCES, ADVANCE_RESOURCES };
