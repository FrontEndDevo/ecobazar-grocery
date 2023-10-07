import Jenny from "../assets/images/about/Jenny.webp";
import Jane from "../assets/images/about/Jane.webp";
import Cody from "../assets/images/about/Cody.webp";
import Robert from "../assets/images/about/Robert.webp";
import Slider from "react-slick";

const ourTeam = [
  {
    img: Jenny,
    name: "Jenny Wilson",
    job: "Ceo & Founder",
  },
  {
    img: Jane,
    name: "Jane Cooper",
    job: "Worker",
  },
  {
    img: Cody,
    name: "Cody Fisher",
    job: "Security Guard",
  },
  {
    img: Robert,
    name: "Robert Fox",
    job: "Senior Farmer Manager",
  },
  {
    img: Jenny,
    name: "Jenny Wilson",
    job: "Ceo & Founder",
  },
  {
    img: Jane,
    name: "Jane Cooper",
    job: "Worker",
  },
  {
    img: Cody,
    name: "Cody Fisher",
    job: "Security Guard",
  },
  {
    img: Robert,
    name: "Robert Fox",
    job: "Senior Farmer Manager",
  },
];

const Team = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const groverTeam = (
    <ul>
      <Slider {...settings}>
        {ourTeam.map((member, i) => (
          <li key={i} className="bg-white rounded-lg outline-none">
            <img
              src={member.img}
              alt={member.name}
              className="w-full rounded-t-lg h-80"
            />
            <div className="p-4">
              <h3 className="mb-2 text-2xl text-main-700">{member.name}</h3>
              <span className="text-base text-main-100">{member.job}</span>
            </div>
          </li>
        ))}
      </Slider>
    </ul>
  );

  return (
    <div className="bg-slate-50">
      <div className="container py-20">
        <div className="px-10 mb-16 text-center xl:px-96">
          <h2 className="mb-6 text-3xl font-bold lg:text-5xl text-main-700">
            Our Awesome Team
          </h2>
          <p className="text-sm lg:text-lg text-main-100">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi.
          </p>
        </div>
        {groverTeam}
      </div>
    </div>
  );
};

export default Team;
