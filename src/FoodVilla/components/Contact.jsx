const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4"> Contact US</h1>
      <form action="">
        <input
          className="border border-black rounded-lg m-2"
          type="text"
          placeholder="User Name"
        />
        <input
          className="border border-black rounded-lg m-2"
          type="text"
          placeholder="Your Message"
        />
        <button className="border border-black rounded-lg hover:bg-gray-300">
          Submit
        </button>{" "}
      </form>
    </div>
  );
};

export default Contact;
