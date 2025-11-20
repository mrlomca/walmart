// app/page.tsx
export default function Home() {
  return (
    <div className="content">
      <div className="tag">New Feedback Program</div>
      <h1>Share your thoughts.</h1>
      <h2>Earn $500.</h2>
      <p>
        Your opinions about Walmart matter. Help us improve the shopping experience and receive $500 as our way of saying thanks.
      </p>
      <a href="https://rewarduplevel.com/aff_c?offer_id=1377&aff_id=161682" className="btn" aria-label="Start Walmart feedback program">
        Get Started →
      </a>
      <div className="time-info">5 minutes • No purchase required</div>
      <div className="features">
        <div className="feature">
          <div className="dot green"></div>
          Secure & Private
        </div>
        <div className="feature">
          <div className="dot blue"></div>
          Instant Qualification
        </div>
        <div className="feature">
          <div className="dot purple"></div>
          Guaranteed Payout
        </div>
      </div>
    </div>
  );
}