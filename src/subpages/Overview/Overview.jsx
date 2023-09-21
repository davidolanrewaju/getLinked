import Button from "../../components/ui/Buttons/Button";
import useCountdown from "../../hooks/useCountdown";
import "./Overview.css";
const Overview = () => {
  const initialTime = Date.now() / 1000;
  const timeLeft = useCountdown(initialTime);

  const hours = Math.ceil(timeLeft / 3600);
  const minutes = Math.ceil((timeLeft % 3600) / 60);
  const seconds = Math.ceil(timeLeft % 60);

  return (
    <>
      <div className="overview-container">
        <div className="slogan text-2xl pt-11">
          <p>Igniting a Revolution in HR Innovation</p>
          <img
            className="slogan-line ml-56"
            src="../../assets/line.png"
            alt="line"
          />
        </div>
        <div className="overview-content ml-28">
          <div className="overview-content-body pt-28">
            <p className="text-7xl">
              getlinked Tech
              <br />
              Hackathon <span>1.0</span>
            </p>
            <p className="small-text text-sm pb-11">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Button name="Register" />

            <div className="countdown lg:text-6xl pt-6">
                <p>{String(hours).padStart(2, "0")}<span>H</span> </p>
                <p>{String(minutes).padStart(2, "0")}<span>M</span> </p>
                <p>{String(seconds).padStart(2, "0")}<span>S</span> </p>
            </div>
          </div>
          <img
            className="overview-img"
            src="../../assets/hacker-img.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Overview;
