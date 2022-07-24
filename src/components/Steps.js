const Steps = (props) => {
  return (
    <div className="steps">
      {[1, 2, 3, 4].map((_, index) => {
        return (
          <div
            className="step"
            key={index}
          >
            {index > 0 && (
              <div className={index + 1 <= props.current ? "vr blue" : "vr"} />
            )}
            <div className={props.current >= index + 1 ? "circle blue" : "circle"}>{index + 1}</div>
            {index < 3 && (
              <div className={index + 1 <= props.current ? "vr blue" : "vr"} />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Steps;
