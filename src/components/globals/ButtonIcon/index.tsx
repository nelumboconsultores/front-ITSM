"use client";
import { Button } from "antd";
import React, { ReactNode } from "react";
import { clsx } from "clsx";

import styles from "./styles.module.scss";

type ShapeType = "circle" | "round" | "default" | undefined;
const CustomButtonIcon = ({
  text = "",
  shape,
  icon,
  iconDrawer,
  onClick,
}: {
  text?: string | undefined;
  shape?: ShapeType;
  icon?: ReactNode;
  iconDrawer?: boolean;
  onClick?: () => void;
}) => {
  const buttonClass = clsx(styles["ant-btn"], {
    [styles["icon-drawer"]]: iconDrawer,
  });
  return (
    <Button shape={shape} icon={icon} className={buttonClass} onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButtonIcon;
