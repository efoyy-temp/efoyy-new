const items = [
  {
    title: "Hail a ride with our cars.",
    paragraph:
      "Unlock better pricing with our innovative pricing algorithm! Simply hop in and ask your driver to use our app for the best rates.",
    img: "car-rent.png",
  },
  {
    title: "Hail a ride with our cars.",
    paragraph:
      "Unlock better pricing with our innovative pricing algorithm! Simply hop in and ask your driver to use our app for the best rates.",
    img: "car-rent.png",
  },
  {
    title: "Hail a ride with our cars.",
    paragraph:
      "Unlock better pricing with our innovative pricing algorithm! Simply hop in and ask your driver to use our app for the best rates.",
    img: "car-rent.png",
  },
];
const Overview = () => {
  return (
    <div className="min-h-screen  px-6 py-20 flex flex-col gap-6 justify-center">
      <div className="flex items-center flex-col gap-2">
        <p className="text-primary font-bold text-sm">Ride ordering</p>
        <h2 className="text-4xl bg-gradient-to-r leading-relaxed from-foreground to-foreground/60 text-clip text-transparent bg-clip-text font-bold ">
          Simplifying ride booking
        </h2>
        <p className="text-xs font-semibold">
          Efoyy simplifies your ride booking brooking easy and intuitive{" "}
        </p>
      </div>
      <div className="flex max-md:flex-col justify-between gap-12 ">
        {items.map((item, index) => (
          <div
            key={index}
            className="gap-8 md:max-w-sm flex items-center flex-col bordr shrink border-red-300"
          >
            <div className="p-4">
              <img src={item.img} className="h-32" />
            </div>
            <div className="space-y-3 flex flex-col items-center">
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm font-medium leading-relaxed text-center text-secondary-foreground text-balance">
                {item.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
