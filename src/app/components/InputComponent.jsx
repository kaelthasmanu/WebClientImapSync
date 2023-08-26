import React, { useState } from "react";
import {Input} from "@nextui-org/react";
import ButtonComponent from "./ButtonComponent";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";


export default function InputComponent() {
    const [value, setValue] = useState("manuel.gorrin@umcc.cu");
    const [isVisible, setIsVisible] = useState(false);
    const [password, setPassword] = useState("asd");

    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const validationState = React.useMemo(() => {
        if (value === "") return undefined;
        return validateEmail(value) ? "valid" : "invalid";
    }, [value]);

    const toggleVisibility = () => setIsVisible(!isVisible);
      
    return (
    <div>
        <div className='flex flex-auto self-auto justify-center space-x-60 p-10 mb-3'>
        <Input
        value={value}
        label="Email"
        variant="bordered"
        placeholder="Enter your email"
        color={validationState === "invalid" ? "danger" : "success"}
        errorMessage={validationState === "invalid" && "Please enter a valid email"}
        validationState={validationState}
        onValueChange={setValue}
        className="max-w-xs text-black text-lg bg-zinc-400 rounded-lg"
        />
        <Input
        value={password}
        label="Password"
        variant="bordered"
        placeholder="Enter your password"
        onValueChange={setPassword}
        endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
            {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
            </button>
        }
        type={isVisible ? "text" : "password"}
        className="max-w-xs text-black text-lg bg-zinc-400 rounded-lg"
        />
    </div>
    <div className='flex flex-auto self-auto justify-center'>
        <ButtonComponent user={value} pass={password}/>
    </div>
    </div>
    
  );
}

