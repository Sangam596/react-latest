const LiveComments = () => {
  return <div>LiveComments</div>;
};

const NthComments = () => {
  return <div>NthComments</div>;
};

const Comments = () => {
  const buttons = [
    {
      title: "Comments",
      component: LiveComments,
    },
    {
      title: "Nth Comments",
      component: NthComments,
    },
  ];
  return (
    <div className="">
      {buttons.map((button) => (
        <button className="m-4 p-2 px-4 border shadow-lg rounded-lg bg-slate-200" key={button.title}>
          {button.title}
        </button>
      ))}
    </div>
  );
};

export default Comments;
