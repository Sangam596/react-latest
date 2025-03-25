import { User } from "lucide-react";
import { useState } from "react";

const VideoComment = [
  {
    user: "Sangam Bgk",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
    replies: [
      {
        user: "Sangam Bgk",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
        replies: [
          {
            user: "Sangam Bgk",
            comment:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
            replies: [
              {
                user: "Sangam Bgk",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                replies: [
                  {
                    user: "Sangam Bgk",
                    comment:
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                    replies: [
                      {
                        user: "Sangam Bgk",
                        comment:
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                        replies: [],
                      },
                      {
                        user: "Sangam Bgk",
                        comment:
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                        replies: [],
                      },
                    ],
                  },
                  {
                    user: "Sangam Bgk",
                    comment:
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                    replies: [],
                  },
                  {
                    user: "Sangam Bgk",
                    comment:
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                    replies: [],
                  },
                  {
                    user: "Sangam Bgk",
                    comment:
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                    replies: [],
                  },
                ],
              },
              {
                user: "Sangam Bgk",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                replies: [],
              },
              {
                user: "Sangam Bgk",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                replies: [],
              },
              {
                user: "Sangam Bgk",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                replies: [],
              },
            ],
          },
          {
            user: "Sangam Bgk",
            comment:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
            replies: [
              {
                user: "Sangam Bgk",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                replies: [
                  {
                    user: "Sangam Bgk",
                    comment:
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                    replies: [
                      {
                        user: "Sangam Bgk",
                        comment:
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                        replies: [],
                      },
                      {
                        user: "Sangam Bgk",
                        comment:
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                        replies: [],
                      },
                    ],
                  },
                  {
                    user: "Sangam Bgk",
                    comment:
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                    replies: [],
                  },
                  {
                    user: "Sangam Bgk",
                    comment:
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                    replies: [],
                  },
                  {
                    user: "Sangam Bgk",
                    comment:
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                    replies: [],
                  },
                ],
              },
              {
                user: "Sangam Bgk",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                replies: [],
              },
              {
                user: "Sangam Bgk",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                replies: [],
              },
              {
                user: "Sangam Bgk",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
                replies: [],
              },
            ],
          },
          {
            user: "Sangam Bgk",
            comment:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
            replies: [],
          },
          {
            user: "Sangam Bgk",
            comment:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
            replies: [],
          },
        ],
      },
      {
        user: "Sangam Bgk",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
        replies: [],
      },
      {
        user: "Sangam Bgk",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
        replies: [],
      },
      {
        user: "Sangam Bgk",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
        replies: [],
      },
    ],
  },
  {
    user: "Sangam Bgk",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
    replies: [],
  },
  {
    user: "Sangam Bgk",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
    replies: [],
  },
  {
    user: "Sangam Bgk",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
    replies: [],
  },
  {
    user: "Sangam Bgk",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
    replies: [],
  },
  {
    user: "Sangam Bgk",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
    replies: [],
  },
  {
    user: "Sangam Bgk",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
    replies: [],
  },
  {
    user: "Sangam Bgk",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
    replies: [],
  },
  {
    user: "Sangam Bgk",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
    replies: [],
  },
  {
    user: "Sangam Bgk",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae asperiores quia quam accusantium reprehenderit eaque mollitia cum iusto.  ",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { user, comment, replies } = data;
  const [collapse, setCollapse] = useState(true);

  return (
    <div className="bg-slate-50 rounded-lg ml-2 cursor-pointer  m-2">
      <div
        className="flex pl-2 px-4 mx-0 items-center justify-between hover:bg-slate-300"
        onClick={() => setCollapse(!collapse)}
      >
        <div className="flex ">
          <User />
          <div className="font-bold ml-2 w-40">{user}</div>
        </div>
        {/* Show arrow only if there are replies */}
        {replies.length > 0 && (
          <div>
            <span className="cursor-pointer">{collapse ? "↗" : "↘"}</span>
          </div>
        )}
      </div>
      <div className="pl-4 mb-2">{comment}</div>

      {/* Show replies only if collapsed is true */}
      {collapse && replies.length > 0 && (
        <div className="pl-2 ml-4 border-l-2">
          <CommentList comments={replies} />
        </div>
      )}
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment  key={index} data={comment} />
      ))}
    </div>
  );
};

const Comments = () => {
    const [collapse, setCollapse] = useState(false);

  return (
    <div>
      <div
        className="flex justify-between font-bold items-center cursor-pointer m-2 p-2 px-4 mt-10 bg-slate-400 rounded-lg"
        onClick={() => {
          setCollapse(!collapse);
        }}
      >
        <div> Comments: </div>
        <div className=" text-2xl  "> {collapse ? "↗" : "↘"} </div>
      </div>
      <div>{collapse && <CommentList comments={VideoComment} />}</div>
    </div>
  );
};

export default Comments;
