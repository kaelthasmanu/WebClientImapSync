import { Button } from "@nextui-org/react"
import React, { useState } from 'react';

function ButtonComponent() {
  const [buttonEnable, setButtonDisabled] = useState(true);
  const [buttonLoading, setButtonLoading] = useState();

  const handleClickDisabled = () => {
    setButtonDisabled(false);
    return (
      <Button size='md' isDisabled onPress={handleClickLoading} >Empezar</Button>
    );
    // You can perform other actions here based on the button click
  };
  const handleClickLoading = () => {
    setButtonLoading(true);
    setButtonDisabled(false)
    // You can perform other actions here based on the button click
  };
  if (buttonEnable){
    return (<Button size='md' onPress={handleClickLoading} >Empezar</Button>)
  }
  if (buttonEnable){
    return (<Button size='md' onPress={handleClickLoading} >Empezar</Button>)
  }
  if (buttonLoading){
    return (<Button size='md' isLoading onPress={handleClickLoading} >Empezar</Button>)
  }
}

export default ButtonComponent;
