import { normalize, schema } from "normalizr";
import util from "util";

const originalData = {
  id: "2558",
  posts: [
    {
      id: "123",
      author: {
        id: "1",
        name: "Paul",
      },
      title: "My awesome blog post",
      comments: [
        {
          id: "324",
          commenter: {
            id: "2",
            name: "Nicole",
          },
        },
        {
          id: "5569",
          commenter: {
            id: "3",
            name: "Fernando",
          },
        },
        {
          id: "292",
          commenter: {
            id: "2",
            name: "Nicole",
          },
        },
        {
          id: "598",
          commenter: {
            id: "1",
            name: "Paul",
          },
        },
      ],
    },
    {
      id: "124",
      author: {
        id: "2",
        name: "Nicole",
      },
      title: "My awesome blog post",
      comments: [
        {
          id: "324",
          commenter: {
            id: "5",
            name: "Luis",
          },
        },
        {
          id: "5569",
          commenter: {
            id: "3",
            name: "Fernando",
          },
        },
        {
          id: "292",
          commenter: {
            id: "2",
            name: "Nicole",
          },
        },
        {
          id: "598",
          commenter: {
            id: "1",
            name: "Paul",
          },
        },
      ],
    },
  ],
};
// Define a users schema
const user = new schema.Entity("users");

// Define your comments schema
const comment = new schema.Entity("comments", {
  commenter: user,
});

// Define your article
const article = new schema.Entity("articles", {
  author: user,
  comments: [comment],
});

// Define your blog
const blog = new schema.Entity("blogs", {
  posts: [article],
});

const print = (obj) => {
  console.log(util.inspect(obj, true, 12, true));
};

const normalizedData = normalize(originalData, blog);
console.log("originalData");
print(originalData);
console.log("normalizedData");
print(normalizedData);
