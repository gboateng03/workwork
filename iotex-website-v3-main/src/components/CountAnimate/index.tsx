import React, { useEffect } from "react";
import { numberWithCommas } from "../../utils/index";
import { useCountUp } from "react-countup";

interface IComponentProps {
  value: number;
  decimals?: number;
}

export const CountAnimate = (props: IComponentProps) => {
  const { value, decimals = 0  } = props;
  const { countUp, update } = useCountUp({
    start: 0,
    end: value,
    delay: 0,
    duration: 1,
    decimals,
  });

  useEffect(() => {
    update(value);
  }, [value]);

  return (
    <span>{numberWithCommas(countUp) || 0}</span>
  );
};
