import React from "react";
import {Input} from "@nextui-org/react";

export default function InputEmailComponent() {
    const [value, setValue] = React.useState("manuel.gorrin@umcc.cu");

    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const validationState = React.useMemo(() => {
        if (value === "") return undefined;
        return validateEmail(value) ? "valid" : "invalid";
    }, [value]);

    
    return (
    <Input
      value={value}
      label="Email"
      variant="bordered"
      placeholder="Enter your email"
      color={validationState === "invalid" ? "danger" : "success"}
      errorMessage={validationState === "invalid" && "Please enter a valid email"}
      validationState={validationState}
      onValueChange={setValue}
      /*endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }*/
      className="max-w-xs text-black text-lg bg-zinc-400 rounded-lg"
    />
  );
}
