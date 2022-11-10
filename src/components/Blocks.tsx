import React from "react";

type BlockType = {
  className?: string;
  state?: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
function Blocks(props: BlockType) {
  return (
    <span
      className={`block  ${
        props.className
      } border-4 border-warning user-select-none ${
        props.state ? "text-danger" : "text-black"
      }`}
      onClick={props.handleClick}
    >
      {props.state ? props.state : "X"}
    </span>
  );
}

export default Blocks;
