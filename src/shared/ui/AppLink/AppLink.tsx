import { Link, LinkProps } from "react-router-dom";
import styles from "./AppLink.module.scss";
import { classNames } from "shared/lib/helpers/classNames";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export function AppLink(props: AppLinkProps) {
  const { applink } = styles;
  const {
    className,
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      {...otherProps}
      className={classNames(applink, [styles[theme]])}
    >
      {children}
    </Link>
  );
}
