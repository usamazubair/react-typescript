//restrictions

type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isZero?: never;
  isPositive: boolean;
};

type ZeroNumber = RandomNumberType & {
  isZero: boolean;
  isPositive: boolean;
  isNegative?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber;

function RandomNumber({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}
    </div>
  );
}

export default RandomNumber;
