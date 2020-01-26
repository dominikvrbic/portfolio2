import React, { useState } from "react";
import { css } from "emotion";
import { EmailForm } from "./EmailForm";
import Collapsible from "react-collapsible";
import Typography from "@material-ui/core/Typography";

const expandedStyle = css`
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
`;
const collapsibleStyle = css`
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
`;

export const ContactMe = () => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        You can click down below to contact me.
      </Typography>
      <Collapsible
        transitionTime={250}
        openedClassName={expandedStyle}
        onOpen={() => setIsClosed(false)}
        onClose={() => setIsClosed(true)}
        className={collapsibleStyle}
        trigger={
          <Typography gutterBottom variant="h5" component="h2">
            Click Here!!!
          </Typography>
        }
      >
        <EmailForm />
      </Collapsible>
    </div>
  );
};
