export const InterestList = ({ data, interestIcon }: any) => (
  <button className="interest-list">
    <div className="sub-interest">
      <div>{interestIcon}</div>
      <div>{data}</div>
    </div>
  </button>
);
