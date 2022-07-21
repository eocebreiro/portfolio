import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import { buttonStyles } from "./buttonStyles";

export const StyledHashLink = styled(HashLink)`
  ${buttonStyles};
`;

export const StyledLink = styled(Link)`
  ${buttonStyles};
`;
