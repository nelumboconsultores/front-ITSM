"use client";
import React from "react";
import { Button } from "antd";
import { clsx } from "clsx";

import styles from "./styles.module.scss";

export const CustomButtonText = ({
  text,
  width,
  buttonDrawer,
}: {
  text: string | undefined;
  width?: boolean | undefined;
  buttonDrawer?: boolean;
}) => {
  const buttonClass = clsx(styles["custom-boton-primary"], {
    [styles["width-large"]]: width,
    [styles["button-drawer"]]: buttonDrawer,
  });

  return <Button className={buttonClass}>{text}</Button>;
};
