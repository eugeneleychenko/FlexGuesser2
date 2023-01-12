import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import states from "../Data/States";
import Industries from "../Data/Industries";

const CalculateSuccess = () => {
  const [message, setMessage] = useState(null);
  const [explanation, setExplanation] = useState(
    "This deal will have a 76% of being successful, compared to other deals in the past that were: \n-65% success of 4 month at 1.40, -60% success of 6 moth at 1.50."
  );
  const [explanationShown, setExplanationShown] = useState(false);
  const [usstate, setUSState] = useState("");
  const [industry, setIndustry] = useState("");
  const [position, setPosition] = useState("");
  const [range, setRange] = useState("");
  const [fr, setFr] = useState("");
  const [tib, setTib] = useState("");
  const [cScore, setcScore] = useState("");
  const [rate, setRate] = useState();

  const handleClick = () => {
    setMessage(
      //   `${industry} deals in ${usstate} in the ${position} position and a time in business of ${tib} have historically a 60% chance of being fully repaid and  collect 80 cents on the dollar. However, we noticed a higher payoff percentage if the Factor Rate was at least 1.45.

      // `
      "🟢 Fund this deal at 5 months with a factor rate of 1.45"
    );
  };

  const handleClear = () => {
    setMessage("");
    setUSState("");
    setIndustry("");
    setPosition("");
    setRange("");
    setFr("");
    setTib("");
    setcScore("");
  };

  const toggleExplanation = () => {
    setExplanationShown(!explanationShown);
  };

  const pingJSON = (usstate) => {
    fetch(
      "https://opensheet.elk.sh/10bUmqb7ZVR8YSwJrz8RjRCHWmYFZaf2GaP5bc88r7DY/FlexJSON"
    )
      .then((response) => response.json())
      .then((data) => {
        let r;
        data.forEach((item) => {
          if (item.USState == usstate) {
            r = item.Rates;
          }
          // setRate(rate);
          // console.log(data[0].Rates)
        });
      })
      .catch((error) => console.error(error));
    handleClick();
  };

  return (
    <div>
      <form>
        <Dropdown
          className="form-group mx-auto"
          onSelect={(evt) => setUSState(evt)}
        >
          <DropdownButton
            title={usstate ? usstate : "Select a US State"}
            variant="success"
            id="states-dropdown"
          >
            {states.map((usstate) => (
              <Dropdown.Item eventKey={usstate}>{usstate}</Dropdown.Item>
            ))}
          </DropdownButton>
        </Dropdown>

        <Dropdown
          className="form-group mx-auto"
          onSelect={(evt) => setIndustry(evt)}
        >
          <DropdownButton
            title={industry ? industry : "Select an Industry"}
            variant="success"
            id="industry-dropdown"
          >
            {Industries.map((industry) => (
              <Dropdown.Item eventKey={industry}>{industry}</Dropdown.Item>
            ))}
          </DropdownButton>
        </Dropdown>

        {/* <div className="form-group mx-auto" style={{ width: "75%" }}>
          <input className="form-control" placeholder="Position"></input>
        </div> */}

        <Dropdown
          className="form-group mx-auto"
          onSelect={(evt) => setPosition(evt)}
        >
          <DropdownButton
            title={position ? position : "Select Your Position"}
            variant="success"
            id="position-dropdown"
          >
            <Dropdown.Item eventKey="1st">1st</Dropdown.Item>
            <Dropdown.Item eventKey="2nd">2nd</Dropdown.Item>
            <Dropdown.Item eventKey="3rd">3rd</Dropdown.Item>
            <Dropdown.Item eventKey="4th">4th</Dropdown.Item>
          </DropdownButton>
        </Dropdown>

        <Dropdown className="form-group mx-auto" onSelect={(evt) => setFr(evt)}>
          <DropdownButton
            title={fr ? fr : "Select Factor Rate Range"}
            variant="success"
            id="position-dropdown"
          >
            <Dropdown.Item eventKey="1.20 - 1.25">1.20 - 1.25</Dropdown.Item>
            <Dropdown.Item eventKey="1.25 - 1.30">1.25 - 1.30</Dropdown.Item>
            <Dropdown.Item eventKey="1.30 - 1.35">1.30 - 1.35</Dropdown.Item>
            <Dropdown.Item eventKey="1.35 - 1.40">1.35 - 1.40</Dropdown.Item>
            <Dropdown.Item eventKey="1.40 - 1.45">1.40 - 1.45</Dropdown.Item>
            <Dropdown.Item eventKey="1.45 - 1.50">1.45 - 1.50</Dropdown.Item>
            <Dropdown.Item eventKey="1.50 - 1.55">1.50 - 1.55</Dropdown.Item>
          </DropdownButton>
        </Dropdown>

        <Dropdown
          className="form-group mx-auto"
          onSelect={(evt) => setRange(evt)}
        >
          <DropdownButton
            title={range ? range : "Select Loan Range"}
            variant="success"
            id="position-dropdown"
          >
            <Dropdown.Item eventKey="$0 - $10k">$0 - $10k</Dropdown.Item>
            <Dropdown.Item eventKey="$10k - $20k">$10k - $20k</Dropdown.Item>
            <Dropdown.Item eventKey="$20k - $30k">$20k - $30k</Dropdown.Item>
            <Dropdown.Item eventKey="$30k - $40k">$30k - $40k</Dropdown.Item>
            <Dropdown.Item eventKey="$40k - $50k">$40k - $50k</Dropdown.Item>
            <Dropdown.Item eventKey="$50k - $60k">$50k - $60k</Dropdown.Item>
            <Dropdown.Item eventKey="$60k - $70k">$60k - $70k</Dropdown.Item>
            <Dropdown.Item eventKey="$70k - $80k">$70k - $80k</Dropdown.Item>
            <Dropdown.Item eventKey="$80k - $90k">$80k - $90k</Dropdown.Item>
            <Dropdown.Item eventKey="$90k+">$90k+</Dropdown.Item>
          </DropdownButton>
        </Dropdown>

        <Dropdown
          className="form-group mx-auto"
          onSelect={(evt) => setTib(evt)}
        >
          <DropdownButton
            title={tib ? tib : "Select Time in Business"}
            variant="success"
            id="tib-dropdown"
          >
            <Dropdown.Item eventKey="More Than 5 Years">
              More Than 5 Years
            </Dropdown.Item>
            <Dropdown.Item eventKey="3-4 Years">3-4 Years</Dropdown.Item>
            <Dropdown.Item eventKey="1-2 Years">1-2 Years</Dropdown.Item>
            <Dropdown.Item eventKey="6-12 Months">6-12 Months</Dropdown.Item>
            <Dropdown.Item eventKey="Less Than 6 Months">
              Less Than 6 Months
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>

        <Dropdown
          className="form-group mx-auto"
          onSelect={(evt) => setcScore(evt)}
        >
          <DropdownButton
            title={cScore ? cScore : "Select Credit Range"}
            variant="success"
            id="credit-dropdown"
          >
            <Dropdown.Item eventKey="More Than 700">
              More Than 700
            </Dropdown.Item>
            <Dropdown.Item eventKey="650-700">650-700</Dropdown.Item>
            <Dropdown.Item eventKey="600-650">600-650</Dropdown.Item>
            <Dropdown.Item eventKey="Less Than 600">
              Less Than 600
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </form>
      <br />
      <Button variant="primary" className="form-group" onClick={pingJSON}>
        Calculate Success
      </Button>
      <Button
        variant="danger"
        className="form-group  ml-2"
        onClick={handleClear}
      >
        Clear
      </Button>
      {message && (
        <>
          <p>{message}</p>
          <Button variant="link" onClick={toggleExplanation}>
            Show Explanation
          </Button>
          {explanationShown && [explanation]}
        </>
      )}
    </div>
  );
};

export default CalculateSuccess;
