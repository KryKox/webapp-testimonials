import {LoggedInButton} from "@/features/auth/LoggedInButton";
import {ThemeToggle} from "@/features/theme/ThemeToggle";

export const Header = () => {
    return (
        <div className={"flex items-center"}>
            <LoggedInButton />
            <ThemeToggle />
        </div>
    );
};

