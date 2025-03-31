import github from "../../assets/icons/icons8-github.svg";
import linkedin from "../../assets/icons/icons8-linkedin.svg";

const Branding = () => {
  return (
    <>
      <div className="mb-1 w-full text-center absolute top-3">
        <a
          href="https://github.com/Premkumar981/WeatherApp_Using_Reactjs"
          target="_blank"
          rel="noreferrer"
          className="me-4 hover:text-blue-700 hover:underline"
        >
          <img src={github} alt="github" className="inline" /> github repo
        </a>
        <a
          href="https://www.linkedin.com/in/surupremkumar/"
          target="_blank"
          rel="noreferrer"
          className="me-4 hover:text-blue-700 hover:underline"
        >
          <img src={linkedin} alt="linkedin" className="inline" /> my linkedin
        </a>
      </div>
      <div className="mb-6 mt-4 lg:absolute lg:bottom-4 lg:my-0 w-full text-center font-semibold">
        Weather Station Dashboard
        <span className="text-sm font-normal ml-1">- SURU PREM KUMAR</span>
      </div>
    </>
  );
};

export default Branding;
