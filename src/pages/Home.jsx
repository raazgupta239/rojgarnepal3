import React from "react";
import ServiceBox from "./../component/ServiceBox.jsx";
import Button from "./../component/Button.jsx";
import "./../css/pageCss/Home.css";

import image from "./../images/hello.jpg";
import image1 from "./../images/search.png";

const services = [
  { title: "Electrician", image: image, description: "Electrical Services" },
  { title: "Plumber", image: image },
  { title: "Painter", image: image },
  { title: "Cleaner", image: image },
  { title: "Dish-Washer", image: image },
  { title: "Laundry", image: image },
  { title: "Carpenter", image: image },
  { title: "Technician", image: image },
  { title: "Sel-roti", image: image },
  { title: "Tuition Teacher", image: image },
  { title: "Sweeper", image: image },
  { title: "Repair-man", image: image },
  { title: "Service 14", image: image },
  { title: "Service 14", image: image },
  { title: "Service 14", image: image },
];

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home">
          <h1>
            Find <span className="highlight">Freelancers</span> Near You
            <br />
            And Get Your Job Done
          </h1>
          <br></br>
          <div className="search-container">
            <button className="filter-button">Filter</button>
            <input
              type="text"
              className="search-input"
              placeholder="Search what you want . . ."
            />
            <button className="search-button">
              <img src={image1} alt="Search" />
            </button>
          </div>
          <br></br>
          <br></br>

          <div className="suggestions">
            <p>You may be looking for :</p>
            <br></br>
            <div className="suggestion-tags">
              <span className="tag">Selroti Maker</span>
              <span className="tag">Electrician</span>
              <span className="tag">Panche Baja</span>
              <span className="tag">Laundry Service</span>
            </div>
          </div>
        </div>
        <div className="home-image">
          <img src={image} alt="RojgarNepal" />
        </div>
      </div>
      <div className="main-page">
        <h1>
          Browse <span className="highlight">Talent</span> By Category
        </h1>
        <p>Get some inspiration from 10+ skills</p>
        <div className="services-container">
          {services.map((service, index) => (
            <ServiceBox
              key={index}
              title={service.title}
              image={service.image}
              // description={service.description}
            />
          ))}
        </div>
        <div className="buttons-container">
          <Button
            label="Join RojgarNepal Community and Start Earning"
            link="/join"
          />
          {/* <Button label="Become a Freelancer" link="/freelancer" /> */}
        </div>
      </div>

      <div className="home-body">
        <div className="body-img">
          <img src={image1} alt="Search" />
        </div>
        <div className="body-content">
          <h1>A whole country of freelance talents at your finger tips</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, odio sit amet consectetur pulvinar, odio turpis tincidunt
            nulla, eu scelerisque nulla libero vitae mauris. Nam condimentum leo
            sit amet velit tempor, at varius urna finibus. Duis in ante sit amet
            lectus laoreet hendrerit. Duis vulputate mi quis massa ultricies,
            nec aliquet eros tristique. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Nunc nec justo nisi.
            Mauris vel libero tortor. Maecenas sagittis odio felis, eget finibus
            urna cursus id. Aenean at urna sapien. Sed eget massa risus. Cras id
            augue quis lorem posuere volutpat nec ut tellus. Vivamus interdum
            odio at tellus pellentesque suscipit. Phasellus vel ex nec nunc
            laoreet convallis. Vivamus pharetra purus id nisi dignissim, nec
            tristique justo fringilla. Donec tempus nulla non mauris dictum
            aliquam. Nulla nec ex est. Nulla facilisi. Sed lacinia aliquam
            ultricies. Integer id purus elit. Etiam dictum sollicitudin metus,
            at fermentum dui viverra sit amet. Suspendisse posuere quam et
            tortor pharetra, nec venenatis ex venenatis. Sed ac enim sed turpis
            rhoncus suscipit nec nec lacus. Etiam auctor, quam eget sagittis
            consequat, nulla ligula laoreet ligula, eu sollicitudin nisi leo non
            leo. Maecenas commodo ex id suscipit fermentum. Maecenas ac ligula
            consequat, dapibus dolor at, sodales dolor. Nulla facilisi.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
