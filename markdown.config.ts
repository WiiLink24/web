import remarkToc from "remark-toc";
import rehypeToc from "rehype-toc";

export default {
  remarkPlugins: [[remarkToc, { tight: true, ordered: true, behavior: "after"}]],
  rehypePlugins: [
    [
        
      rehypeToc,
      {
        headings: ["h4", "h2", "h3"],
        nav: true,
        position: "beforeend",
        cssClasses: {
          toc: "toc-post", 
          link: "toc-link", 
        },
      },
    ],
  ],
};

