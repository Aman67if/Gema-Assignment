const details = () => {
  const data: { id: number; title: string; value: string }[] = [
    {
      id: 1,
      title: "Starting Date",
      value: "15 July 2026",
    },
    {
      id: 2,
      title: "Teaching Mode",
      value: "Online",
    },
    {
      id: 3,
      title: "Age Group",
      value: "8–14 Years",
    },
    {
      id: 4,
      title: "Duration",
      value: "4 Weeks",
    },
    // {
    //   id: 5,
    //   title: "Fees",
    //   value: "₹2,999",
    // },
  ];
  return (
    <div className="mt-4 w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center items-center p-3 md:p-4 rounded-xl w-full h-full min-h-[5rem] text-center
            bg-white/10 backdrop-blur-md border border-white/20 shadow-lg
            hover:bg-white/20 hover:border-white/40 transition-all duration-300"
        >
          <h4 className="font-semibold text-sm sm:text-base md:text-lg text-white drop-shadow">{item.value}</h4>
          <span className="text-xs sm:text-sm md:text-sm leading-tight mt-1 text-white/70">{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default details;
