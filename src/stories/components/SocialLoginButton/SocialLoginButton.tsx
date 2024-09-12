import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Image from "next/image";
import Github from "../../assets/github-white.svg";
import { cn } from "../../lib/utils";

const SIGN_IN_BUTTON_STYLES: Record<string, string> = {
    github: "bg-black text-white",
    apple: "bg-black text-white",
    google: "bg-white text-gray-400",
};

const SIGN_IN_BUTTON_TEXT: Record<string, string> = {
    github: "Sign in with Github", // TODO i18n?
    apple: "Sign in with Apple",
    google: "Sign in with Google",
};

const SIGN_IN_BUTTON_ICON: Record<string, any> = {
    github: Github,
    apple: null,
    google: null,
};

interface SSOButtonProps
    extends DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >,
        React.AriaAttributes {
    providerId: string;
}

/**
 * A small
 * @param param0
 * @returns
 */
export const SocialLoginButton = ({
    providerId,
    ...restProps
}: SSOButtonProps) => {
    return (
        <button
            className={cn(
                "w-full rounded-md px-3 py-3",
                SIGN_IN_BUTTON_STYLES[providerId]
            )}
            {...restProps}
        >
            <div className="flex flex-row items-center justify-start text-white">
                {SIGN_IN_BUTTON_ICON[providerId] && (
                    <Image
                        width={24}
                        height={24}
                        layout="fixed"
                        src={SIGN_IN_BUTTON_ICON[providerId]}
                        alt={`${providerId} logo`}
                    />
                )}

                <div className="ml-2">{SIGN_IN_BUTTON_TEXT[providerId]}</div>
            </div>
        </button>
    );
};
