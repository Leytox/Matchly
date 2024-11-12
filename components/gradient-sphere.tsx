import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const gradientSphere = cva(
  "absolute bg-gradient-to-r rounded-full blur-3xl animate-pulse -z-10",
  {
    variants: {
      size: {
        sm: "w-[200px] h-[200px]",
        md: "w-[400px] h-[400px]",
        lg: "w-[800px] h-[800px]",
      },
      color: {
        default:
          "from-orange-500/50 dark:from-orange-500/20 via-blue-500/50 dark:via-blue-500/20 to-green-500/50 dark:to-green-500/20",
        secondary:
          "from-yellow-500/50 dark:from-yellow-500/20 via-red-500/50 dark:via-red-500/20 to-fuchsia-500/50 dark:to-fuchsia-500/20",
        tertiary:
          "from-purple-500/50 dark:from-purple-500/20 via-green-500/50 dark:via-green-500/20 to-orange-500/50 dark:to-orange-500/20",
      },
      position: {
        left: "left-0",
        right: "right-0",
        center: "left-1/2 right-1/2 transform -translate-x-1/2",
      },
      hide: { hidden: "lg:hidden" },
    },
    defaultVariants: {
      size: "lg",
      color: "default",
      position: "left",
    },
  },
);

export const GradientSphere = (
  props: {
    size?: "sm" | "md" | "lg";
    color?: "default" | "secondary" | "tertiary";
    hide?: "hidden";
    position?: "left" | "right" | "center";
    className?: string;
  } & HTMLAttributes<HTMLDivElement>,
) => {
  return (
    <div
      {...props}
      className={gradientSphere({
        size: props.size,
        color: props.color,
        hide: props.hide,
        position: props.position,
        className: props.className,
      })}
    />
  );
};