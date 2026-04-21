import { useState } from "react";
import herbalGel from "../../assets/products/herbalgel.png";
import "./Styles/HerbalGel.css";
import { PlaceOrder } from "../../Components/Modals/PlaceOrder";

type SizeOption = "40g" | "200g";
type PricingMap = Record<SizeOption, number>;

export const HerbalGel: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<SizeOption>("40g");
  const [quantity, setQuantity] = useState<number>(1);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // modal data
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [txnId, setTxnId] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);

  const pricing: PricingMap = {
    "40g": 200,
    "200g": 340,
  };

  const unitPrice = pricing[selectedSize];
  const totalPrice = unitPrice * quantity;

  const increaseQty = () => setQuantity((p) => p + 1);
  const decreaseQty = () => setQuantity((p) => (p > 1 ? p - 1 : 1));

  return (
    <div className="hrg-container">

      {/* BUY BOX */}
      <div className="hrg-buybox hrg-glass">

        {/* LEFT */}
        <div className="hrg-buybox-left">
          <img className="hrg-image" src={herbalGel} alt="Herbal Gel" />
        </div>

        {/* RIGHT */}
        <div className="hrg-buybox-right">

          <h1 className="hrg-title">Gone in 8 Dot Herbal Gel</h1>
          <p className="hrg-subtitle">
            Kill Cockroaches at the Root — Not Just What You See
          </p>

          {/* PRICE */}
          <div className="hrg-price-row">
            <span className="hrg-price">₹{unitPrice}</span>
            <span className="hrg-mrp">₹499</span>
            <span className="hrg-discount">30% off</span>
          </div>

          {/* SIZE */}
          <div className="hrg-option-block">
            <p className="hrg-label">Size</p>
            <div className="hrg-size-options">
              {(Object.keys(pricing) as SizeOption[]).map((size) => (
                <button
                  key={size}
                  className={`hrg-size-btn ${
                    selectedSize === size ? "active" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="hrg-option-block">
            <p className="hrg-label">Quantity</p>
            <div className="hrg-qty-control">
              <button className="hrg-qty-btn" onClick={decreaseQty}>-</button>
              <span className="hrg-qty-value">{quantity}</span>
              <button className="hrg-qty-btn" onClick={increaseQty}>+</button>
            </div>
          </div>

          {/* TOTAL */}
          <div className="hrg-total-box">
            <p>Total</p>
            <span>₹{totalPrice}</span>
          </div>

          {/* CTA */}
          <button
            className="hrg-buy-now"
            onClick={() => setModalOpen(true)}
          >
            Place Order
          </button>

        </div>
      </div>

      {/* CONTENT */}
        <div className="hrg-content hrg-glass">

    <h2 className="hrg-content-title">
        Kill Cockroaches at the Root — Not Just What You See
    </h2>

    <p className="hrg-content-subtitle">
        Gone in 8 Dot Herbal Gel
    </p>

    <p className="hrg-content-subtitle">
        Stop spraying. Stop chasing. End the problem from inside the nest.
    </p>

    {/* VIDEOS */}
    <div className="hrg-video-grid">
        <iframe className="hrg-video" src="https://www.youtube.com/embed/s-0YNlOHdkk" />
        <iframe className="hrg-video" src="https://www.youtube.com/embed/acRlZz8E0Xg" />
    </div>

    {/* WHY FAIL */}
    <div className="hrg-block">
        <h3 className="hrg-block-title">Why Your Current Method Fails</h3>
        <ul className="hrg-list">
        <li className="hrg-list-item">Sprays only kill what you see</li>
        <li className="hrg-list-item">Cockroaches hide deep inside walls</li>
        <li className="hrg-list-item">They multiply fast — very fast</li>
        <li className="hrg-list-item">One missed roach = problem comes back</li>
        </ul>
    </div>

    {/* HOW IT WORKS */}
    <div className="hrg-block">
        <h3 className="hrg-block-title">This Gel Works Differently</h3>
        <ul className="hrg-list">
        <li className="hrg-list-item">Roaches eat the gel</li>
        <li className="hrg-list-item">They go back to the nest</li>
        <li className="hrg-list-item">Others get infected</li>
        <li className="hrg-list-item">Whole colony dies</li>
        </ul>
    </div>

    {/* BENEFITS */}
    <div className="hrg-block">
        <h3 className="hrg-block-title">Why People Switch to This</h3>
        <ul className="hrg-list">
        <li className="hrg-list-item">Safe around kids & pets (when used properly)</li>
        <li className="hrg-list-item">No smell. No mess.</li>
        <li className="hrg-list-item">No repeated spraying</li>
        <li className="hrg-list-item">Works in hidden areas</li>
        <li className="hrg-list-item">6–12 months protection</li>
        </ul>
    </div>

    {/* USE CASES */}
    <div className="hrg-block">
        <h3 className="hrg-block-title">Perfect for</h3>
        <ul className="hrg-list">
        <li className="hrg-list-item">Kitchen cabinets</li>
        <li className="hrg-list-item">Under sinks</li>
        <li className="hrg-list-item">Behind fridge</li>
        <li className="hrg-list-item">Bathroom corners</li>
        <li className="hrg-list-item">Cracks & gaps</li>
        </ul>
    </div>

    {/* PROBLEM */}
    <div className="hrg-alert">
        German cockroaches multiply fast. If you see a few, many more are hiding.
    </div>

    {/* HOW TO USE */}
    <div className="hrg-block">
        <h3 className="hrg-block-title">How to Use</h3>
        <ul className="hrg-list">
        <li className="hrg-list-item">Apply small dots where roaches move</li>
        <li className="hrg-list-item">Do not clean immediately</li>
        <li className="hrg-list-item">Let them carry it back</li>
        <li className="hrg-list-item">Watch results in days</li>
        </ul>
    </div>

    {/* WHAT YOU GET */}
    <div className="hrg-block">
        <h3 className="hrg-block-title">What You Get</h3>
        <ul className="hrg-list">
        <li className="hrg-list-item">Easy-to-use gel tube</li>
        <li className="hrg-list-item">Strong bait formula</li>
        <li className="hrg-list-item">Long-term protection</li>
        <li className="hrg-list-item">Peace of mind</li>
        </ul>
    </div>

    {/* WARRANTY */}
    <div className="hrg-alert">
        ✔ 6 Months to 2 Years Coverage
    </div>

    {/* FINAL PUSH */}
    <div className="hrg-alert">
        Every day you delay = more eggs, more roaches.
    </div>

     {/* BUY BOX */}
      <div className="hrg-buybox hrg-glass">

        {/* LEFT */}
        <div className="hrg-buybox-left">
          <img className="hrg-image" src={herbalGel} alt="Herbal Gel" />
        </div>

        {/* RIGHT */}
        <div className="hrg-buybox-right">

          <h1 className="hrg-title">Gone in 8 Dot Herbal Gel</h1>
          <p className="hrg-subtitle">
            Kill Cockroaches at the Root — Not Just What You See
          </p>

          {/* PRICE */}
          <div className="hrg-price-row">
            <span className="hrg-price">₹{unitPrice}</span>
            <span className="hrg-mrp">₹499</span>
            <span className="hrg-discount">30% off</span>
          </div>

          {/* SIZE */}
          <div className="hrg-option-block">
            <p className="hrg-label">Size</p>
            <div className="hrg-size-options">
              {(Object.keys(pricing) as SizeOption[]).map((size) => (
                <button
                  key={size}
                  className={`hrg-size-btn ${
                    selectedSize === size ? "active" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="hrg-option-block">
            <p className="hrg-label">Quantity</p>
            <div className="hrg-qty-control">
              <button className="hrg-qty-btn" onClick={decreaseQty}>-</button>
              <span className="hrg-qty-value">{quantity}</span>
              <button className="hrg-qty-btn" onClick={increaseQty}>+</button>
            </div>
          </div>

          {/* TOTAL */}
          <div className="hrg-total-box">
            <p>Total</p>
            <span>₹{totalPrice}</span>
          </div>

          {/* CTA */}
          <button
            className="hrg-buy-now"
            onClick={() => setModalOpen(true)}
          >
            Take Control Now
          </button>

        </div>
      </div>

        </div>

      {/* MODAL */}
      {modalOpen && (
        <PlaceOrder
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          txnId={txnId}
          setTxnId={setTxnId}
          screenshot={screenshot}
          setScreenshot={setScreenshot}
          onClose={() => setModalOpen(false)}
        />
      )}

    </div>
  );
};