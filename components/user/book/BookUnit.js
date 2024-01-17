export default function BookUnit({ imageUrl, title, writer, step }) {
  return (
    <div className={"flex flex-col gap-1 w-40"}>
      <div className={"w-48 h-auto 2xl:w-60 2xl:h-60"}>
        <img
          src={imageUrl}
          className={"h-[240px] w-[150px] rounded-lg object-fill"}
        />
      </div>
      {title !== "" && (
        <h1>
          <b>{title}</b>
        </h1>
      )}
      {writer !== "" && <p className={"text-[#888888]"}>{writer}</p>}{" "}
      {step && step !== "" && <p className={"text-[#888888]"}>{step}단계 책</p>}{" "}
    </div>
  );
}
