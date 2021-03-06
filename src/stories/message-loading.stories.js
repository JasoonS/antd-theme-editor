import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.message", module);
import { message, Button } from "antd";

const success = () => {
  const hide = message.loading("Action in progress..", 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

stories.addWithJSX("loading", () => (
  <Button onClick={success}>Display a loading indicator</Button>
));
