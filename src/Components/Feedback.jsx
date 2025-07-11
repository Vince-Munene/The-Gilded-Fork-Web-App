const Feedback = () => {
  return (
    <div id="feedback" className="min-h-screen bg-[#FAFADE] flex flex-col items-center justify-start pt-12">
      <h2 className="text-2xl md:text-3xl font-bold font-jaro mb-2 text-center">Share Your Experience</h2>
      <p className="mb-8 text-lg text-center">We value your feedback and read every message</p>
      <form className="w-full max-w-md flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="bg-[#E5E5E5] rounded-md py-3 px-4 text-lg text-center font-medium focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-[#E5E5E5] rounded-md py-3 px-4 text-lg text-center font-medium focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Phone Number(eg. 0712-345-678)"
          className="bg-[#E5E5E5] rounded-md py-3 px-4 text-lg text-center font-bold focus:outline-none"
        />
        <textarea
          placeholder="Message Us"
          className="bg-[#E5E5E5] rounded-md py-3 px-4 text-lg text-center font-medium focus:outline-none resize-none min-h-[60px]"
        />
        <button
          type="submit"
          className="bg-[#E5E5E5] rounded-md py-3 px-4 text-lg font-bold text-black hover:bg-[#e0e0e0] transition-colors"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback; 