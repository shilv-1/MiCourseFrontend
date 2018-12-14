import { Media } from "reactstrap";
import styled from "styled-components";

const StyledDiv = styled.div`

  padding: 8px;

  .media-body {
    padding-left: 2%;
  }

  .media-body h4 {
    color: #666;
    padding: 3px 0 7px 0;
    font-size: .875rem;
    margin-bottom: 0;
  }

  .media-left {
    max-width: 100%;
    width: 10%;
    float: left;
  }

  .media-left img {
    border-radius: 6px;
    width: 100%;
    height: auto;
    display: block;
  }
`;

export default function FooterBlock(props) {

  return (
      <StyledDiv>
        <Media>
          <Media left>
            <Media src={props.brand} alt="logo" />
          </Media>
          <Media body>
            <Media heading>
              {props.title}
            </Media>
            {props.context}
          </Media>
        </Media>
      </StyledDiv>
  );

}
