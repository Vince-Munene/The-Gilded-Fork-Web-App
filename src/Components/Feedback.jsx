const Feedback = () => {
  return (
    <div id="feedback" className="min-h-screen bg-[#FAFADE] dark:bg-[#232b38] flex flex-col items-center justify-start pt-12">
      <h2 className="text-2xl md:text-3xl font-bold font-jaro mb-2 text-center text-black dark:text-white">Share Your Experience</h2>
      <p className="mb-8 text-lg text-center text-black dark:text-white">We value your feedback and read every message</p>
      <form className="w-full max-w-md flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="bg-[#E5E5E5] dark:bg-[#2e3746] rounded-md py-3 px-4 text-lg text-center font-medium focus:outline-none text-black dark:text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-[#E5E5E5] dark:bg-[#2e3746] rounded-md py-3 px-4 text-lg text-center font-medium focus:outline-none text-black dark:text-white"
        />
        <input
          type="tel"
          placeholder="Phone Number(eg. 0712-345-678)"
          className="bg-[#E5E5E5] dark:bg-[#2e3746] rounded-md py-3 px-4 text-lg text-center font-bold focus:outline-none text-black dark:text-white"
        />
        <textarea
          placeholder="Message Us"
          className="bg-[#E5E5E5] dark:bg-[#2e3746] rounded-md py-3 px-4 text-lg text-center font-medium focus:outline-none resize-none min-h-[60px] text-black dark:text-white"
        />
        <button
          type="submit"
          className="bg-[#E5E5E5] dark:bg-[#2e3746] rounded-md py-3 px-4 text-lg font-bold text-black dark:text-white hover:bg-[#e0e0e0] dark:hover:bg-[#31394a] transition-colors"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback; 