// Images
import value2x from "assets/images/value@2x.png";

function Value(props) {
  return (
    <section className="value main-theme-color">
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <p className="amount-title">Total value delivered by Standard</p>
            <p className="value-text">$600,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Value;
