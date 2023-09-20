import "./Overview.css";
const Overview = () => {
  return (
    <>
      <div className="overview-container pt-11 pl-32">
        <div className="slogan text-2xl py-5">
          <p>Igniting a Revolution in HR Innovation</p>
          <img className="slogan-line ml-56" src="../../assets/line.png" alt="line" />
        </div>
        <div className="overview-content">
          <div className="overview-content-body">
            <p className="text-7xl pt-11">getlinked Tech<br />Hackathon <span>1.0</span></p>
          </div>
          <img className="overview-img" src="../../assets/hacker-img.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Overview;
