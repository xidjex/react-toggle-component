import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const VariantsContainerMixin = css`
  width: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-content: space-around;
`;

const Item = styled.span`
    padding: 1px 22px;
    font-size: 16px;
    white-space: nowrap;
`;

const ToggleContainer = styled.div`
  padding: 3px;
  border-radius: 13px;
  border: 1px solid #fff;
  cursor: pointer;
  position: relative;
  
  ${VariantsContainerMixin}

  > ${Item} {
    color: #fff;
  }
`;

const InnerItemsContainer = styled(motion.div)`
    ${VariantsContainerMixin}
`;

const ActiveItem = styled(motion.div)`
  display: flex;
  position: absolute;
  align-items: center;
  background-color: #fff;
  border-radius: 9px;
  overflow: hidden;
  left: 0;

  > ${Item} {
    color: #000000;
  }
`;

const transition = {
    type: 'spring',
    damping: 17,
    duration: 0.6
};

export {
    Item,
    ToggleContainer,
    InnerItemsContainer,
    ActiveItem,
    transition
};
