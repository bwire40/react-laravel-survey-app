import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function TButton({
    color = "",
    to = "",
    circle = "",
    href = "",
    link = "",
    target = "_blank",
    children,
}) {
    let classes = [
        "flex",
        "whitespace-nowrap",
        "text-sm",
        "border",
        "border-2",
        "border-transparent",
    ];
    if (link) {
        classes = [...classes, "transition-colors"];

        switch (color) {
            case "indigo":
                classes = [
                    ...classes,
                    "text-indigo-500",
                    "focus:border-indigo-500",
                ];
                break;
            case "red":
                classes = [...classes, "text-red-500", "focus:border-red-500"];
                break;
        }
    } else {
        classes = [
            ...classes,
            "text-white",
            "focus:ring-2",
            "focus:ring-offset-2",
        ];

        switch (color) {
            case "indigo":
                classes = [
                    ...classes,
                    "text-indigo-500",
                    "focus:border-indigo-500",
                ];
                break;
            case "red":
                classes = [...classes, "text-red-500", "focus:border-red-500"];
                break;

            case "green":
                classes = [
                    ...classes,
                    "bg-emerald-500",
                    "hover:bg-emerald-600",
                    "focus:ring-emerald-400",
                ];
                break;
        }
    }

    if (circle) {
        classes = [
            "h-8",
            "w-8",
            "items-center",
            "justify-center",
            "rounded-full",
            "text-sm",
        ];
    } else {
        classes = [...classes, "p-0", "py-2", "px-4", "rounded-md"];
    }

    return (
        <>
            {href && (
                <a href={href} className={classes.join(" ")} target={target}>
                    {children}
                </a>
            )}
            {to && (
                <Link to={to} className={classes.join(" ")}>
                    {children}
                </Link>
            )}
            {!to && !href && (
                <button className={`${classes.join(" ")}`}>{children}</button>
            )}
        </>
    );
}

export default TButton;
